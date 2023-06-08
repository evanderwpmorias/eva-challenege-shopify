
// import {onRequest} from "firebase-functions/v2/https";
import {createApi} from "unsplash-js";
import Shopify = require("shopify-api-node");
import * as functions from "firebase-functions";

import {
  SHOPIFY_STORE_DOMAIN,
  UNSPLASH_SECRET_KEY,
  SHOPIFY_API_KEY,
  SHOPIFY_API_SECRET,
} from "./creds";

const Unsplash = createApi({
  accessKey: UNSPLASH_SECRET_KEY,
});

const shopify = new Shopify({
  shopName: SHOPIFY_STORE_DOMAIN,
  apiKey: SHOPIFY_API_KEY,
  password: SHOPIFY_API_SECRET,
});


exports.updateProductPictures = functions.pubsub
  .schedule("every day 09:00")
  .onRun(async (context) => {
    try {
      const products = await shopify.product.list({limit: 30});

      const updatePromises:any = [];

      for (const product of products) {
        const productId = product.id;

        const photo = await Unsplash
          .photos.list(undefined)
          .then((result) => result.response?.results?.[0] ?? null );
        const imageUrl = photo?.urls.regular;
        if (imageUrl) {
          updatePromises
            .push(
              shopify.product.update(productId, {images: [{src: imageUrl}]})
            );
        }
      }

      await Promise.all(updatePromises);

      console.log("Product images updated successfully.");
    } catch (error) {
      console.error("Error updating product images:", error);
    }
  });
