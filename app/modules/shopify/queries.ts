
// Define a GraphQL query to fetch data from the Shopify Storefront API
export const queryProducts = `
  query GetProducts {
    products(sortKey: TITLE, first: 100) {
      edges {
        node {
          id
          handle
          description
          title
          productType
          totalInventory
          variants(first: 5) {
            edges {
              node {
                id
                title
                quantityAvailable
                price: priceV2 {
                  amount
                  currencyCode
                }
              }
            }
          }
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1) {
            edges {
              node {
                src
                altText
              }
            }
          }
        }
      }
    }
  }
`;

// Define a GraphQL query fetch categories from the Shopify Storefront API
export const queryCategories = `
  query GetCategories {
    collections(first: 10) {
      edges {
        node {
          id
          title
          handle
        }
      }
    }
  }
`;

// Define a GraphQL query fetch a single product from the Shopify Storefront API
export const queryProduct = `
  query GetProduct($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      handle
      description
      descriptionHtml
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      metafield(namespace: "custom", key: "product_slides") {
        value
        reference {
          ... on MediaImage {
            id
          }
        }
      }
      images(first: 10) {
        edges {
          node {
            id
            altText
            originalSrc
          }
        }
      }
      variants(first: 10) {
        edges {
          node {
            availableForSale
            id
            title
            priceV2 {
              amount
              currencyCode
            }

            color: metafield(key: "item_color", namespace: "custom") {
              value
            }

          }
        }
      }

      hero: metafield(key: "product_slides", namespace: "custom") {
        references(first: 10) {
          edges {
            node {
              ... on MediaImage {
                id
                image {
                  height
                  id
                  url
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`;

// Define a GraphQL query fetch a single category from the Shopify Storefront API
export const queryCategory = `
  query GetCategory($handle: String!) {
    collection(handle: $handle) {
      id
      title
      handle
      description
      descriptionHtml
      image {
        id
        altText
        originalSrc
      }
      products(first: 20) {
        edges {
          node {
            id
            title
            handle
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            featuredImage {
              height
              url
              width
            }
          }
        }
      }
    }
  }
`;



// Define a GraphQL query fetch a single page from the Shopify Storefront API
export const queryPage = `
  query GetPage($handle: String!) {
    page(handle: $handle) {
      body
      bodySummary
      handle
      id
      onlineStoreUrl
      seo {
        description
        title
      }
    }
  }
`;

export const getCartQuery = `
  query GetCart($checkoutId: ID!) {
    node(id: $checkoutId) {
      ... on Checkout {
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
