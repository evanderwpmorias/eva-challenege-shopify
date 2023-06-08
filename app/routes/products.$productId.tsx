import type { V2_MetaFunction, LoaderArgs, } from "@remix-run/node";
import { useState, useEffect } from 'react';
import { useLoaderData, useFetcher, } from "@remix-run/react";
import { useRef } from "react";
import { json } from "@remix-run/node";
import { getProduct } from "~/modules/shopify/handler";
import ProductHero from "~/components/product-hero";



export const meta: V2_MetaFunction = () => {
  return [
    { title: "Products" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({ params, request }: LoaderArgs) {
  const productId = params.productId;
  if (!productId){
    return json({productId, product: null, variants: [], firstAvailableVariant:{}});
  };



  const product:any = await getProduct(productId);
  const { variants } = product;

  const availableVariants = variants.edges || [];
  const firstAvailableVariant:Object = availableVariants.find((variant:any) => variant.node.availableForSale) || {};

  return json({productId, product, variants, firstAvailableVariant});
  
}
//  product page layout with image gallery, product details, and add to cart button and quantity selector using shopify product information froma grathql request

export default function Products() {
  const { product, variants,  firstAvailableVariant } = useLoaderData<typeof loader>();
  const [selectedVariant, setSelectedVariant]:[any, Function] = useState(firstAvailableVariant);
  const [quantity, setQuantity]:[any, Function] = useState(1);
  const quantityRef = useRef<HTMLInputElement>(null) ;
  const fetcher = useFetcher();

  const handleVariantChange = (id:string) => {
    const availableVariants = variants.edges || [];
    const selectedVariant = availableVariants.find((variant:any) => variant.node.id === id);
    setSelectedVariant(selectedVariant);
  };

  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data == null) {
      fetcher.load("/cart");
    }
    console.log(fetcher);
  }, [fetcher]);

  
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      
      {/* a simple slide show whit 3 images coming from a metafiel called hero */}
      <div className="w-full justify-center mb-8">
          <ProductHero images={product.hero?.references.edges}> </ProductHero>
      </div>
      {/* a simple gallery with all the images of the product */}

      <div className="block md:flex container mx-auto ">
        <div className="flex-1 w-full md:w-auto mb-8 min-w-[50%] relative overflow-x-auto scroll-smooth">
          <div className="gallery relative whitespace-nowrap md:whitespace-normal block snap-mandatory snap-x max-h-[50vh] md:max-h-max md:snap-none">
            {product.images?.edges.map((image: any) => (
              <img
                key={image.node.id}
                className="gallery-image snap-start inline-block"
                src={image.node.originalSrc}
                alt={image.node.altText}
              />
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="sticky top-24 pl-8 pr-8 md:pr-0">
            <div>
              <h1 className="text-5xl font-medium mb-4 text-green-800" >
                {product.title}
              </h1>

              <div className="flex items-center gap-4 my-6">
                <div className="text-3xl font-thin">
                  {product.priceRange.minVariantPrice.amount} {product.priceRange.minVariantPrice.currencyCode} 
                </div>
                <hr className=" border-black flex-1 " />
                <div className=" md:text-xl">
                  {selectedVariant.node.title}
                </div>
              </div>

              <p className="mb-4">
                {product.description}
              </p>
            </div>
            <fetcher.Form method="post" action="/cart">
                <div>
                  <div>
                    <input type="hidden" name="variantId" value={selectedVariant.node.id} />
                    <input type="number" 
                     value={quantity}
                     onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="border px-4 py-2 border-black" min="1" max="9" name="quantity" id="quantity" />
                  </div>
                </div>
                <div>
              <div className="flex gap-3 my-8">{variants?.edges.map((variant: any) => (
                  <label  key={variant.node.id} 
                    
                    className={` cursor-pointer gap-2 items-center border-2 rounded-full px-2 py-2 inline-flex
                    ${variant.node.id === selectedVariant.node.id ? 'border-green-800 hover:border-green-700' : 'border-gray-300 hover:border-gray-400'}
                    `} htmlFor={variant.node.id}>
                    <span style={{backgroundColor: variant.node.color?.value}} 
                    className=" inline-block w-8 h-8 rounded-full">

                    </span>
                    <input
                      type="radio"
                      name="variant"
                      id={variant.node.id}
                      className="hidden"
                      value={variant.node.id}
                      onChange={() => handleVariantChange(variant.node.id)}
                    />
                    <span className="text-sm font-medium">
                      {variant.node.title}
                    </span> 
                    </label>
                ))}</div>
              </div>
              <div className="mb-8">
                <button type="submit" className="px-4 py-2 font-medium rounded bg-green-800 hover:bg-green-900 text-white w-full">
                  Add to Cart
                </button>
              </div>
            </fetcher.Form>
          </div>
        </div>
      </div>
    </div>
  );
}
