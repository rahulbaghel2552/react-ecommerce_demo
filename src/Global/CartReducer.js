
const CartReducer = (state, action) => {
  const { shopingCart, totalprice, qty } = state;
  


  let product, index, updatedPrice, updatedQty;

  switch (action.type) {
    case "PRODUCT_BTN":
      const check = shopingCart.find((product) => product.id === action.id);
      if (check) {
        return state;
      } else {
        product = action.product;
        product["qty"] = 1;
        updatedQty = qty + 1;
        updatedPrice = totalprice + product.price;
        return {
          shopingCart: [product, ...shopingCart],
          totalprice: updatedPrice,
          qty: updatedQty,
        };
      }

      break;

    case "INC":
      product = action.cart;
      product.qty = product.qty + 1;
      updatedPrice = totalprice + product.price;
      updatedQty = qty + 1;
      index = shopingCart.findIndex((cart) => cart.id === action.id);
      shopingCart[index] = product;
      return {
        shopingCart: [...shopingCart],
        totalprice: updatedPrice,
        qty: updatedQty,
      };

      break;

    case "DEC":
      product = action.cart;

      if (product.qty > 1) {
        product.qty = product.qty - 1;
        updatedPrice = totalprice - product.price;
        updatedQty = qty - 1;
        index = shopingCart.findIndex((cart) => cart.id === action.id);
        shopingCart[index] = product;
        return {
          shopingCart: [...shopingCart],
          totalprice: updatedPrice,
          qty: updatedQty,
        };
      } else {
        return state;
      }

      break;
    case "DELETE":
      const filter = shopingCart.filter((product) => product.id !== action.id);
      product = action.cart;
      updatedQty = qty - product.qty;
      updatedPrice = totalprice - product.price * product.qty;
      return {
        shopingCart: [...filter],
        totalprice: updatedPrice,
        qty: updatedQty,
      };

      break;
      Default: return state;
  }
};

export default CartReducer;
