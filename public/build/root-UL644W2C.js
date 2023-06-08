import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useFetcher,
  useFetchers
} from "/build/_shared/chunk-7BPNKTGY.js";
import {
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-NLQNPAAV.js";

// browser-route-module:root.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/root.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/@remix-run/css-bundle/dist/esm/browser.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var assetsManifest = window.__remixManifest;
var updatedHref = typeof __INJECT_CSS_BUNDLE_HREF__ === "string" ? __INJECT_CSS_BUNDLE_HREF__ : void 0;
var cssBundleHref = updatedHref || assetsManifest.cssBundleHref;

// app/style/core.css
var core_default = "/build/_assets/core-BLVHECDL.css";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-JF46ZOQ5.css";

// app/components/header.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react = __toESM(require_react());

// app/modules/service/system.ts
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var storageLocal = {
  set: (name, value) => window.localStorage.setItem(name, JSON.stringify(value)),
  get: (x) => {
    const value = window.localStorage.getItem(x);
    return JSON.parse(value);
  },
  remove: (x) => window.localStorage.removeItem(x)
};

// app/images/Eva-White.webp
var Eva_White_default = "/build/_assets/Eva-White-QDIY35C7.webp";

// app/images/cart.svg
var cart_default = "/build/_assets/cart-6K3HZ5GN.svg";

// app/components/header.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Header = () => {
  var _a, _b;
  const [isDrawerOpen, setIsDrawerOpen] = (0, import_react.useState)(false);
  const [isCartOpen, setIsCartOpen] = (0, import_react.useState)(false);
  const [userCart, setUserCart] = (0, import_react.useState)({ totalQuantity: 0 });
  const fetchers = useFetchers();
  const cartHandler = useFetcher();
  (0, import_react.useEffect)(() => {
    let cartState = fetchers.find((fetcher) => fetcher.formAction === "/cart");
    if (cartState && "id" in cartState.data) {
      storageLocal.set("cart", cartState.data);
      setUserCart(cartState.data);
    }
    const id = userCart && "id" in userCart ? userCart.id : null;
    const mainVal = storageLocal.get("cart") || {};
    if (!id && mainVal.id) {
      console.log(storageLocal.get("cart"));
      const variants = storageLocal.get("cart");
      setUserCart(variants);
    }
  }, [cartHandler, fetchers, userCart]);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "bg-eva-green text-white fixed top-0 w-full z-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto flex items-center justify-between py-4 px-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            className: "lg:hidden mr-4 focus:outline-none",
            onClick: toggleDrawer,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                className: "h-6 w-6",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "path",
                  {
                    fillRule: "evenodd",
                    d: "M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75zm0 5.5A.75.75 0 0 1 2.75 9h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75zm0 5.5A.75.75 0 0 1 2.75 14h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75z"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/header.tsx",
                    lineNumber: 59,
                    columnNumber: 15
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/components/header.tsx",
                lineNumber: 53,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/components/header.tsx",
            lineNumber: 49,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:mr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Eva_White_default, alt: "Eva logo", className: " h-9 py-2" }, void 0, false, {
          fileName: "app/components/header.tsx",
          lineNumber: 66,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/header.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/header.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/header.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "hidden lg:flex gap-2 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/categories/shop-all", className: "hover:text-gray-400", children: "Shop All" }, void 0, false, {
          fileName: "app/components/header.tsx",
          lineNumber: 72,
          columnNumber: 22
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/header.tsx",
        lineNumber: 72,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/header.tsx",
        lineNumber: 71,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/header.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          className: "relative focus:outline-none",
          onClick: toggleCart,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: cart_default, className: " h-6", alt: "" }, void 0, false, {
              fileName: "app/components/header.tsx",
              lineNumber: 81,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs", children: userCart == null ? void 0 : userCart.totalQuantity }, void 0, false, {
              fileName: "app/components/header.tsx",
              lineNumber: 83,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/header.tsx",
          lineNumber: 77,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/header.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/header.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    isDrawerOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-screen fixed h-full top-0 left-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: toggleDrawer, className: " bg-black opacity-30 w-full h-full" }, void 0, false, {
        fileName: "app/components/header.tsx",
        lineNumber: 95,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:hidden  shadow-md bg-white text-black h-screen w-64 fixed top-0 left-0 z-50 px-4 py-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/categories/shop-all", className: "hover:text-gray-400", children: "Shop All" }, void 0, false, {
        fileName: "app/components/header.tsx",
        lineNumber: 99,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/header.tsx",
        lineNumber: 98,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/header.tsx",
        lineNumber: 97,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/header.tsx",
        lineNumber: 96,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/header.tsx",
      lineNumber: 94,
      columnNumber: 9
    }, this),
    isCartOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-screen fixed h-full top-0 left-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: toggleCart, className: " bg-black opacity-30 w-full h-full" }, void 0, false, {
        fileName: "app/components/header.tsx",
        lineNumber: 109,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "shadow-md bg-white text-black h-full flex flex-col  w-full max-w-lg fixed top-0 right-0 z-50 px-4 py-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex border-b p-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl mb-4 flex-1", children: [
            "Cart (",
            userCart == null ? void 0 : userCart.totalQuantity,
            ")"
          ] }, void 0, true, {
            fileName: "app/components/header.tsx",
            lineNumber: 112,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: toggleCart, children: " X " }, void 0, false, {
            fileName: "app/components/header.tsx",
            lineNumber: 114,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/header.tsx",
            lineNumber: 113,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/header.tsx",
          lineNumber: 111,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex-1", children: userCart == null ? void 0 : userCart.lines.edges.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center py-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "img",
            {
              src: item.node.merchandise.image.url,
              alt: "Product",
              className: "h-20 w-20 object-cover rounded"
            },
            void 0,
            false,
            {
              fileName: "app/components/header.tsx",
              lineNumber: 124,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-gray-200 text-evagreen text-xl fornt medium", children: item.node.merchandise.title }, void 0, false, {
              fileName: "app/components/header.tsx",
              lineNumber: 130,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-400", children: [
              item.node.merchandise.priceV2.amount,
              " ",
              item.node.merchandise.priceV2.currencyCode
            ] }, void 0, true, {
              fileName: "app/components/header.tsx",
              lineNumber: 131,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/header.tsx",
            lineNumber: 129,
            columnNumber: 19
          }, this)
        ] }, item.node.id, true, {
          fileName: "app/components/header.tsx",
          lineNumber: 123,
          columnNumber: 19
        }, this)) }, void 0, false, {
          fileName: "app/components/header.tsx",
          lineNumber: 121,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-4 my-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-3xl font-thin", children: "Subtotal" }, void 0, false, {
            fileName: "app/components/header.tsx",
            lineNumber: 138,
            columnNumber: 59
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", { className: " border-black flex-1 " }, void 0, false, {
            fileName: "app/components/header.tsx",
            lineNumber: 138,
            columnNumber: 109
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " md:text-xl", children: [
            (_a = userCart == null ? void 0 : userCart.cost) == null ? void 0 : _a.subtotalAmount.amount,
            " ",
            (_b = userCart == null ? void 0 : userCart.cost) == null ? void 0 : _b.subtotalAmount.currencyCode
          ] }, void 0, true, {
            fileName: "app/components/header.tsx",
            lineNumber: 138,
            columnNumber: 148
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/header.tsx",
          lineNumber: 138,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: userCart == null ? void 0 : userCart.checkoutUrl, className: " text-white text-center font-bold py-2 px-4 block bg-eva-green w-full", children: "Checkout" }, void 0, false, {
          fileName: "app/components/header.tsx",
          lineNumber: 139,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/header.tsx",
        lineNumber: 110,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/header.tsx",
      lineNumber: 108,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/header.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
};
var header_default = Header;

