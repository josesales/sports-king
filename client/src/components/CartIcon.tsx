import React from "react";
import cart from "../assets/cart.svg";
import { Link } from "react-router-dom";
import globalStyles from "../globalStyles";
import { useAppSelector } from "../redux/hooks";

const CartIcon = () => {
  const productsNumber = useAppSelector((state) => state.cart.totalQuantity);

  return (
    <Link className="flex flex-none" to="/checkout">
      <div className="relative">
        <img
          title={
            productsNumber && productsNumber > 0
              ? `${productsNumber} Products in your Cart.`
              : "Your Cart is Empty."
          }
          src={cart}
          alt="Your Cart"
          className="w-10 h-6 sm:w-14 sm:h-10"
        />
        {productsNumber && productsNumber > 0 ? (
          <span
            title={`${productsNumber} Products in your Cart.`}
            className={`p-1 absolute text-white bg-red-500
                            flex rounded-full items-center justify-center
                            bottom-5 left-3 sm:bottom-8 sm:left-5
                            h-6 w-6 sm:h-8 sm:w-8 
                            text-sm sm:${globalStyles.textDefault}`}
          >
            {productsNumber}
          </span>
        ) : null}
      </div>
    </Link>
  );
};

export default CartIcon;
