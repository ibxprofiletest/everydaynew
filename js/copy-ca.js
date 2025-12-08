// Handle CA: Coming Soon button copy functionality
(function() {
  function initCopyButton() {
    // Find the button containing "CA: Coming Soon!"
    const button = document.querySelector('button[style*="linear-gradient(to right, #f97316"]');
    if (!button) return;

    // Find the span containing "CA: Coming Soon!"
    const spans = button.querySelectorAll('span');
    let caSpan = null;
    
    for (let span of spans) {
      if (span.textContent && span.textContent.includes('CA: Coming Soon!')) {
        caSpan = span;
        break;
      }
    }

    if (!caSpan) return;

    // Add click handler to the span
    caSpan.style.cursor = 'pointer';
    caSpan.addEventListener('click', function(e) {
      e.stopPropagation();
      
      const textToCopy = 'CA';
      let copied = false;

      // Try modern clipboard API first
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            copied = true;
            showCopied(caSpan);
          })
          .catch(() => {
            // Fallback to execCommand
            fallbackCopy(textToCopy, caSpan);
          });
      } else {
        // Fallback for older browsers
        fallbackCopy(textToCopy, caSpan);
      }
    });
  }

  function fallbackCopy(text, span) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    textarea.style.left = '-999999px';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
      const successful = document.execCommand('copy');
      if (successful) {
        showCopied(span);
      }
    } catch (err) {
      console.error('Fallback copy failed:', err);
    }
    
    document.body.removeChild(textarea);
  }

  function showCopied(span) {
    const originalText = span.textContent;
    span.textContent = 'Copied!';
    
    setTimeout(() => {
      span.textContent = originalText;
    }, 2000);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCopyButton);
  } else {
    initCopyButton();
  }

  // Also try after a short delay in case the button is added dynamically
  setTimeout(initCopyButton, 500);
  setTimeout(initCopyButton, 1000);
  setTimeout(initCopyButton, 2000);
})();