// app/components/footer.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/images/green-logo.svg
var green_logo_default = "/build/_assets/green-logo-K47HCZTF.svg";

// app/images/youtube.svg
var youtube_default = "/build/_assets/youtube-6GOBFHWI.svg";

// app/images/facebook.svg
var facebook_default = "/build/_assets/facebook-G6OFNL6B.svg";

// app/images/instagram.svg
var instagram_default = "/build/_assets/instagram-M3DSJMRQ.svg";

// app/components/footer.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " bg-slate-700 text-white p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "lg:hidden py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: Eva_White_default, className: "h-8", alt: "" }, void 0, false, {
        fileName: "app/components/footer.tsx",
        lineNumber: 14,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/footer.tsx",
        lineNumber: 13,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-end justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "signup", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("b", { children: "We\u2019ve got secrets\u2026" }, void 0, false, {
            fileName: "app/components/footer.tsx",
            lineNumber: 18,
            columnNumber: 44
          }, this) }, void 0, false, {
            fileName: "app/components/footer.tsx",
            lineNumber: 18,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: " text-sm", children: "We'll drop prices, give insider cosy knowledge and never send spam (promise)." }, void 0, false, {
            fileName: "app/components/footer.tsx",
            lineNumber: 19,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/footer.tsx",
          lineNumber: 17,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "flex gap-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "HorizontalList__Item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "https://www.facebook.com/evahomeofficial/", className: "Link Link--primary", target: "_blank", rel: "noopener", "aria-label": "Facebook", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: facebook_default, className: " h-5", alt: "" }, void 0, false, {
            fileName: "app/components/footer.tsx",
            lineNumber: 26,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/components/footer.tsx",
            lineNumber: 25,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/components/footer.tsx",
            lineNumber: 24,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "HorizontalList__Item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "https://instagram.com/eva.home", className: "Link Link--primary", target: "_blank", rel: "noopener", "aria-label": "Instagram", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: instagram_default, className: "h-5", alt: "" }, void 0, false, {
            fileName: "app/components/footer.tsx",
            lineNumber: 33,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/components/footer.tsx",
            lineNumber: 32,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/components/footer.tsx",
            lineNumber: 31,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "HorizontalList__Item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "https://www.youtube.com/channel/UCESSp-9_XRezy-EJbjWZf0Q", className: "Link Link--primary", target: "_blank", rel: "noopener", "aria-label": "YouTube", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: youtube_default, className: "h-5", alt: "" }, void 0, false, {
            fileName: "app/components/footer.tsx",
            lineNumber: 40,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/components/footer.tsx",
            lineNumber: 39,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/components/footer.tsx",
            lineNumber: 38,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/footer.tsx",
          lineNumber: 23,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/footer.tsx",
          lineNumber: 21,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/footer.tsx",
        lineNumber: 16,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/footer.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "Footer__Aside p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { className: "footer-green-logo", src: green_logo_default }, void 0, false, {
          fileName: "app/components/footer.tsx",
          lineNumber: 51,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/components/footer.tsx",
          lineNumber: 52,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/footer.tsx",
        lineNumber: 50,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "md:flex text-xs justify-between gap-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "f-left w-full md:w-2/3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Eva acknowledges the Traditional Owners of the land where we work and live. We pay our respects to Elders past, present and emerging. We celebrate the stories, culture and traditions of Aboriginal and Torres Strait Islander Elders of all communities who also work and live on this land." }, void 0, false, {
            fileName: "app/components/footer.tsx",
            lineNumber: 57,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/components/footer.tsx",
            lineNumber: 58,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/footer.tsx",
          lineNumber: 55,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "f-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex  flex-col gap-3 md:flex-row md:gap-6 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "https://eva.com.au", className: "Footer__StoreName  u-h7 Link Link--secondary", children: "\xA92023  Eva" }, void 0, false, {
            fileName: "app/components/footer.tsx",
            lineNumber: 62,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/pages/terms-of-service", className: "Footer__StoreName u-h7 Link Link--secondary", children: "Terms and Conditions" }, void 0, false, {
            fileName: "app/components/footer.tsx",
            lineNumber: 63,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/pages/privacy-policy", className: "Footer__StoreName u-h7 Link Link--secondary", children: "Privacy Policy" }, void 0, false, {
            fileName: "app/components/footer.tsx",
            lineNumber: 64,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/pages/sitemap", className: "Footer__StoreName u-h7 Link Link--secondary", children: "Sitemap" }, void 0, false, {
            fileName: "app/components/footer.tsx",
            lineNumber: 65,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/footer.tsx",
          lineNumber: 61,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/footer.tsx",
          lineNumber: 60,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/footer.tsx",
        lineNumber: 54,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/footer.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/footer.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

// app/root.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var links = () => [
  ...cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : [],
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: core_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.gstatic.com" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { href: "https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap", rel: "stylesheet" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(header_default, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: " mt-16 min-h-screen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Index, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
export {
  App as default,
  links
};
/*! Bundled license information:

@remix-run/css-bundle/dist/esm/browser.js:
  (**
   * @remix-run/css-bundle v1.16.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=/build/root-UL644W2C.js.map
