import  { useState, useEffect } from 'react';
import { useFetchers, useFetcher } from "@remix-run/react";
import { storageLocal } from "~/modules/service/system";
import logo from '~/images/Eva-White.webp'
import cart from '~/images/cart.svg'



const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState (false);
  const [userCart, setUserCart] = useState({totalQuantity: 0});

   
  const fetchers = useFetchers();
  const cartHandler = useFetcher();


  useEffect(() => {
    let cartState = fetchers.find((fetcher) => fetcher.formAction === "/cart" );
    if (cartState && 'id' in cartState.data) {
      storageLocal.set('cart', cartState.data)
      setUserCart(cartState.data)
    } 
    const id = userCart && 'id' in userCart ? userCart.id : null
    const mainVal = storageLocal.get('cart') || {}
    
      if(!id && mainVal.id )   {
        console.log(storageLocal.get('cart'))
        const variants =storageLocal.get('cart')
        setUserCart(variants)
      }
  },[cartHandler, fetchers, userCart])



  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className="bg-eva-green text-white fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-2">
        <div className="flex items-center">
        <button
            className="lg:hidden mr-4 focus:outline-none"
            onClick={toggleDrawer}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75zm0 5.5A.75.75 0 0 1 2.75 9h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75zm0 5.5A.75.75 0 0 1 2.75 14h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75z"
              />
            </svg>
          </button>
          <div className="md:mr-4">
            <a href='/'><img src={logo} alt="Eva logo" className=" h-9 py-2"  /></a>
          </div>
        </div>

        <div className='flex-1 px-8'>
            <ul className="hidden lg:flex gap-2 items-center">
                <li> <a href="/categories/shop-all" className="hover:text-gray-400">Shop All</a></li>
            </ul>
        </div>
        <div className="flex items-center">

          <button
            className="relative focus:outline-none"
            onClick={toggleCart}
          >
            <img src={cart}  className=" h-6" alt="" />

              <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              {userCart?.totalQuantity}
            </span>
 
            
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className='w-screen fixed h-full top-0 left-0'>
            <div onClick={toggleDrawer} className=' bg-black opacity-30 w-full h-full'></div>
            <div className="lg:hidden  shadow-md bg-white text-black h-screen w-64 fixed top-0 left-0 z-50 px-4 py-6">
            <ul>
                <li className="py-2">
                <a href="/categories/shop-all" className="hover:text-gray-400">Shop All</a>
                </li>
            </ul>
            </div>
        </div>
      )}

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className='w-screen fixed h-full top-0 left-0'>
            <div onClick={toggleCart} className=' bg-black opacity-30 w-full h-full'></div>
            <div className="shadow-md bg-white text-black h-full flex flex-col  w-full max-w-lg fixed top-0 right-0 z-50 px-4 py-4">
            <div className='flex border-b p-2'>
              <h2 className="text-xl mb-4 flex-1">Cart ({userCart?.totalQuantity})</h2>
              <div>
                <button onClick={toggleCart}> X </button>
              </div>
            </div>

            

            {/* Cart items */}
            <ul className='flex-1'>
                {userCart?.lines.edges.map((item: any) => (
                  <li className="flex items-center py-2" key={item.node.id}>
                  <img
                      src={item.node.merchandise.image.url}
                      alt="Product"
                      className="h-20 w-20 object-cover rounded"
                  />
                  <div className="ml-2">
                      <h3 className="text-gray-200 text-evagreen text-xl fornt medium">{item.node.merchandise.title}</h3>
                      <p className="text-gray-400">{item.node.merchandise.priceV2.amount} {item.node.merchandise.priceV2.currencyCode}</p>
                  </div>
                  </li>
                ))}

            </ul>
            {/* Checkout button */}
            <div className="flex items-center gap-4 my-6"><div className="text-3xl font-thin">Subtotal</div><hr className=" border-black flex-1 "/><div className=" md:text-xl">{userCart?.cost?.subtotalAmount.amount} {userCart?.cost?.subtotalAmount.currencyCode}</div></div>
            <a href={userCart?.checkoutUrl} className=" text-white text-center font-bold py-2 px-4 block bg-eva-green w-full">
                Checkout
            </a>
            </div>
        </div>
      )}
    </header>
  );
};

export default Header;

