// Import required modules and dependencies
import { json } from '@remix-run/node';

import { 
  queryProducts,
  queryProduct,
  queryCategories ,
  queryCategory,
  queryPage,
} from './queries';

import { createShopifyCheckout,
  removeCartItemMutation,
  updateCartQuantityMutation,
  addToCartMutation } from './mutations';
import axios from 'axios';

const url = `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2023-04/graphql.json`;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_API_TOKEN;


// Define the Shopify Storefront API client
export const sendREquest = async (query: string, variables?:any) => {
  return await axios({
    method: 'post',
    url,
    data: JSON.stringify({ query, variables }),
    headers: {
      'Content-Type': 'application/JSON',
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken
    }
  })
}

export const getProduct = async (handle: string) => {
  const data = await sendREquest(queryProduct, {handle}).then(response => {
    const requestData = response.data;
    const product = 'data' in requestData ? requestData.data.productByHandle : {};
    
    return product;
  })
  .catch(error => {
     console.error('Error:', error);
     return null;
  });
  return data;
}

export const getProducts = async () => {
  const data = await sendREquest(queryProducts).then(response => {
      const requestData = response.data;
      const products = 'data' in requestData ? requestData.data.products.edges : [];
      return products;
    })
    .catch(error => {
       console.error('Error:', error);
       return null;
    });
    return data;
}

export const getCategories = async () => {
  const data = await sendREquest(queryCategories).then(response => {
      const requestData = response.data;
      const categories = 'data' in requestData ? requestData.data.collections.edges : [];
      return categories;
    })
    .catch(error => {
       console.error('Error:', error);
       return null;
    });
    return data;
}

export const getCategory = async (handle: string) => {
  const data = await sendREquest(queryCategory, {handle}).then(response => {
      const requestData = response.data;
      const category = 'data' in requestData ? requestData.data.collection : [];
      return category;
    })
    .catch(error => {
       console.error('Error:', error);
       return null;
    });
    return data;
}

export const getPage = async (handle: string) => {
  const data = await sendREquest(queryPage, {handle}).then(response => {
      const requestData = response.data;
      const page = 'data' in requestData ? requestData.data.page : null;
      return page;
    })
    .catch(error => {
       console.error('Error:', error);
       return null;
    });
    return data;
}

export const createCheckout = async (variantId: any, quantity: any) => {
  const data = await sendREquest(createShopifyCheckout, {variantId, quantity}).then(response => {
      const requestData = response.data;
      console.log('requestData', requestData);
      const checkout = 'data' in requestData ? requestData.data.cartCreate.cart : null;
      return checkout;
    })
    .catch(error => {
       console.error('Error:', error);
       return null;
    });
    return data;
}

export const addToCart = async (variantId: any , quantity: any) => {
  const data = await sendREquest(addToCartMutation, {variantId, quantity}).then(response => {
      const requestData = response.data;
      const checkout = 'data' in requestData ? requestData.data.checkoutLineItemsAdd.checkout : null;
      return checkout;
    })
    .catch(error => {
       console.error('Error:', error);
       return null;
    });
    return data;
}

export const updateCartQuantity = async (lineItemId: any, quantity: any, checkoutId:any) => {
  const data = await sendREquest(updateCartQuantityMutation, {lineItemId, quantity, checkoutId}).then(response => {
      const requestData = response.data;
      const checkout = 'data' in requestData ? requestData.data.checkoutLineItemsUpdate.checkout : null;
      return checkout;
    })
    .catch(error => {
       console.error('Error:', error);
       return null;
    });
    return data;
}

export const removeCartItem = async (lineItemId: any) => {
  const data = await sendREquest(removeCartItemMutation, {lineItemId}).then(response => {
      const requestData = response.data;
      const checkout = 'data' in requestData ? requestData.data.checkoutLineItemsRemove.checkout : null;
      return checkout;
    })
    .catch(error => {
       console.error('Error:', error);
       return null;
    });
    return data;
}
