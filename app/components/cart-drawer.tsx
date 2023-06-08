// a cart drawer remix js component, with the ability to list products, change quantity, and remove products from the cart
// import { useCart } from "~/cart";
// 
// export default function CartDrawer() {
//   let cart = useCart();
//   let products = Object.keys(cart.products);
//   return (
//     <div className="fixed inset-0 z-50 flex flex-col p-4 bg-white shadow-lg">
//       <div className="flex flex-row justify-between items-center">
//         <h2 className="text-lg font-semibold">Your Cart</h2>
//         <button className="text-red-500" onClick={() => cart.close()}>
//           Close
//         </button>
//       </div>
//       <div className="flex flex-col flex-1 mt-4">
//         {products.length === 0 ? (
//           <div className="flex-1 flex flex-col justify-center items-center p-4">
//             <h3 className="text-lg font-semibold">Your cart is empty</h3>
//           </div>
//         ) : (
//           <div className="flex-1 flex flex-col overflow-y-auto">
//             {products.map((product) => (
//               <CartItem key={product} product={product} />
//             ))}
//           </div>
//         )}
//       </div>
//       <div className="flex flex-row justify-between items-center mt-4">
//         <div className="text-lg font-semibold">
//           Total: {cart.totalPrice.toFixed(2)}
//         </div>
//         <button
//           className="px-4 py-2 bg-red-500 text-white rounded-lg"
//           onClick={() => cart.checkout()}
//         >
//           Checkout
//         </button>
//       </div>
//     </div>
//   );
// }
