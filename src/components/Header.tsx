import { useState } from "react";

import Cart from "./Cart.tsx";
import { useCartSelector } from "../store/hooks.ts";

export default function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const cartQuantiy = useCartSelector((state) =>            // useCartSelector() is a custom hook same as useSelector() with extra type safty.
    state.cart.items.reduce((a, item) => a + item.quantity, 0)
  );

  function handleOpenCartClick() {
    setCartIsVisible(true);
  }

  function handleCloseCartClick() {
    setCartIsVisible(false);
  }

  return (
    <>
      {cartIsVisible && <Cart onClose={handleCloseCartClick} />}
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Redux</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantiy})</button>
        </p>
      </header>
    </>
  );
}
