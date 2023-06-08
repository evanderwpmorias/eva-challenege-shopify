import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-7BPNKTGY.js";
import {
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-NLQNPAAV.js";

// browser-route-module:routes/_index.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/_index.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/style/home-page.css
var home_page_default = "/build/_assets/home-page-GA2LUBTT.css";

// app/routes/_index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => [
  { rel: "stylesheet", href: home_page_default }
];
var meta = () => {
  return [
    { title: "Eva store" },
    { name: "description", content: "Welcome to Remix!" }
  ];
};
function Index() {
  const { products, page } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "home-page", dangerouslySetInnerHTML: { __html: page.body } }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Featured Products" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 34,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: products == null ? void 0 : products.map(
        (product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: product.node.title }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 38,
            columnNumber: 14
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/products/${product.node.handle}`, className: " bg-black text-white\n              rounded-sm px-4 py-2", children: "View Product" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 39,
            columnNumber: 14
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            "Price: ",
            product.node.priceRange.minVariantPrice.amount,
            " ",
            product.node.priceRange.minVariantPrice.currencyCode
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 42,
            columnNumber: 14
          }, this)
        ] }, product.node.id, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this)
      ) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 35,
        columnNumber: 8
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/_index-ONLF3OET.js.map
