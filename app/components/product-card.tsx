import { Link } from "@remix-run/react";

export default function ProductCard({product}:{product:any}) {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to={`/products/${product.node.handle}`} className=" w-full before:content-['*'] before:pt-[100%] before:block relative" >
          <img className="mb-6 w-ful h-full object-cover rounded-t-lg absolute top-0" src={product.node.featuredImage.url} alt={product.node.title} />
        </Link>
        <div className="px-5 pt-4 pb-5">
            <Link to={`/products/${product.node.handle}`} >
                <h5 className="text-3xl font-semibold tracking-tight text-evagreen dark:text-white">
                  {product.node.title}
                </h5>
            </Link>
            <div className="flex items-center justify-between my-4">
                <span className="text-3xl font-thin text-gray-900 dark:text-white">{product.node.priceRange.minVariantPrice.amount} {product.node.priceRange.minVariantPrice.currencyCode}</span>
            </div>
            <div>

              <Link to={`/products/${product.node.handle}`} 
                  className="px-4 pt-3 text-center block font-medium  border-t text-evagreen text-white w-full"
                  >View Product </Link>
            </div>
        </div>
    </div>
  );
}
