import {
  useFetcher,
  useLoaderData
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

// browser-route-module:routes/products.$productId.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/products.$productId.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react2 = __toESM(require_react());
var import_react4 = __toESM(require_react());

// app/components/product-hero.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ProductHero = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = (0, import_react.useState)(0);
  (0, import_react.useEffect)(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6e3);
    return () => {
      clearInterval(interval);
    };
  }, [images]);
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "slider relative h-96", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "slider-button", onClick: goToPrevious, children: "<" }, void 0, false, {
      fileName: "app/components/product-hero.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    images.map((image, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `slide absolute top-0  w-full h-full ${index === currentIndex ? "active" : " opacity-0"}`,
        style: {
          backgroundImage: `url(${image.node.image.url})`
        }
      },
      index,
      false,
      {
        fileName: "app/components/product-hero.tsx",
        lineNumber: 31,
        columnNumber: 9
      },
      this
    )),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "slider-button", onClick: goToNext, children: ">" }, void 0, false, {
      fileName: "app/components/product-hero.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/product-hero.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
};
var product_hero_default = ProductHero;

// app/routes/products.$productId.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [
    { title: "Products" },
    { name: "description", content: "Welcome to Remix!" }
  ];
};
function Products() {
  var _a, _b;
  const { product, variants, firstAvailableVariant } = useLoaderData();
  const [selectedVariant, setSelectedVariant] = (0, import_react2.useState)(firstAvailableVariant);
  const [quantity, setQuantity] = (0, import_react2.useState)(1);
  const quantityRef = (0, import_react4.useRef)(null);
  const fetcher = useFetcher();
  const handleVariantChange = (id) => {
    const availableVariants = variants.edges || [];
    const selectedVariant2 = availableVariants.find((variant) => variant.node.id === id);
    setSelectedVariant(selectedVariant2);
  };
  (0, import_react2.useEffect)(() => {
    if (fetcher.state === "idle" && fetcher.data == null) {
      fetcher.load("/cart");
    }
    console.log(fetcher);
  }, [fetcher]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full justify-center mb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(product_hero_default, { images: (_a = product.hero) == null ? void 0 : _a.references.edges, children: " " }, void 0, false, {
      fileName: "app/routes/products.$productId.tsx",
      lineNumber: 63,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/products.$productId.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "block md:flex container mx-auto ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1 w-full md:w-auto mb-8 min-w-[50%] relative overflow-x-auto scroll-smooth", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "gallery relative whitespace-nowrap md:whitespace-normal block snap-mandatory snap-x max-h-[50vh] md:max-h-max md:snap-none", children: (_b = product.images) == null ? void 0 : _b.edges.map((image) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "img",
        {
          className: "gallery-image snap-start inline-block",
          src: image.node.originalSrc,
          alt: image.node.altText
        },
        image.node.id,
        false,
        {
          fileName: "app/routes/products.$productId.tsx",
          lineNumber: 71,
          columnNumber: 15
        },
        this
      )) }, void 0, false, {
        fileName: "app/routes/products.$productId.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/products.$productId.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "sticky top-24 pl-8 pr-8 md:pr-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-5xl font-medium mb-4 text-green-800", children: product.title }, void 0, false, {
            fileName: "app/routes/products.$productId.tsx",
            lineNumber: 83,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center gap-4 my-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-3xl font-thin", children: [
              product.priceRange.minVariantPrice.amount,
              " ",
              product.priceRange.minVariantPrice.currencyCode
            ] }, void 0, true, {
              fileName: "app/routes/products.$productId.tsx",
              lineNumber: 88,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("hr", { className: " border-black flex-1 " }, void 0, false, {
              fileName: "app/routes/products.$productId.tsx",
              lineNumber: 91,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " md:text-xl", children: selectedVariant.node.title }, void 0, false, {
              fileName: "app/routes/products.$productId.tsx",
              lineNumber: 92,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/products.$productId.tsx",
            lineNumber: 87,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mb-4", children: product.description }, void 0, false, {
            fileName: "app/routes/products.$productId.tsx",
            lineNumber: 97,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/products.$productId.tsx",
          lineNumber: 82,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(fetcher.Form, { method: "post", action: "/cart", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "variantId", value: selectedVariant.node.id }, void 0, false, {
              fileName: "app/routes/products.$productId.tsx",
              lineNumber: 104,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "input",
              {
                type: "number",
                value: quantity,
                onChange: (e) => setQuantity(parseInt(e.target.value)),
                className: "border px-4 py-2 border-black",
                min: "1",
                max: "9",
                name: "quantity",
                id: "quantity"
              },
              void 0,
              false,
              {
                fileName: "app/routes/products.$productId.tsx",
                lineNumber: 105,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/products.$productId.tsx",
            lineNumber: 103,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/products.$productId.tsx",
            lineNumber: 102,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-3 my-8", children: variants == null ? void 0 : variants.edges.map((variant) => {
            var _a2;
            return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "label",
              {
                className: ` cursor-pointer gap-2 items-center border-2 rounded-full px-2 py-2 inline-flex
                    ${variant.node.id === selectedVariant.node.id ? "border-green-800 hover:border-green-700" : "border-gray-300 hover:border-gray-400"}
                    `,
                htmlFor: variant.node.id,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    "span",
                    {
                      style: { backgroundColor: (_a2 = variant.node.color) == null ? void 0 : _a2.value },
                      className: " inline-block w-8 h-8 rounded-full"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/products.$productId.tsx",
                      lineNumber: 118,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    "input",
                    {
                      type: "radio",
                      name: "variant",
                      id: variant.node.id,
                      className: "hidden",
                      value: variant.node.id,
                      onChange: () => handleVariantChange(variant.node.id)
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/products.$productId.tsx",
                      lineNumber: 122,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-sm font-medium", children: variant.node.title }, void 0, false, {
                    fileName: "app/routes/products.$productId.tsx",
                    lineNumber: 130,
                    columnNumber: 21
                  }, this)
                ]
              },
              variant.node.id,
              true,
              {
                fileName: "app/routes/products.$productId.tsx",
                lineNumber: 113,
                columnNumber: 19
              },
              this
            );
          }) }, void 0, false, {
            fileName: "app/routes/products.$productId.tsx",
            lineNumber: 112,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/products.$productId.tsx",
            lineNumber: 111,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "submit", className: "px-4 py-2 font-medium rounded bg-green-800 hover:bg-green-900 text-white w-full", children: "Add to Cart" }, void 0, false, {
            fileName: "app/routes/products.$productId.tsx",
            lineNumber: 137,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/products.$productId.tsx",
            lineNumber: 136,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/products.$productId.tsx",
          lineNumber: 101,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/products.$productId.tsx",
        lineNumber: 81,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/products.$productId.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/products.$productId.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products.$productId.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}
export {
  Products as default,
  meta
};
//# sourceMappingURL=/build/routes/products.$productId-XCX677SC.js.map
