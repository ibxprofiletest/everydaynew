(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8974],
  {
    941: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => ex, dynamic: () => ed });
      var s = a(40554),
        r = a(47682),
        n = a(33551),
        i = a(89998),
        l = a(79730),
        o = a(99474),
        c = a(52729),
        d = a(62337);
      function x(e) {
        let { className: t, children: a, viewport: r = !0, ...n } = e;
        return (0, s.jsxs)(c.Root, {
          "data-slot": "navigation-menu",
          "data-viewport": r,
          className: (0, d.cn)(
            "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
            t
          ),
          ...n,
          children: [a, r && (0, s.jsx)(p, {})],
        });
      }
      function u(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)(c.List, {
          "data-slot": "navigation-menu-list",
          className: (0, d.cn)(
            "group flex flex-1 list-none items-center justify-center gap-1",
            t
          ),
          ...a,
        });
      }
      function m(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)(c.Item, {
          "data-slot": "navigation-menu-item",
          className: (0, d.cn)("relative", t),
          ...a,
        });
      }
      function p(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)("div", {
          className: (0, d.cn)(
            "absolute top-full left-0 isolate z-50 flex justify-center"
          ),
          children: (0, s.jsx)(c.Viewport, {
            "data-slot": "navigation-menu-viewport",
            className: (0, d.cn)(
              "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
              t
            ),
            ...a,
          }),
        });
      }
      function h(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)(c.Link, {
          "data-slot": "navigation-menu-link",
          className: (0, d.cn)(
            "data-[active]:focus:bg-accent data-[active]:hover:bg-accent data-[active]:bg-accent data-[active]:text-accent-foreground hover:bg-accent focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
            t
          ),
          ...a,
        });
      }
      (0, o.F)(
        "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
      );
      var f = a(29004);
      function g(e) {
        let { ...t } = e;
        return (0, s.jsx)(f.Root, { "data-slot": "popover", ...t });
      }
      function v(e) {
        let { ...t } = e;
        return (0, s.jsx)(f.Trigger, { "data-slot": "popover-trigger", ...t });
      }
      function b(e) {
        let {
          className: t,
          align: a = "center",
          sideOffset: r = 4,
          showArrow: n = !1,
          ...i
        } = e;
        return (0, s.jsx)(f.Portal, {
          children: (0, s.jsxs)(f.Content, {
            "data-slot": "popover-content",
            align: a,
            sideOffset: r,
            className: (0, d.cn)(
              "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md outline-hidden",
              t
            ),
            ...i,
            children: [
              i.children,
              n &&
                (0, s.jsx)(f.Arrow, {
                  className:
                    "fill-popover -my-px drop-shadow-[0_1px_0_var(--border)]",
                }),
            ],
          }),
        });
      }
      var y = a(13907),
        j = a(20768),
        w = a(29944),
        N = a(51243),
        _ = a(41881);
      let k = [
          { key: "system", icon: j.A, label: "System theme" },
          { key: "light", icon: w.A, label: "Light theme" },
          { key: "dark", icon: N.A, label: "Dark theme" },
        ],
        C = (e) => {
          let {
              value: t,
              onChange: a,
              defaultValue: n = "system",
              className: i,
            } = e,
            [l, o] = (0, y.i)({ defaultProp: n, prop: t, onChange: a }),
            [c, x] = (0, r.useState)(!1),
            u = (0, r.useCallback)(
              (e) => {
                o(e);
              },
              [o]
            );
          return ((0, r.useEffect)(() => {
            x(!0);
          }, []),
          c)
            ? (0, s.jsx)("div", {
                className: (0, d.cn)(
                  "relative isolate flex h-8 rounded-full bg-background p-1 ring-1 ring-border",
                  i
                ),
                children: k.map((e) => {
                  let { key: t, icon: a, label: r } = e,
                    n = l === t;
                  return (0, s.jsxs)(
                    "button",
                    {
                      "aria-label": r,
                      className: "relative h-6 w-6 rounded-full",
                      onClick: () => u(t),
                      type: "button",
                      children: [
                        n &&
                          (0, s.jsx)(_.P.div, {
                            className:
                              "absolute inset-0 rounded-full bg-secondary",
                            layoutId: "activeTheme",
                            transition: { type: "spring", duration: 0.5 },
                          }),
                        (0, s.jsx)(a, {
                          className: (0, d.cn)(
                            "relative z-10 m-auto h-4 w-4",
                            n ? "text-foreground" : "text-muted-foreground"
                          ),
                        }),
                      ],
                    },
                    t
                  );
                }),
              })
            : null;
        };
      var E = a(34831);
      let z = [];
      function A() {
        let { theme: e, setTheme: t } = (0, E.D)();
        return (0, s.jsx)("header", {
          className: "px-4 md:px-6 backdrop-blur-xs pointer-events-auto",
          children: (0, s.jsxs)("div", {
            className: "flex h-16 items-center justify-between gap-4",
            children: [
              (0, s.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                  (0, s.jsxs)(g, {
                    children: [
                      (0, s.jsx)(v, {
                        asChild: !0,
                        children: (0, s.jsx)(l.$, {
                          className: "group size-8 md:hidden",
                          variant: "ghost",
                          size: "icon",
                          children: (0, s.jsxs)("svg", {
                            className: "pointer-events-none",
                            width: 16,
                            height: 16,
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                              (0, s.jsx)("path", {
                                d: "M4 12L20 12",
                                className:
                                  "origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]",
                              }),
                              (0, s.jsx)("path", {
                                d: "M4 12H20",
                                className:
                                  "origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45",
                              }),
                              (0, s.jsx)("path", {
                                d: "M4 12H20",
                                className:
                                  "origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]",
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, s.jsx)(b, {
                        align: "start",
                        className: "w-36 p-1 md:hidden",
                        children: (0, s.jsx)(x, {
                          className: "max-w-none *:w-full",
                          children: (0, s.jsx)(u, {
                            className: "flex-col items-start gap-0 md:gap-2",
                            children: z.map((e, t) =>
                              (0, s.jsx)(
                                m,
                                {
                                  className: "w-full",
                                  children: (0, s.jsx)(h, {
                                    href: e.href,
                                    className: "py-1.5",
                                    active: e.active,
                                    children: e.label,
                                  }),
                                },
                                t
                              )
                            ),
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex items-center gap-6",
                    children: [
                      (0, s.jsx)("a", {
                        href: "#",
                        className:
                          "flex items-center text-primary hover:text-primary/90",
                        "aria-label": "Pica Home",
                        children: (0, s.jsx)(i.xl, {}),
                      }),
                      (0, s.jsx)(x, {
                        className: "max-md:hidden",
                        children: (0, s.jsx)(u, {
                          className: "gap-2",
                          children: z.map((e, t) =>
                            (0, s.jsx)(
                              m,
                              {
                                children: (0, s.jsx)(h, {
                                  active: e.active,
                                  href: e.href,
                                  className:
                                    "text-muted-foreground hover:text-primary py-1.5 font-medium",
                                  children: e.label,
                                }),
                              },
                              t
                            )
                          ),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "flex items-center gap-3",
                children: [
                  (0, s.jsx)(C, {
                    defaultValue: "system",
                    value: null != e ? e : void 0,
                    onChange: t,
                  }),
                  (0, s.jsx)(l.$, {
                    asChild: !0,
                    size: "sm",
                    className: "text-sm rounded-full font-bold",
                    children: (0, s.jsx)("a", {
                      href: "https://www.everyday.new/register",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: "Get Started",
                    }),
                  }),
                  (0, s.jsx)(l.$, {
                    asChild: !0,
                    size: "sm",
                    className: "text-sm rounded-full font-bold",
                    children: (0, s.jsx)("a", {
                      href: "https://x.com/everydayapphq", // Ensure the URL is correct
                      children: (0, s.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 256 256",
                        fill: "currentColor",
                        children: (0, s.jsx)("path", {
                          d: "M213.06,212.78l-63.42-99.66L212.44,44A6,6,0,1,0,203.56,36L143,102.62l-41.9-65.84A6,6,0,0,0,96,34H48a6,6,0,0,0-5.06,9.22l63.42,99.66L43.56,212A6,6,0,0,0,52.44,220L113,153.38l41.9,65.84A6,6,0,0,0,160,222h48a6,6,0,0,0,5.06-9.22ZM163.29,210,58.93,46H92.71L197.07,210Z",
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var P = a(36767),
        M = a(37434),
        S = a(42937),
        T = a(71510),
        D = a(4522),
        R = a(75555),
        L = a(6497),
        I = a(30936),
        U = a(32726),
        F = a(38725),
        H = a(50084);
      function Y(e) {
        let { onClick: t, className: a } = e;
      }
      function V(e) {
        let { isOpen: t, onClose: a, videoId: n } = e;
        return (
          (0, r.useEffect)(() => {
            let e = (e) => {
              "Escape" === e.key && t && a();
            };
            return (
              document.addEventListener("keydown", e),
              () => document.removeEventListener("keydown", e)
            );
          }, [t, a]),
          (0, r.useEffect)(
            () => (
              t
                ? (document.body.style.overflow = "hidden")
                : (document.body.style.overflow = ""),
              () => {
                document.body.style.overflow = "";
              }
            ),
            [t]
          ),
          (0, s.jsx)(F.N, {
            children:
              t &&
              (0, s.jsxs)("div", {
                className:
                  "fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-8 pointer-events-auto",
                children: [
                  (0, s.jsx)(U.P.div, {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    transition: { duration: 0.2 },
                    onClick: a,
                    className:
                      "absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer",
                  }),
                  (0, s.jsxs)(U.P.div, {
                    initial: { opacity: 0, scale: 0.95 },
                    animate: { opacity: 1, scale: 1 },
                    exit: { opacity: 0, scale: 0.95 },
                    transition: { duration: 0.2 },
                    className:
                      "relative z-10 w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[1200px]",
                    children: [
                      (0, s.jsx)("button", {
                        type: "button",
                        onClick: a,
                        className:
                          "absolute -top-12 right-0 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20 cursor-pointer z-10",
                        "aria-label": "Close video",
                        children: (0, s.jsx)(T.A, { className: "h-6 w-6" }),
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "relative w-full overflow-hidden rounded-lg bg-black shadow-2xl",
                        style: { paddingBottom: "56.25%" },
                        children: (0, s.jsx)("iframe", {
                          className: "absolute inset-0 h-full w-full",
                          src: "https://www.youtube.com/embed/".concat(
                            n,
                            "?autoplay=1&rel=0"
                          ),
                          title: "YouTube video player",
                          allow:
                            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                          allowFullScreen: !0,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
          })
        );
      }
      let W = r.forwardRef((e, t) => {
        let { className: a, containerClassName: n, showRing: i = !0, ...l } = e,
          [o, c] = r.useState(!1);
        return (0, s.jsxs)("div", {
          className: (0, d.cn)("relative", n),
          children: [
            (0, s.jsx)("textarea", {
              className: (0, d.cn)(
                "border-input bg-background flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm",
                "transition-all duration-200 ease-in-out",
                "placeholder:text-muted-foreground",
                "disabled:cursor-not-allowed disabled:opacity-50",
                i
                  ? "focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
                  : "",
                a
              ),
              ref: t,
              onFocus: () => c(!0),
              onBlur: () => c(!1),
              ...l,
            }),
            i &&
              o &&
              (0, s.jsx)(U.P.span, {
                className:
                  "ring-primary/30 pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-0",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: { duration: 0.2 },
              }),
            l.onChange &&
              (0, s.jsx)("div", {
                className:
                  "bg-primary absolute right-2 bottom-2 h-2 w-2 rounded-full opacity-0",
                style: { animation: "none" },
                id: "textarea-ripple",
              }),
          ],
        });
      });
      function G() {
        let [e, t] = (0, r.useState)(""),
          [a, n] = (0, r.useState)([]),
          [i, l] = (0, r.useState)(!1),
          [o, c] = (0, r.useTransition)(),
          [x, u] = (0, r.useState)(-1),
          [m, p] = (0, r.useState)(!1),
          [h, f] = (0, r.useState)(null),
          [g, v] = (0, r.useState)({ x: 0, y: 0 }),
          { textareaRef: b, adjustHeight: y } = (function (e) {
            let { minHeight: t, maxHeight: a } = e,
              s = (0, r.useRef)(null),
              n = (0, r.useCallback)(
                (e) => {
                  let r = s.current;
                  if (!r) return;
                  if (e) {
                    r.style.height = "".concat(t, "px");
                    return;
                  }
                  r.style.height = "".concat(t, "px");
                  let n = Math.max(
                    t,
                    Math.min(r.scrollHeight, null != a ? a : 1 / 0)
                  );
                  r.style.height = "".concat(n, "px");
                },
                [t, a]
              );
            return (
              (0, r.useEffect)(() => {
                let e = s.current;
                e && (e.style.height = "".concat(t, "px"));
              }, [t]),
              (0, r.useEffect)(() => {
                let e = () => n();
                return (
                  window.addEventListener("resize", e),
                  () => window.removeEventListener("resize", e)
                );
              }, [n]),
              { textareaRef: s, adjustHeight: n }
            );
          })({ minHeight: 60, maxHeight: 200 }),
          [w, N] = (0, r.useState)(!1),
          _ = (0, r.useRef)(null),
          [k, C] = (0, r.useState)(!1),
          E = [
            {
              icon: (0, s.jsx)(P.A, { className: "h-4 w-4" }),
              label: "Draft an email",
              description: "Generate a draft of an email",
              prefix: "/email",
            },
            {
              icon: (0, s.jsx)(M.A, { className: "h-4 w-4" }),
              label: "Research my clients",
              description: "Research my day and give me a digest",
              prefix: "/research",
            },
            {
              icon: (0, s.jsx)(j.A, { className: "h-4 w-4" }),
              label: "Schedule a meeting",
              description: "Create a new task in my Notion",
              prefix: "/task",
            },
            {
              icon: (0, s.jsx)(S.A, { className: "h-4 w-4" }),
              label: "Update my CRM",
              description: "Create a new blog post in my Notion",
              prefix: "/blog",
            },
          ];
        (0, r.useEffect)(() => {
          if (e.startsWith("/") && !e.includes(" ")) {
            p(!0);
            let t = E.findIndex((t) => t.prefix.startsWith(e));
            t >= 0 ? u(t) : u(-1);
          } else p(!1);
        }, [e, E]),
          (0, r.useEffect)(() => {
            let e = (e) => {
              v({ x: e.clientX, y: e.clientY });
            };
            return (
              window.addEventListener("mousemove", e),
              () => {
                window.removeEventListener("mousemove", e);
              }
            );
          }, []),
          (0, r.useEffect)(() => {
            let e = (e) => {
              let t = e.target,
                a = document.querySelector("[data-command-button]");
              !_.current ||
                _.current.contains(t) ||
                (null == a ? void 0 : a.contains(t)) ||
                p(!1);
            };
            return (
              document.addEventListener("mousedown", e),
              () => {
                document.removeEventListener("mousedown", e);
              }
            );
          }, []);
        let z = () => {
            if (e.trim()) {
              window.open("https://www.everyday.new/register", "_blank");
            }
          },
          A = (e) => {
            window.open("https://www.everyday.new/register", "_blank");
          };
        return (0, s.jsx)("div", {
          className: "flex w-full h-full overflow-x-hidden pointer-events-none",
          children: (0, s.jsxs)("div", {
            className:
              "text-foreground relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-transparent",
            children: [
              (0, s.jsx)("div", {
                "aria-hidden": !0,
                className: "pointer-events-none absolute inset-0 z-0 hidden",
                style: {
                  backgroundImage:
                    "radial-gradient(currentColor 1.1px, transparent 1.1px)",
                  backgroundSize: "22px 22px",
                  backgroundPosition: "0 0",
                  color: "hsl(var(--muted-foreground))",
                  opacity: 0.18,
                  maskImage:
                    "radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 42%, rgba(255,255,255,0.6) 65%, rgba(255,255,255,0.95) 90%, rgba(255,255,255,1) 100%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 42%, rgba(255,255,255,0.6) 65%, rgba(255,255,255,0.95) 90%, rgba(255,255,255,1) 100%)",
                },
              }),
              (0, s.jsx)("div", {
                className:
                  "relative mx-auto w-full max-w-2xl pointer-events-auto",
                children: (0, s.jsxs)(U.P.div, {
                  className: "relative z-10 space-y-12",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, ease: "easeOut" },
                  children: [
                    (0, s.jsxs)("div", {
                      className: "space-y-3 text-center",
                      children: [
                        (0, s.jsxs)(U.P.div, {
                          initial: { opacity: 0, y: 10 },
                          animate: { opacity: 1, y: 0 },
                          transition: { delay: 0.2, duration: 0.5 },
                          className: "inline-block",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "mb-3 sm:mb-4 flex items-center justify-center pointer-events-auto",
                              children: (0, s.jsx)(Y, { onClick: () => C(!0) }),
                            }),
                            (0, s.jsxs)("h1", {
                              className:
                                "p-4 sm:p-6 text-4xl sm:text-5xl md:text-6xl tracking-tight font-serif",
                              children: [
                                "Get more done,",
                                (0, s.jsxs)("span", {
                                  className:
                                    "text-4xl sm:text-5xl md:text-6xl font-normal italic",
                                  children: [(0, s.jsx)("br", {}), "Everyday."],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsx)(U.P.p, {
                          className: "text-muted-foreground text-sm",
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          transition: { delay: 0.3 },
                          children:
                            "Your personal AI that works every time. It runs everything from simple tasks to multi-step workflows, letting you focus on what matters most.",
                        }),
                      ],
                    }),
                    (0, s.jsxs)(U.P.div, {
                      className:
                        "border-border bg-card/80 relative rounded-2xl border shadow-2xl backdrop-blur-2xl",
                      initial: { scale: 0.98 },
                      animate: { scale: 1 },
                      transition: { delay: 0.1 },
                      children: [
                        (0, s.jsx)(F.N, {
                          children:
                            m &&
                            (0, s.jsx)(U.P.div, {
                              ref: _,
                              className:
                                "border-border bg-background/90 absolute right-4 bottom-full left-4 z-50 mb-2 overflow-hidden rounded-lg border shadow-lg backdrop-blur-xl",
                              initial: { opacity: 0, y: 5 },
                              animate: { opacity: 1, y: 0 },
                              exit: { opacity: 0, y: 5 },
                              transition: { duration: 0.15 },
                              children: (0, s.jsx)("div", {
                                className: "bg-background py-1",
                                children: E.map((e, t) =>
                                  (0, s.jsxs)(
                                    U.P.div,
                                    {
                                      className: (0, d.cn)(
                                        "flex cursor-pointer items-center gap-2 px-3 py-2 text-xs transition-colors",
                                        x === t
                                          ? "bg-primary/20 text-foreground"
                                          : "text-muted-foreground hover:bg-primary/10"
                                      ),
                                      onClick: () => A(t),
                                      initial: { opacity: 0 },
                                      animate: { opacity: 1 },
                                      transition: { delay: 0.03 * t },
                                      children: [
                                        (0, s.jsx)("div", {
                                          className:
                                            "text-primary flex h-5 w-5 items-center justify-center",
                                          children: e.icon,
                                        }),
                                        (0, s.jsx)("div", {
                                          className: "font-medium",
                                          children: e.label,
                                        }),
                                        (0, s.jsx)("div", {
                                          className:
                                            "text-muted-foreground ml-1 text-xs",
                                          children: e.prefix,
                                        }),
                                      ],
                                    },
                                    e.prefix
                                  )
                                ),
                              }),
                            }),
                        }),
                        (0, s.jsx)("div", {
                          className: "p-4",
                          children: (0, s.jsx)(W, {
                            ref: b,
                            value: e,
                            onChange: (e) => {
                              t(e.target.value), y();
                            },
                            onKeyDown: (a) => {
                              if (m)
                                if ("ArrowDown" === a.key)
                                  a.preventDefault(),
                                    u((e) => (e < E.length - 1 ? e + 1 : 0));
                                else if ("ArrowUp" === a.key)
                                  a.preventDefault(),
                                    u((e) => (e > 0 ? e - 1 : E.length - 1));
                                else if ("Tab" === a.key || "Enter" === a.key) {
                                  if ((a.preventDefault(), x >= 0)) {
                                    let e = E[x];
                                    t("".concat(e.prefix, " ")),
                                      p(!1),
                                      f(e.label),
                                      setTimeout(() => f(null), 3500);
                                  }
                                } else
                                  "Escape" === a.key &&
                                    (a.preventDefault(), p(!1));
                              else
                                "Enter" === a.key &&
                                  !a.shiftKey &&
                                  (a.preventDefault(), e.trim() && z());
                            },
                            onFocus: () => N(!0),
                            onBlur: () => N(!1),
                            placeholder:
                              "Describe a task for Everyday to complete...",
                            containerClassName: "w-full",
                            className: (0, d.cn)(
                              "w-full px-4 py-3",
                              "resize-none",
                              "bg-transparent",
                              "border-none",
                              "text-foreground text-sm",
                              "focus:outline-none",
                              "placeholder:text-muted-foreground",
                              "min-h-[60px]"
                            ),
                            style: { overflow: "hidden" },
                            showRing: !1,
                          }),
                        }),
                        (0, s.jsx)(F.N, {
                          children:
                            a.length > 0 &&
                            (0, s.jsx)(U.P.div, {
                              className: "flex flex-wrap gap-2 px-4 pb-3",
                              initial: { opacity: 0, height: 0 },
                              animate: { opacity: 1, height: "auto" },
                              exit: { opacity: 0, height: 0 },
                              children: a.map((e, t) =>
                                (0, s.jsxs)(
                                  U.P.div,
                                  {
                                    className:
                                      "bg-primary/5 text-muted-foreground flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs",
                                    initial: { opacity: 0, scale: 0.9 },
                                    animate: { opacity: 1, scale: 1 },
                                    exit: { opacity: 0, scale: 0.9 },
                                    children: [
                                      (0, s.jsx)("span", { children: e }),
                                      (0, s.jsx)("button", {
                                        onClick: () => {
                                          n((e) => e.filter((e, a) => a !== t));
                                        },
                                        className:
                                          "text-muted-foreground hover:text-foreground transition-colors",
                                        children: (0, s.jsx)(T.A, {
                                          className: "h-3 w-3",
                                        }),
                                      }),
                                    ],
                                  },
                                  t
                                )
                              ),
                            }),
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "border-border flex items-center justify-between gap-4 border-t p-4",
                          children: [
                            (0, s.jsxs)("div", {
                              className: "flex items-center gap-3",
                              children: [
                                (0, s.jsxs)(U.P.button, {
                                  type: "button",
                                  onClick: () => {
                                    let e = "file-".concat(
                                      Math.floor(1e3 * Math.random()),
                                      ".pdf"
                                    );
                                    n((t) => [...t, e]);
                                  },
                                  whileTap: { scale: 0.94 },
                                  className:
                                    "group text-muted-foreground hover:text-foreground relative rounded-lg p-2 transition-colors",
                                  children: [
                                    (0, s.jsx)(D.A, { className: "h-4 w-4" }),
                                    (0, s.jsx)(U.P.span, {
                                      className:
                                        "bg-primary/10 absolute inset-0 rounded-lg opacity-0 transition-opacity group-hover:opacity-100",
                                      layoutId: "button-highlight",
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)(U.P.button, {
                                  type: "button",
                                  "data-command-button": !0,
                                  onClick: (e) => {
                                    e.stopPropagation(), p((e) => !e);
                                  },
                                  whileTap: { scale: 0.94 },
                                  className: (0, d.cn)(
                                    "group text-muted-foreground hover:text-foreground relative rounded-lg p-2 transition-colors",
                                    m && "bg-primary/20 text-foreground"
                                  ),
                                  children: [
                                    (0, s.jsx)(R.A, { className: "h-4 w-4" }),
                                    (0, s.jsx)(U.P.span, {
                                      className:
                                        "bg-primary/10 absolute inset-0 rounded-lg opacity-0 transition-opacity group-hover:opacity-100",
                                      layoutId: "button-highlight",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsxs)(U.P.button, {
                              type: "button",
                              onClick: z,
                              whileHover: { scale: 1.01 },
                              whileTap: { scale: 0.98 },
                              disabled: i || !e.trim(),
                              className: (0, d.cn)(
                                "rounded-lg px-4 py-2 text-sm font-medium transition-all",
                                "flex items-center gap-2",
                                e.trim()
                                  ? "bg-primary text-primary-foreground shadow-primary/10 shadow-lg"
                                  : "bg-muted/50 text-muted-foreground"
                              ),
                              children: [
                                i
                                  ? (0, s.jsx)(L.A, {
                                      className:
                                        "h-4 w-4 animate-[spin_2s_linear_infinite]",
                                    })
                                  : (0, s.jsx)(I.A, { className: "h-4 w-4" }),
                                (0, s.jsx)("span", { children: "Send" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "flex flex-wrap items-center justify-center gap-2",
                      children: E.map((e, t) =>
                        (0, s.jsxs)(
                          U.P.button,
                          {
                            onClick: () => A(t),
                            className:
                              "group bg-primary/5 text-muted-foreground hover:bg-primary/10 hover:text-foreground relative flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all",
                            initial: { opacity: 0, y: 10 },
                            animate: { opacity: 1, y: 0 },
                            transition: { delay: 0.1 * t },
                            children: [
                              e.icon,
                              (0, s.jsx)("span", { children: e.label }),
                              (0, s.jsx)(U.P.div, {
                                className:
                                  "border-border/50 absolute inset-0 rounded-lg border",
                                initial: !1,
                                animate: { opacity: [0, 1], scale: [0.98, 1] },
                                transition: { duration: 0.3, ease: "easeOut" },
                              }),
                            ],
                          },
                          e.prefix
                        )
                      ),
                    }),
                  ],
                }),
              }),
              (0, s.jsx)(F.N, {
                children:
                  i &&
                  (0, s.jsx)(U.P.div, {
                    className:
                      "border-border bg-background/80 fixed bottom-8 mx-auto -translate-x-1/2 transform rounded-full border px-4 py-2 shadow-lg backdrop-blur-2xl pointer-events-auto",
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: 20 },
                    children: (0, s.jsxs)("div", {
                      className: "flex items-center gap-3",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "bg-primary/10 flex h-7 w-8 items-center justify-center rounded-full text-center",
                          children: (0, s.jsx)(S.A, {
                            className: "text-primary h-4 w-4",
                          }),
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "text-muted-foreground flex items-center gap-2 text-sm",
                          children: [
                            (0, s.jsx)("span", { children: "Thinking" }),
                            (0, s.jsx)(O, {}),
                          ],
                        }),
                      ],
                    }),
                  }),
              }),
              w &&
                (0, s.jsx)(U.P.div, {
                  className:
                    "from-primary via-primary/80 to-secondary pointer-events-none fixed z-0 h-[50rem] w-[50rem] rounded-full bg-gradient-to-r opacity-[0.02] blur-[96px]",
                  animate: { x: g.x - 400, y: g.y - 400 },
                  transition: {
                    type: "spring",
                    damping: 25,
                    stiffness: 150,
                    mass: 0.5,
                  },
                }),
              (0, s.jsx)(V, {
                isOpen: k,
                onClose: () => C(!1),
                videoId: "DN1VG5H-358",
              }),
            ],
          }),
        });
      }
      function O() {
        return (0, s.jsx)("div", {
          className: "ml-1 flex items-center",
          children: [1, 2, 3].map((e) =>
            (0, s.jsx)(
              U.P.div,
              {
                className: "bg-primary mx-0.5 h-1.5 w-1.5 rounded-full",
                initial: { opacity: 0.3 },
                animate: { opacity: [0.3, 0.9, 0.3], scale: [0.85, 1.1, 0.85] },
                transition: {
                  duration: 1.2,
                  repeat: 1 / 0,
                  delay: 0.15 * e,
                  ease: "easeInOut",
                },
                style: { boxShadow: "0 0 4px rgba(255, 255, 255, 0.3)" },
              },
              e
            )
          ),
        });
      }
      if (((W.displayName = "Textarea"), "undefined" != typeof document)) {
        let e = document.createElement("style");
        (e.innerHTML =
          "\n@keyframes ripple {\n  0% { transform: scale(0.5); opacity: 0.6; }\n  100% { transform: scale(2); opacity: 0; }\n}\n"),
          document.head.appendChild(e);
      }
      var X = a(57941),
        B = a(95301),
        q = a(91358),
        K = a(63583),
        $ = a.n(K);
      let Q = {
          twitterLink: "https://x.com/everydayapphq ",
          help: { faqs: "/faqs", support: "/support", livechat: "/live-chat" },
          contact: {
            email: "hi@everyday.new",
            address:
              "2 Embarcadero Ctr, San Francisco, CA 94111, United States",
          },
          company: {
            name: "Everyday",
            description:
              "Your all-in-one AI that turns intentions into outcomes. Clears your inbox, organizes your day, and keeps work moving while you focus on what matters.",
            logo: "/logo.webp",
          },
        },
        J = [{ icon: X.A, label: "X", href: Q.twitterLink }];
      Q.help.faqs, Q.help.support, Q.help.livechat;
      let Z = [
        { icon: B.A, text: Q.contact.email },
        { icon: q.A, text: Q.contact.address, isAddress: !0 },
      ];
      function ee() {
        return (0, s.jsx)("footer", {
          className:
            "bg-secondary dark:bg-secondary/20 mt-16 w-full place-self-end rounded-t-xl",
          children: (0, s.jsxs)("div", {
            className:
              "mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24",
            children: [
              (0, s.jsxs)("div", {
                className: "grid grid-cols-1 gap-8 lg:grid-cols-3",
                children: [
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "text-primary flex justify-center gap-2 sm:justify-start",
                        children: (0, s.jsx)(i.xl, { size: 28 }),
                      }),
                      (0, s.jsx)("p", {
                        className:
                          "text-foreground/50 mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left",
                        children: Q.company.description,
                      }),
                      (0, s.jsx)("ul", {
                        className:
                          "mt-8 flex justify-center gap-6 sm:justify-start md:gap-8",
                        children: J.map((e) => {
                          let { icon: t, label: a, href: r } = e;
                          return (0, s.jsx)(
                            "li",
                            {
                              children: (0, s.jsxs)($(), {
                                href: r,
                                className:
                                  "text-primary hover:text-primary/80 transition",
                                children: [
                                  (0, s.jsx)("span", {
                                    className: "sr-only",
                                    children: a,
                                  }),
                                  (0, s.jsx)(t, { className: "size-6" }),
                                ],
                              }),
                            },
                            a
                          );
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2",
                    children: (0, s.jsxs)("div", {
                      className: "text-center sm:text-left",
                      children: [
                        (0, s.jsx)("p", {
                          className: "text-lg font-medium",
                          children: "Contact Us",
                        }),
                        (0, s.jsx)("ul", {
                          className: "mt-8 space-y-4 text-sm",
                          children: Z.map((e) => {
                            let { icon: t, text: a, isAddress: r } = e;
                            return (0, s.jsx)(
                              "li",
                              {
                                children: (0, s.jsxs)("a", {
                                  className:
                                    "flex items-center justify-center gap-1.5 sm:justify-start",
                                  href: "#",
                                  children: [
                                    (0, s.jsx)(t, {
                                      className: "text-primary size-5 shrink-0",
                                    }),
                                    r
                                      ? (0, s.jsx)("address", {
                                          className:
                                            "text-secondary-foreground/70 -mt-0.5 flex-1 not-italic transition",
                                          children: a,
                                        })
                                      : (0, s.jsx)("span", {
                                          className:
                                            "text-secondary-foreground/70 flex-1 transition",
                                          children: a,
                                        }),
                                  ],
                                }),
                              },
                              a
                            );
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "mt-12 border-t pt-6",
                children: (0, s.jsxs)("div", {
                  className:
                    "text-center sm:flex sm:justify-between sm:text-left",
                  children: [
                    (0, s.jsx)("p", {
                      className: "text-sm",
                      children: (0, s.jsx)("span", {
                        className: "block sm:inline",
                        children: "All rights reserved.",
                      }),
                    }),
                    (0, s.jsxs)("p", {
                      className:
                        "text-secondary-foreground/70 mt-4 text-sm transition sm:order-first sm:mt-0",
                      children: ["\xa9 2025 ", Q.company.name],
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      var et = a(88860),
        ea = a(54785),
        es = a(36570);
      let er = (e) => {
        let {
            grid: t = 15,
            mouse: a = 0.1,
            strength: n = 0.15,
            relaxation: i = 0.9,
            lightImageSrc: l,
            darkImageSrc: o,
            className: c = "",
          } = e,
          { resolvedTheme: d } = (0, E.D)(),
          x = (0, r.useRef)(null),
          u = (0, r.useRef)(1),
          m = (0, r.useRef)(null),
          p = (0, r.useRef)(null),
          h = (0, r.useRef)(null),
          f = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            if (!x.current) return;
            let e = x.current,
              s = new ea.Z58(),
              r = new es.JeP({
                antialias: !0,
                alpha: !0,
                powerPreference: "high-performance",
              });
            r.setPixelRatio(Math.min(window.devicePixelRatio, 2)),
              e.appendChild(r.domElement);
            let l = new ea.qUd(0, 0, 0, 0, -1e3, 1e3);
            (l.position.z = 2), (m.current = l);
            let o = {
              time: { value: 0 },
              resolution: { value: new ea.IUQ() },
              uTexture: { value: null },
              uDataTexture: { value: null },
            };
            h.current = o;
            let c = new Float32Array(4 * t * t);
            for (let e = 0; e < t * t; e++)
              (c[4 * e] = 255 * Math.random() - 125),
                (c[4 * e + 1] = 255 * Math.random() - 125);
            p.current = new Float32Array(c);
            let d = new ea.GYF(c, t, t, ea.GWd, ea.RQf);
            (d.needsUpdate = !0), (o.uDataTexture.value = d);
            let g = new ea.BKk({
                side: ea.$EB,
                uniforms: o,
                vertexShader:
                  "\nuniform float time;\nvarying vec2 vUv;\nvarying vec3 vPosition;\n\nvoid main() {\n  vUv = uv;\n  vPosition = position;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n",
                fragmentShader:
                  "\nuniform sampler2D uDataTexture;\nuniform sampler2D uTexture;\nuniform vec4 resolution;\nvarying vec2 vUv;\n\nvoid main() {\n  vec2 uv = vUv;\n  vec4 offset = texture2D(uDataTexture, vUv);\n  vec4 textureColor = texture2D(uTexture, uv - 0.02 * offset.rg);\n  gl_FragColor = textureColor;\n}\n",
              }),
              v = new ea.bdM(1, 1, t - 1, t - 1),
              b = new ea.eaF(v, g);
            s.add(b);
            let y = () => {
              let t = e.offsetWidth,
                a = e.offsetHeight,
                s = t / a,
                n = u.current;
              r.setSize(t, a);
              let i = Math.max(s / n, 1);
              b.scale.set(n * i, i, 1);
              let c = +s;
              (l.left = -c / 2),
                (l.right = c / 2),
                (l.top = 0.5),
                (l.bottom = -0.5),
                l.updateProjectionMatrix(),
                o.resolution.value.set(t, a, 1, 1);
            };
            f.current = y;
            let j = { x: 0, y: 0, prevX: 0, prevY: 0, vX: 0, vY: 0 },
              w = (t) => {
                let a = e.getBoundingClientRect(),
                  s = (t.clientX - a.left) / a.width,
                  r = 1 - (t.clientY - a.top) / a.height;
                (j.vX = s - j.prevX),
                  (j.vY = r - j.prevY),
                  Object.assign(j, { x: s, y: r, prevX: s, prevY: r });
              },
              N = () => {
                (d.needsUpdate = !0),
                  Object.assign(j, {
                    x: 0,
                    y: 0,
                    prevX: 0,
                    prevY: 0,
                    vX: 0,
                    vY: 0,
                  });
              };
            e.addEventListener("mousemove", w),
              e.addEventListener("mouseleave", N),
              window.addEventListener("resize", y),
              y();
            let _ = () => {
              requestAnimationFrame(_), (o.time.value += 0.05);
              let e = d.image.data;
              for (let a = 0; a < t * t; a++)
                (e[4 * a] *= i), (e[4 * a + 1] *= i);
              let c = t * j.x,
                x = t * j.y,
                u = t * a;
              for (let a = 0; a < t; a++)
                for (let s = 0; s < t; s++) {
                  let r = Math.pow(c - a, 2) + Math.pow(x - s, 2);
                  if (r < u * u) {
                    let i = 4 * (a + t * s),
                      l = Math.min(u / Math.sqrt(r), 10);
                    (e[i] += 100 * n * j.vX * l),
                      (e[i + 1] -= 100 * n * j.vY * l);
                  }
                }
              (d.needsUpdate = !0), r.render(s, l);
            };
            return (
              _(),
              () => {
                e.removeEventListener("mousemove", w),
                  e.removeEventListener("mouseleave", N),
                  window.removeEventListener("resize", y),
                  r.dispose(),
                  v.dispose(),
                  g.dispose(),
                  d.dispose(),
                  o.uTexture.value && o.uTexture.value.dispose();
              }
            );
          }, [t, a, n, i]),
          (0, r.useEffect)(() => {
            if (!h.current) return;
            let e = "dark" === d ? o : l;
            new ea.Tap().load(e, (e) => {
              (e.minFilter = ea.k6q),
                (u.current = e.image.width / e.image.height),
                h.current.uTexture.value && h.current.uTexture.value.dispose(),
                (h.current.uTexture.value = e),
                f.current && f.current();
            });
          }, [d, l, o]),
          (0, s.jsxs)("div", {
            className: "relative w-full h-full ".concat(c),
            children: [
              (0, s.jsx)("div", {
                ref: x,
                className: "distortion-container w-full h-full",
              }),
              (0, s.jsx)("div", {
                className:
                  "absolute inset-0 pointer-events-none bg-gradient-to-t from-background via-background/80 via-40% to-transparent",
              }),
            ],
          })
        );
      };
      var en = a(57680),
        ei = a(56093),
        el = a.n(ei);
      function eo() {
        let [e, t] = (0, r.useState)(!1);
        return ((0, r.useEffect)(() => {
          t(!0);
        }, []),
        e)
          ? (0, s.jsx)("button", {
              type: "button",
              className:
                "fixed top-0 left-0 right-0 w-full text-white py-2.5 sm:py-3 px-4 z-[9999] cursor-pointer transition-all duration-200 hover:brightness-90 ".concat(
                  el().className
                ),
              style: {
                background:
                  "linear-gradient(to right, #f97316, #f97316, #f87171)",
              },
              // onClick: () => {
              //   window.open(
              //     "https://www.producthunt.com/products/everyday-4",
              //     "_blank",
              //     "noopener,noreferrer"
              //   );
              // },
              children: (0, s.jsx)("div", {
                className: "max-w-7xl mx-auto flex items-center justify-center",
                children: (0, s.jsxs)("div", {
                  className: "flex items-center space-x-2",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center flex-shrink-0",
                      style: { backgroundColor: "#DA552F" },
                      children: (0, s.jsx)("span", {
                        className:
                          "text-white font-bold text-[10px] sm:text-xs leading-none",
                        children: "P",
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "flex items-center flex-wrap gap-x-2 sm:gap-x-4 justify-center",
                      style: { fontSize: "13px" },
                      children: [
                        (0, s.jsx)("span", {
                          className: "font-semibold tracking-tight sm:text-sm",
                          children: "Live on PumpFun.",
                        }),
                        (0, s.jsxs)("div", {
                          className: "flex items-center space-x-1",
                          children: [
                            (0, s.jsx)("span", {
                              className:
                                "font-semibold tracking-tight sm:text-sm",
                              children: "CA: Coming Soon!",
                            }),
                           
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          : null;
      }
      function ec() {
        return (0, s.jsx)("div", {
          className: "fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6",
          children: (0, s.jsx)("a", {
            href: "https://www.producthunt.com/products/everyday-4?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_source=badge-everyday-3",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "block transition-transform hover:scale-105",
            
          }),
        });
      }
      let ed = "force-dynamic";
      function ex() {
        return (0, s.jsxs)("div", {
          className: "min-h-dvh flex flex-col relative isolate",
          children: [
            (0, s.jsx)(ec, {}),
            (0, s.jsx)(eo, {}),
            (0, s.jsx)("div", { className: "relative z-20 pt-11 sm:pt-12" }),
            (0, s.jsxs)("div", {
              className: "relative z-10 h-[80vh] sm:h-[100vh]",
              children: [
                (0, s.jsx)("div", {
                  className:
                    "distortion-container grid-distortion w-full h-full ",
                  children: (0, s.jsx)(er, {
                    lightImageSrc:
                      "https://images.unsplash.com/photo-1512998844734-cd2cca565822?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    darkImageSrc:
                      "https://images.unsplash.com/photo-1652120268427-9ba66e870467?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    grid: 50,
                    mouse: 0.3,
                    strength: 0.25,
                    relaxation: 0.9,
                    className: "opacity-80",
                  }),
                }),
                (0, s.jsxs)("div", {
                  className:
                    "absolute top-0 left-0 w-full h-full z-10 pointer-events-none",
                  children: [(0, s.jsx)(A, {}), (0, s.jsx)(G, {})],
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "relative z-10",
              children: [
                (0, s.jsx)(et.A, {}),
                (0, s.jsx)(ee, {}),
                (0, s.jsx)(r.Suspense, {
                  fallback: (0, s.jsxs)("div", {
                    className: "mx-auto w-full max-w-3xl px-6 space-y-4",
                    children: [
                      (0, s.jsx)(n.E, { className: "h-8 w-64" }),
                      (0, s.jsx)(n.E, { className: "h-40 w-full" }),
                      (0, s.jsxs)("div", {
                        className: "grid grid-cols-3 gap-4",
                        children: [
                          (0, s.jsx)(n.E, { className: "h-24" }),
                          (0, s.jsx)(n.E, { className: "h-24" }),
                          (0, s.jsx)(n.E, { className: "h-24" }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    13521: (e, t, a) => {
      "use strict";
      a.d(t, {
        sM: () => h,
        Q4: () => m,
        TT: () => g,
        $K: () => v,
        Un: () => p,
        sX: () => f,
      });
      var s = a(40554),
        r = a(47682),
        n = a(25771),
        i = a(42937),
        l = a(41115),
        o = a(48586),
        c = a(43672),
        d = a(79730);
      function x(e) {
        let {
            images: t = [
              "/avatar-80-03.jpg",
              "/avatar-80-04.jpg",
              "/avatar-80-05.jpg",
              "/avatar-80-06.jpg",
            ],
            text: a = (0, s.jsxs)(s.Fragment, {
              children: [
                "Trusted by ",
                (0, s.jsx)("strong", {
                  className: "text-foreground font-medium",
                  children: "60K+",
                }),
                " ",
                "developers.",
              ],
            }),
            size: r = 20,
            maxVisible: n = 4,
          } = e,
          i = t.slice(0, n),
          l = t.length - i.length,
          o = { width: r, height: r };
        return (0, s.jsxs)("div", {
          className:
            "bg-background flex items-center rounded-full border p-1 shadow-sm",
          children: [
            (0, s.jsxs)("div", {
              className: "flex -space-x-1.5",
              children: [
                i.map((e, t) =>
                  (0, s.jsx)(
                    "img",
                    {
                      className:
                        "ring-background rounded-full ring-1 object-cover",
                      src: e,
                      ...o,
                      alt: "Avatar ".concat(t + 1),
                    },
                    "".concat(e, "-").concat(t)
                  )
                ),
                l > 0 &&
                  (0, s.jsxs)("div", {
                    className:
                      "ring-background rounded-full ring-1 bg-muted text-foreground/80 flex items-center justify-center text-[10px] font-medium",
                    style: { width: r, height: r },
                    children: ["+", l],
                  }),
              ],
            }),
            (0, s.jsx)("p", {
              className: "text-muted-foreground px-2 text-xs",
              children: a,
            }),
          ],
        });
      }
      var u = a(62337);
      let m = r.forwardRef((e, t) => {
        let {
          className: a,
          children: r,
          onUse: n,
          onReplay: o,
          showReplay: c,
          showPremiumBanner: x = !1,
          bannerText: m = "Use to earn 50K credits",
          bannerUsed: p = !1,
          ...h
        } = e;
        return (0, s.jsxs)("div", {
          ref: t,
          role: n ? "button" : void 0,
          tabIndex: n ? 0 : void 0,
          onClick: n,
          onKeyDown: (e) => {
            n &&
              ("Enter" === e.key || " " === e.key) &&
              (e.preventDefault(), n());
          },
          className: (0, u.cn)(
            "group relative no-underline transition-colors",
            n ? "cursor-pointer select-none focus:outline-none" : void 0,
            a
          ),
          ...h,
          children: [
            (0, s.jsxs)("div", {
              className: (0, u.cn)(
                x ? "rounded-t-[20px] rounded-b-[24px]" : "rounded-[24px]",
                "bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800/80 shadow-sm",
                "shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05),0px_1px_1px_0px_rgba(255,252,240,0.5)_inset,0px_0px_0px_1px_hsla(0,0%,100%,0.1)_inset,0px_0px_1px_0px_rgba(28,27,26,0.5)]",
                "shadow-[rgba(17,24,28,0.08)_0_0_0_1px,rgba(17,24,28,0.08)_0_1px_2px_-1px,rgba(17,24,28,0.04)_0_2px_4px]",
                "dark:shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.1),0_8px_8px_0_rgba(0,0,0,0.1)]"
              ),
              children: [
                x &&
                  (0, s.jsx)("div", {
                    className: (0, u.cn)(
                      "border-b rounded-t-[20px] px-3 py-1.5 relative overflow-hidden",
                      p
                        ? "bg-neutral-100 dark:bg-neutral-900 border-border/30"
                        : "border-foreground/10 bg-neutral-100 dark:bg-neutral-900"
                    ),
                    children: (0, s.jsxs)("div", {
                      className:
                        "flex items-center justify-center gap-1.5 relative",
                      children: [
                        (0, s.jsx)(i.A, {
                          className: (0, u.cn)(
                            "h-3 w-3",
                            p ? "text-muted-foreground/40" : "text-[#fe3887]"
                          ),
                        }),
                        (0, s.jsx)("span", {
                          className: (0, u.cn)(
                            "text-[10px] font-semibold tracking-wider uppercase",
                            p
                              ? "text-muted-foreground/60 line-through"
                              : "text-[#fe3887]"
                          ),
                          children: m,
                        }),
                      ],
                    }),
                  }),
                (0, s.jsx)("div", { className: "p-2", children: r }),
              ],
            }),
            c &&
              o &&
              (0, s.jsxs)(d.$, {
                size: "sm",
                variant: "outline",
                onClick: (e) => {
                  e.stopPropagation(), o();
                },
                className:
                  "absolute bottom-5 right-5 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90 hover:border-border shadow-lg",
                title: "Replay this workflow",
                children: [
                  (0, s.jsx)(l.A, { size: 14, className: "text-foreground" }),
                  (0, s.jsx)("span", {
                    className: "text-xs",
                    children: "Replay",
                  }),
                ],
              }),
          ],
        });
      });
      (m.displayName = "MinimalCard"),
        (r.forwardRef((e, t) => {
          let { className: a, alt: r, src: i, ...l } = e;
          return (0, s.jsxs)("div", {
            ref: t,
            className: (0, u.cn)(
              "relative mb-6 h-[190px] w-full rounded-[20px]",
              "shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05),0px_1px_1px_0px_rgba(255,252,240,0.5)_inset,0px_0px_0px_1px_hsla(0,0%,100%,0.1)_inset,0px_0px_1px_0px_rgba(28,27,26,0.5)]",
              "dark:shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.1),0_8px_8px_0_rgba(0,0,0,0.1)]",
              a
            ),
            ...l,
            children: [
              (0, s.jsx)(n.default, {
                src: i,
                alt: r,
                width: 200,
                height: 200,
                className:
                  "absolute inset-0 size-full rounded-[16px] object-cover ",
              }),
              (0, s.jsxs)("div", {
                className: "absolute inset-0 rounded-[16px]",
                children: [
                  (0, s.jsx)("div", {
                    className: (0, u.cn)(
                      "absolute inset-0 rounded-[16px]",
                      "shadow-[0px_0px_0px_1px_rgba(0,0,0,.07),0px_0px_0px_3px_#fff,0px_0px_0px_4px_rgba(0,0,0,.08)]",
                      "dark:shadow-[0px_0px_0px_1px_rgba(0,0,0,.07),0px_0px_0px_3px_rgba(100,100,100,0.3),0px_0px_0px_4px_rgba(0,0,0,.08)]"
                    ),
                  }),
                  (0, s.jsx)("div", {
                    className: (0, u.cn)(
                      "absolute inset-0 rounded-[16px]",
                      "dark:shadow-[0px_1px_1px_0px_rgba(0,0,0,0.15),0px_1px_1px_0px_rgba(0,0,0,0.15)_inset,0px_0px_0px_1px_rgba(0,0,0,0.15)_inset,0px_0px_1px_0px_rgba(0,0,0,0.15)]"
                    ),
                  }),
                ],
              }),
            ],
          });
        }).displayName = "MinimalCardImage");
      let p = r.forwardRef((e, t) => {
        let {
          className: a,
          prompt: r,
          onUse: n,
          buttonText: i = "View demo",
          logos: m,
          trustedText: p,
          logoSize: h = 20,
          maxVisible: f = 3,
          onReplay: g,
          hasSession: v = !1,
          ...y
        } = e;
        return (0, s.jsx)("div", {
          ref: t,
          className: (0, u.cn)(
            "group relative w-full rounded-[20px] overflow-hidden cursor-pointer",
            "h-48 md:h-64",
            "shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05),0px_1px_1px_0px_rgba(255,252,240,0.5)_inset,0px_0px_0px_1px_hsla(0,0%,100%,0.1)_inset,0px_0px_1px_0px_rgba(28,27,26,0.5)]",
            "dark:shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.1),0_8px_8px_0_rgba(0,0,0,0.1)]",
            a
          ),
          onClick: n,
          ...y,
          children: (0, s.jsxs)("div", {
            className: (0, u.cn)(
              "absolute inset-0 rounded-[20px] bg-background/80",
              "transition-transform duration-300 ease-out",
              "group-hover:-translate-y-18"
            ),
            children: [
              (0, s.jsx)("div", {
                className: "p-6 md:p-8 h-full",
                children: (0, s.jsxs)("div", {
                  className: "flex h-full flex-col justify-center min-h-0",
                  children: [
                    m && m.length > 0
                      ? (0, s.jsx)("div", {
                          className: "mb-3 select-none flex-shrink-0",
                          children: (0, s.jsx)(x, {
                            images: m.map(b),
                            text:
                              null != p
                                ? p
                                : (0, s.jsxs)(s.Fragment, {
                                    children: [
                                      "Triggered",
                                      " ",
                                      (0, s.jsx)("strong", {
                                        className:
                                          "text-foreground font-medium",
                                        children: "100K+",
                                      }),
                                      " ",
                                      "times",
                                    ],
                                  }),
                            size: h,
                            maxVisible: f,
                          }),
                        })
                      : (0, s.jsx)("div", {
                          className:
                            "text-muted-foreground/70 mb-3 select-none flex-shrink-0",
                          children: (0, s.jsx)(o.A, {
                            className:
                              "h-7 w-7 md:h-8 md:w-8 text-foreground/50",
                            strokeWidth: 1.5,
                          }),
                        }),
                    (0, s.jsx)("div", {
                      className: "flex-1 min-h-0 flex items-center",
                      children: (0, s.jsx)("p", {
                        className: (0, u.cn)(
                          "font-serif text-lg md:text-xl text-foreground/90",
                          "leading-snug",
                          "line-clamp-4 break-words overflow-hidden w-full"
                        ),
                        children: r,
                      }),
                    }),
                  ],
                }),
              }),
              (0, s.jsx)("div", {
                className:
                  "absolute top-full left-0 right-0 p-6 md:p-8 flex items-center justify-center",
                children: (0, s.jsxs)(d.$, {
                  size: "lg",
                  onClick: (e) => {
                    e.stopPropagation(),
                      v ? null == g || g() : null == n || n();
                  },
                  className: "shadow-sm rounded-b-none w-full",
                  children: [
                    v
                      ? (0, s.jsx)(l.A, { className: "mr-2 h-4 w-4" })
                      : (0, s.jsx)(c.A, { className: "mr-2 h-4 w-4" }),
                    v ? "View Demo" : "Try Prompt",
                  ],
                }),
              }),
            ],
          }),
        });
      });
      p.displayName = "MinimalCardPrompt";
      let h = r.forwardRef((e, t) => {
        let {
          className: a,
          prompt: r,
          onUse: n,
          buttonText: i = "View demo",
          logos: l,
          trustedText: m,
          logoSize: p = 16,
          maxVisible: h = 3,
          onReplay: f,
          hasSession: g = !1,
          ...v
        } = e;
        return (0, s.jsx)("div", {
          ref: t,
          className: (0, u.cn)(
            "group relative w-full rounded-[16px] overflow-hidden cursor-pointer",
            "h-32 sm:h-36",
            "shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05),0px_1px_1px_0px_rgba(255,252,240,0.5)_inset,0px_0px_0px_1px_hsla(0,0%,100%,0.1)_inset,0px_0px_1px_0px_rgba(28,27,26,0.5)]",
            "dark:shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.1),0_8px_8px_0_rgba(0,0,0,0.1)]",
            a
          ),
          onClick: n,
          ...v,
          children: (0, s.jsxs)("div", {
            className: (0, u.cn)(
              "absolute inset-0 rounded-[16px] bg-background/80",
              "transition-transform duration-300 ease-out",
              "group-hover:-translate-y-12"
            ),
            children: [
              (0, s.jsx)("div", {
                className: "p-3 sm:p-4 h-full",
                children: (0, s.jsxs)("div", {
                  className: "flex h-full flex-col justify-center min-h-0",
                  children: [
                    l && l.length > 0
                      ? (0, s.jsx)("div", {
                          className: "mb-2 select-none flex-shrink-0",
                          children: (0, s.jsx)(x, {
                            images: l.map(b),
                            text:
                              null != m
                                ? m
                                : (0, s.jsxs)(s.Fragment, {
                                    children: [
                                      "Triggered",
                                      " ",
                                      (0, s.jsx)("strong", {
                                        className:
                                          "text-foreground font-medium",
                                        children: "100K+",
                                      }),
                                      " ",
                                      "times",
                                    ],
                                  }),
                            size: p,
                            maxVisible: h,
                          }),
                        })
                      : (0, s.jsx)("div", {
                          className:
                            "text-muted-foreground/70 mb-2 select-none flex-shrink-0",
                          children: (0, s.jsx)(o.A, {
                            className: "h-5 w-5 text-foreground/50",
                            strokeWidth: 1.5,
                          }),
                        }),
                    (0, s.jsx)("div", {
                      className: "flex-1 min-h-0 flex items-center",
                      children: (0, s.jsx)("p", {
                        className: (0, u.cn)(
                          "font-serif text-sm sm:text-base text-foreground/90",
                          "leading-snug",
                          "line-clamp-3 break-words overflow-hidden w-full"
                        ),
                        children: r,
                      }),
                    }),
                  ],
                }),
              }),
              (0, s.jsx)("div", {
                className:
                  "absolute top-full left-0 right-0 p-3 sm:p-4 flex items-center justify-center",
                children: (0, s.jsxs)(d.$, {
                  size: "sm",
                  onClick: (e) => {
                    e.stopPropagation(), null == n || n();
                  },
                  className: "shadow-sm rounded-b-none w-full",
                  children: [
                    (0, s.jsx)(c.A, { className: "mr-2 h-3 w-3" }),
                    "Use Prompt",
                  ],
                }),
              }),
            ],
          }),
        });
      });
      h.displayName = "CompactPromptCard";
      let f = r.forwardRef((e, t) => {
        let { className: a, ...r } = e;
        return (0, s.jsx)("h3", {
          ref: t,
          className: (0, u.cn)(
            "mt-2 px-1 text-lg font-semibold leading-tight truncate",
            a
          ),
          ...r,
        });
      });
      (f.displayName = "MinimalCardTitle"),
        (r.forwardRef((e, t) => {
          let { className: a, ...r } = e;
          return (0, s.jsx)("p", {
            ref: t,
            className: (0, u.cn)(
              "px-1 pb-2 text-sm text-neutral-500 truncate",
              a
            ),
            ...r,
          });
        }).displayName = "MinimalCardDescription");
      let g = r.forwardRef((e, t) => {
        let { className: a, ...r } = e;
        return (0, s.jsx)("p", {
          ref: t,
          className: (0, u.cn)(
            "px-1 pb-2 text-sm text-neutral-500 truncate",
            a
          ),
          ...r,
        });
      });
      g.displayName = "MinimalCardAuthor";
      let v = r.forwardRef((e, t) => {
        let { className: a, ...r } = e;
        return (0, s.jsx)("div", {
          ref: t,
          className: (0, u.cn)("p-1", a),
          ...r,
        });
      });
      (v.displayName = "MinimalCardContent"),
        (r.forwardRef((e, t) => {
          let { className: a, ...r } = e;
          return (0, s.jsx)("div", {
            ref: t,
            className: (0, u.cn)("flex items-center p-6 pt-0", a),
            ...r,
          });
        }).displayName = "MinimalCardFooter");
      let b = (e) =>
        "https://assets.picaos.com/connectors/".concat(e.toLowerCase(), ".svg");
    },
    33551: (e, t, a) => {
      "use strict";
      a.d(t, { E: () => n });
      var s = a(40554),
        r = a(62337);
      function n(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)("div", {
          "data-slot": "skeleton",
          className: (0, r.cn)("bg-accent animate-pulse rounded-md", t),
          ...a,
        });
      }
    },
    78150: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 941));
    },
    79730: (e, t, a) => {
      "use strict";
      a.d(t, { $: () => o, r: () => l });
      var s = a(40554);
      a(47682);
      var r = a(99474),
        n = a(43680),
        i = a(62337);
      let l = (0, r.F)(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        {
          variants: {
            variant: {
              default:
                "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
              destructive:
                "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
              outline:
                "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
              secondary:
                "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
              ghost: "hover:bg-accent hover:text-accent-foreground",
              link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
              default: "h-9 px-4 py-2",
              sm: "h-8 rounded-md px-3 text-xs",
              lg: "h-10 rounded-md px-8",
              icon: "size-9",
            },
          },
          defaultVariants: { variant: "default", size: "default" },
        }
      );
      function o(e) {
        let { className: t, variant: a, size: r, asChild: o = !1, ...c } = e,
          d = o ? n.bL : "button";
        return (0, s.jsx)(d, {
          "data-slot": "button",
          className: (0, i.cn)(
            l({ variant: a, size: r, className: t }),
            "cursor-pointer"
          ),
          ...c,
        });
      }
    },
    88860: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => c });
      var s = a(40554),
        r = a(47682),
        n = a(43672),
        i = a(33551),
        l = a(13521),
        o = a(62337);
      function c() {
        let {
            onUsePrompt: e,
            onSetPrompt: t,
            session: a,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {},
          [c, d] = (0, r.useState)(!1),
          [x, u] = (0, r.useState)(new Set()),
          [m, p] = (0, r.useState)({}),
          [h, f] = (0, r.useState)([]),
          [g, v] = (0, r.useState)(!0),
          b = (0, r.useRef)(null),
          y = (0, r.useRef)([]);
        (0, r.useEffect)(() => {
          let e = new IntersectionObserver(
            (e) => {
              let [t] = e;
              t.isIntersecting && d(!0);
            },
            { threshold: 0.1, rootMargin: "50px" }
          );
          return b.current && e.observe(b.current), () => e.disconnect();
        }, []),
          (0, r.useEffect)(() => {
            if (!c) return;
            let e = new IntersectionObserver(
              (e) => {
                e.forEach((e) => {
                  if (e.isIntersecting) {
                    let t = y.current.indexOf(e.target);
                    -1 !== t && u((e) => new Set([...e, t]));
                  }
                });
              },
              { threshold: 0.2, rootMargin: "30px" }
            );
            return (
              y.current.forEach((t) => {
                t && e.observe(t);
              }),
              () => e.disconnect()
            );
          }, [c]),
          (0, r.useEffect)(() => {
            c &&
              h.length > 0 &&
              0 === x.size &&
              u(new Set(Array.from({ length: h.length }, (e, t) => t)));
          }, [c, h.length, x.size]),
          (0, r.useEffect)(() => {
            (async () => {
              try {
                let e = await fetch("/api/prompts"),
                  t = await e.json();
                t.success
                  ? f(t.prompts)
                  : console.error("Failed to fetch prompts:", t);
              } catch (e) {
                console.error("Error fetching prompts:", e);
              } finally {
                v(!1);
              }
            })();
          }, []),
          (0, r.useEffect)(() => {
            let e = async () => {
              let e = {};
              await Promise.all(
                h.map(async (t) => {
                  try {
                    let a = await fetch("/api/sessions/check?id=".concat(t.id));
                    e[t.id] = a.ok;
                  } catch (a) {
                    e[t.id] = !1;
                  }
                })
              ),
                p(e);
            };
            h.length > 0 && e();
          }, [h]);
        let j = (0, r.useCallback)(
            (s) => {
              if (t && a) t(s);
              else if (e && a) e(s);
              else {
                let e = encodeURIComponent(s);
                window.location.href = "/register?prompt=".concat(e);
              }
            },
            [e, t, a]
          ),
          w = (0, r.useCallback)((e) => {
            window.location.href = "/replay?session=".concat(e);
          }, []);
        return (0, s.jsxs)("div", {
          ref: b,
          className:
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 container mx-auto px-4 sm:px-6",
          children: [
            (0, s.jsxs)("div", {
              className: "col-span-full space-y-3 sm:space-y-4 py-4 sm:py-6",
              children: [
                (0, s.jsx)("h2", {
                  className: (0, o.cn)(
                    "text-2xl sm:text-3xl lg:text-4xl font-serif text-center text-foreground/90 px-2",
                    "transition-all duration-500 ease-out",
                    c ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  ),
                  children: "Workflows our users love",
                }),
                (0, s.jsx)("div", {
                  children: (0, s.jsx)("p", {
                    className: (0, o.cn)(
                      "text-sm sm:text-md text-foreground/20 text-center px-4 sm:px-2",
                      "transition-all duration-500 ease-out delay-100",
                      c
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    ),
                    children:
                      "All tasks shown in the community are voluntarily shared by users.",
                  }),
                }),
              ],
            }),
            g &&
              Array.from({ length: 8 }, (e, t) =>
                (0, s.jsx)(
                  "div",
                  {
                    className: (0, o.cn)(
                      "transition-all duration-300 ease-out opacity-100"
                    ),
                    style: {
                      transitionDelay: "".concat(Math.min(30 * t, 200), "ms"),
                    },
                    children: (0, s.jsxs)("div", {
                      className:
                        "h-full rounded-lg border bg-card p-4 space-y-3",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "space-y-2",
                          children: [
                            (0, s.jsx)(i.E, { className: "h-4 w-3/4" }),
                            (0, s.jsx)(i.E, { className: "h-3 w-1/2" }),
                          ],
                        }),
                        (0, s.jsx)(i.E, { className: "h-20 w-full" }),
                        (0, s.jsxs)("div", {
                          className: "flex items-center justify-between",
                          children: [
                            (0, s.jsx)(i.E, { className: "h-3 w-1/3" }),
                            (0, s.jsx)(i.E, { className: "h-6 w-16" }),
                          ],
                        }),
                      ],
                    }),
                  },
                  "skeleton-loading-".concat(Date.now(), "-").concat(t)
                )
              ),
            !g &&
              h.map((e, t) =>
                (0, s.jsx)(
                  "div",
                  {
                    ref: (e) => {
                      y.current[t] = e;
                    },
                    className: (0, o.cn)(
                      "transition-all duration-300 ease-out",
                      x.has(t)
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-12 scale-95"
                    ),
                    style: {
                      transitionDelay: "".concat(Math.min(50 * t, 300), "ms"),
                    },
                    children: (0, s.jsxs)(l.Q4, {
                      className: "h-full",
                      onUse: () => j(e.prompt),
                      children: [
                        (0, s.jsx)(l.Un, {
                          prompt: e.prompt,
                          logos: e.connections,
                          onUse: () => j(e.prompt),
                          onReplay: () => w(e.id),
                          hasSession: m[e.id],
                          trustedText: (0, s.jsxs)(s.Fragment, {
                            children: [
                              "Triggered",
                              " ",
                              (0, s.jsxs)("strong", {
                                className: "text-foreground font-medium",
                                children: [e.usage.toLocaleString(), "+"],
                              }),
                              " ",
                              "times",
                            ],
                          }),
                        }),
                        (0, s.jsxs)(l.$K, {
                          className: "flex flex-col gap-1 sm:gap-2 p-2 sm:p-1",
                          children: [
                            (0, s.jsx)(l.sX, {
                              className: "text-base sm:text-lg leading-tight",
                              children: e.goal,
                            }),
                            (0, s.jsxs)("div", {
                              className:
                                "flex items-center justify-between gap-2",
                              children: [
                                (0, s.jsx)(l.TT, {
                                  className: "text-xs sm:text-sm truncate",
                                  children: e.category,
                                }),
                                (0, s.jsxs)("button", {
                                  type: "button",
                                  onClick: (t) => {
                                    t.stopPropagation(), j(e.prompt);
                                  },
                                  className:
                                    "flex items-center gap-1 px-2 py-1 text-xs bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-background/90 hover:border-border rounded-md shadow-sm transition-colors flex-shrink-0 cursor-pointer",
                                  title: "Try this prompt",
                                  children: [
                                    (0, s.jsx)(n.A, {
                                      size: 14,
                                      className: "text-foreground",
                                    }),
                                    "Try Prompt",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  "".concat(e.goal, "-").concat(t)
                )
              ),
          ],
        });
      }
    },
    89998: (e, t, a) => {
      "use strict";
      a.d(t, { Ay: () => c, F0: () => l, xl: () => o });
      var s = a(40554),
        r = a(25771),
        n = a(62337);
      function i(e) {
        var t;
        let {
            variant: a = "full",
            size: i,
            width: l,
            height: o,
            className: c,
            priority: d,
            alt: x,
          } = e,
          {
            light: u,
            dark: m,
            defaultAlt: p,
            defaultSize: h,
          } = "solo" === a
            ? {
                light: "/images/logo/solo-light.svg",
                dark: "/images/logo/solo-dark.svg",
                defaultAlt: "Pica Solo Logo",
                defaultSize: { width: 28, height: 28 },
              }
            : {
                light: "/images/logo/full-light.svg",
                dark: "/images/logo/full-dark.svg",
                defaultAlt: "Pica Full Logo",
                defaultSize: { width: 120, height: 28 },
              },
          f = h.width / h.height,
          g = null != (t = null != i ? i : o) ? t : h.height,
          v = null != l ? l : Math.round(g * f);
        return (0, s.jsxs)("span", {
          className: (0, n.cn)("inline-flex items-center", c),
          children: [
            (0, s.jsx)(r.default, {
              src: u,
              alt: null != x ? x : p,
              width: v,
              height: g,
              className: "block dark:hidden",
              priority: d,
            }),
            (0, s.jsx)(r.default, {
              src: m,
              alt: null != x ? x : p,
              width: v,
              height: g,
              className: "hidden dark:block",
              priority: d,
            }),
          ],
        });
      }
      function l(e) {
        return (0, s.jsx)(i, { variant: "solo", ...e });
      }
      function o(e) {
        return (0, s.jsx)(i, { variant: "full", ...e });
      }
      function c(e) {
        return (0, s.jsx)(i, { ...e });
      }
    },
  },
  (e) => {
    e.O(
      0,
      [
        41, 4755, 8683, 6280, 8701, 8990, 6283, 4752, 4725, 2726, 9572, 3496,
        2337, 8732, 3434, 7358,
      ],
      () => e((e.s = 78150))
    ),
      (_N_E = e.O());
  },
]);
