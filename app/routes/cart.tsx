import type { V2_MetaFunction, LoaderArgs } from "@remix-run/node";
import { createCheckout, addToCart, updateCartQuantity, removeCartItem } from "~/modules/shopify/handler";



export const meta: V2_MetaFunction = () => {
  return [
    { title: "Cart" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({ request}: LoaderArgs) {
  const getData: any = async () => {
    const formdata = await request.formData();
    const data:any = {};
    for (var pair of formdata.entries()) {
      data[pair[0]] = pair[1];
    }
    return data;
  };


  // handle multiple request type qith switch statement
  switch (request.method) {
    case "GET":
      return {};
    case "POST": {

      const { variantId, quantity } = await getData();
      return addToCart(variantId, quantity);
    }
    case "PUT": {
      const { checkoutId, variantId, quantity } = await getData();
      return updateCartQuantity(variantId, quantity, checkoutId);
    }
    case "DELETE": {
      const { itemId } = await getData();
      return removeCartItem(itemId);
    }
    default:
      return new Response("Method Not Allowed", {
        status: 405,
      });
  }
}

export async function action({ request }: LoaderArgs) {
  const getData: any = async () => {
    const formdata = await request.formData();
    const data:any = {};
    for (var pair of formdata.entries()) {
      data[pair[0]] = pair[1];
    }
    console.log(data);
    return data;
  };


  // handle multiple request type qith switch statement
  switch (request.method) {
    case "GET":
      return {};
    case "POST": {

      const { variantId, quantity } = await getData();
      const cart = await createCheckout(variantId, Number(quantity));
      console.log(cart);
      return cart
    }
    case "PUT": {
      const { checkoutId, variantId, quantity } = await getData();
      return updateCartQuantity(variantId, Number(quantity), checkoutId);
    }
    case "DELETE": {
      const { itemId } = await getData();
      return removeCartItem(itemId);
    }
    default:
      return new Response("Method Not Allowed", {
        status: 405,
      });
  }
}







export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>cart</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
            className="text-red-500"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
