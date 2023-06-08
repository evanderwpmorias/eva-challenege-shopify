// // Define the React component to render the fetched data
// export default function ShopifyStorefrontPage() {
//     // Access the data obtained from the Shopify Storefront API using useLoaderData()
//     const { products } = useLoaderData();
  
//     return (
//       <div>
//         <h1>Products</h1>
//         <ul>
//           {products.edges.map((product: any) => (
//             <li key={product.node.id}>
//               <h2>{product.node.title}</h2>
//               <p>Price: {product.node.priceRange.minVariantPrice.amount} {product.node.priceRange.minVariantPrice.currencyCode}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
  