import type { V2_MetaFunction, LoaderFunction, LoaderArgs, LinksFunction} from "@remix-run/node";
import { getCategory } from "~/modules/shopify/handler";
import { useLoaderData } from "@remix-run/react";
import { Link } from "@remix-run/react";
import ProductCard from "~/components/product-card";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Eva store" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// Define the loader function to fetch data from the Shopify Storefront API
export let loader: LoaderFunction = async ({ params} : LoaderArgs) => {
  const handle:any = params.categoryId;
  const category:any = await getCategory(handle);
  const products:any = category?.products.edges || [];
  console.log(params)
  console.log(products);
  if (!handle && category === null) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }
 
  return { category, products};
};


export default function Index() {
  const {products, category} = useLoaderData<typeof loader>();
  console.log(category);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <div className="">
        <div className="bg-cream pb-4 shadow-sm">
          <div className=" container mx-auto p-2">
            <h1 className="pt-8 mb-2 text-6xl text-evagreen">{category.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: category.descriptionHtml }} />
          </div>
        </div>
        <div>
          <ul className="container mx-auto px-2 pt-10 block md:flex gap-4 flex-wrap mb-4">
            {products?.map((product: any) => (
              <ProductCard  key={product.node.id} product={product}></ProductCard>
            ))}
          </ul>
        </div>
     </div>
    </div>
  );
}
