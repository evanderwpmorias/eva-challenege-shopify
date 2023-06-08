"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {onRequest} from "firebase-functions/v2/https";
const unsplash_js_1 = require("unsplash-js");
const Shopify = require("shopify-api-node");
const functions = require("firebase-functions");
const creds_1 = require("./creds");
const Unsplash = (0, unsplash_js_1.createApi)({
    accessKey: creds_1.UNSPLASH_SECRET_KEY,
});
const shopify = new Shopify({
    shopName: creds_1.SHOPIFY_STORE_DOMAIN,
    apiKey: creds_1.SHOPIFY_API_KEY,
    password: creds_1.SHOPIFY_API_SECRET,
});
exports.updateProductPictures = functions.pubsub
    .schedule("every day 09:00")
    .onRun(async (context) => {
    try {
        const products = await shopify.product.list({ limit: 30 });
        const updatePromises = [];
        for (const product of products) {
            const productId = product.id;
            const photo = await Unsplash
                .photos.list(undefined)
                .then((result) => { var _a, _b, _c; return (_c = (_b = (_a = result.response) === null || _a === void 0 ? void 0 : _a.results) === null || _b === void 0 ? void 0 : _b[0]) !== null && _c !== void 0 ? _c : null; });
            const imageUrl = photo === null || photo === void 0 ? void 0 : photo.urls.regular;
            if (imageUrl) {
                updatePromises
                    .push(shopify.product.update(productId, { images: [{ src: imageUrl }] }));
            }
        }
        await Promise.all(updatePromises);
        console.log("Product images updated successfully.");
    }
    catch (error) {
        console.error("Error updating product images:", error);
    }
});
//# sourceMappingURL=index.js.map