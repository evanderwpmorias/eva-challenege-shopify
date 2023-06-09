import type { V2_MetaFunction, LoaderFunction, LinksFunction} from "@remix-run/node";
import { getProducts, getPage } from "~/modules/shopify/handler";
import { useLoaderData } from "@remix-run/react";
import { Link } from "@remix-run/react";

import homeStyle from "~/style/home-page.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: homeStyle },
];

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Eva store" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// Define the loader function to fetch data from the Shopify Storefront API
export let loader: LoaderFunction = async () => {
  const page:any = await getPage('home-page');
  const products:any = await getProducts() || [];
 
  return { page, products};
};


export default function Index() {
  const {products, page} = useLoaderData<typeof loader>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <div className="home-page" dangerouslySetInnerHTML={{ __html: page.body }} />
    </div>
  );
}
