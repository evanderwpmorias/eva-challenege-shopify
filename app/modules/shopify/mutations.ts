// cretate new shopify cart mutation

export const createShopifyCheckout = `
mutation createCart($variantId: ID!, $quantity: Int!) {
  cartCreate(
    input: {lines: {quantity: $quantity, merchandiseId: $variantId}}
  ) {
    cart {
      checkoutUrl
      
      totalQuantity
      lines(first: 100) {
        edges {
          node {
            quantity
            merchandise {
              ... on ProductVariant {
                id
                title
                image {
                  url
                  height
                  width
                }
                priceV2 {
                  amount
                  currencyCode
                }
                product {
                  id
                }
                compareAtPriceV2 {
                  amount
                  currencyCode
                }
              }
            }
            id
            cost {
              totalAmount {
                amount
                currencyCode
              }
              subtotalAmount {
                amount
                currencyCode
              }
              compareAtAmountPerQuantity {
                amount
                currencyCode
              }
              amountPerQuantity {
                amount
                currencyCode
              }
            }
          }
        }
      }
      id
      cost {
        totalAmount {
          amount
          currencyCode
        }
        subtotalAmount {
          amount
          currencyCode
        }
      }
    }
  }
}`;

export const addToCartMutation = `
  mutation {
  cartCreate(
    input: {lines: {quantity: 10, merchandiseId: "gid://shopify/ProductVariant/45199746302239"}}
  ) {
    cart {
      checkoutUrl
      totalQuantity
      lines(first: 100) {
        edges {
          node {
            quantity
            merchandise {
              ... on ProductVariant {
                id
                image {
                  url
                  height
                  width
                }
                priceV2 {
                  amount
                  currencyCode
                }
                product {
                  id
                }
                compareAtPriceV2 {
                  amount
                  currencyCode
                }
              }
            }
            id
            cost {
              totalAmount {
                amount
                currencyCode
              }
              subtotalAmount {
                amount
                currencyCode
              }
              compareAtAmountPerQuantity {
                amount
                currencyCode
              }
              amountPerQuantity {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }
}
`;

export const updateCartQuantityMutation = `
  mutation UpdateCartQuantity($lineItemId: ID!, $quantity: Int!, $checkoutId: ID!) {
    checkoutLineItemsUpdate(
      checkoutId: $checkoutId,
      lineItems: [{ id: $lineItemId, quantity: $quantity }]
    ) {
      checkout {
        id
        webUrl
        lineItems(first: 10) {
          edges {
            node {
              id
              title
              quantity
              variant {
                id
                title
                priceV2 {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const removeCartItemMutation = `
  mutation RemoveCartItem($lineItemId: ID!) {
    checkoutLineItemsRemove(lineItemIds: [$lineItemId]) {
      checkout {
        id
        webUrl
        lineItems(first: 10) {
          edges {
            node {
              id
              title
              quantity
              variant {
                id
                title
                priceV2 {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
`;
