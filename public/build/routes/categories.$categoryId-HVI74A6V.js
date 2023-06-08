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

// browser-route-module:routes/categories.$categoryId.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/categories.$categoryId.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/components/product-card.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ProductCard({ product }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/products/${product.node.handle}`, className: " w-full before:content-['*'] before:pt-[100%] before:block relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "mb-6 w-ful h-full object-cover rounded-t-lg absolute top-0", src: product.node.featuredImage.url, alt: product.node.title }, void 0, false, {
      fileName: "app/components/product-card.tsx",
      lineNumber: 7,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/product-card.tsx",
      lineNumber: 6,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-5 pt-4 pb-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/products/${product.node.handle}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { className: "text-3xl font-semibold tracking-tight text-evagreen dark:text-white", children: product.node.title }, void 0, false, {
        fileName: "app/components/product-card.tsx",
        lineNumber: 11,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/product-card.tsx",
        lineNumber: 10,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-3xl font-thin text-gray-900 dark:text-white", children: [
        product.node.priceRange.minVariantPrice.amount,
        " ",
        product.node.priceRange.minVariantPrice.currencyCode
      ] }, void 0, true, {
        fileName: "app/components/product-card.tsx",
        lineNumber: 16,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/product-card.tsx",
        lineNumber: 15,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Link,
        {
          to: `/products/${product.node.handle}`,
          className: "px-4 pt-3 text-center block font-medium  border-t text-evagreen text-white w-full",
          children: "View Product "
        },
        void 0,
        false,
        {
          fileName: "app/components/product-card.tsx",
          lineNumber: 20,
          columnNumber: 15
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/product-card.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/product-card.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/product-card.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/categories.$categoryId.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [
    { title: "Eva store" },
    { name: "description", content: "Welcome to Remix!" }
  ];
};
function Index() {
  const { products, category } = useLoaderData();
  console.log(category);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-cream pb-4 shadow-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " container mx-auto p-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "pt-8 mb-2 text-6xl text-evagreen", children: category.title }, void 0, false, {
        fileName: "app/routes/categories.$categoryId.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { dangerouslySetInnerHTML: { __html: category.descriptionHtml } }, void 0, false, {
        fileName: "app/routes/categories.$categoryId.tsx",
        lineNumber: 41,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/categories.$categoryId.tsx",
      lineNumber: 39,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/categories.$categoryId.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "container mx-auto px-2 pt-10 block md:flex gap-4 flex-wrap mb-4", children: products == null ? void 0 : products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProductCard, { product }, product.node.id, false, {
      fileName: "app/routes/categories.$categoryId.tsx",
      lineNumber: 47,
      columnNumber: 15
    }, this)) }, void 0, false, {
      fileName: "app/routes/categories.$categoryId.tsx",
      lineNumber: 45,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/categories.$categoryId.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/categories.$categoryId.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/categories.$categoryId.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/categories.$categoryId-HVI74A6V.js.map
