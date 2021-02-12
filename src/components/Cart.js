import { useContext } from "react";
import { CartContext } from "../Global/CartContext";
import StripeCheckout from "react-stripe-checkout";
const Cart = () => {
  const { shopingCart, totalprice, qty, dispatch } = useContext(CartContext);
  const handleToken = (token) => {
    console.log(token);
  };

  return (
    <section
      className="cstm_container cart_wrap"
      style={{ marginTop: "50px", marginBottom: "50px" }}
    >
      <h4 className="product_head">Shoping Cart</h4>
      <hr style={{ marginBottom: "50px" }}></hr>
      <div className="cart_row">
        <div className="cart-details">
          {shopingCart.length > 0
            ? shopingCart.map((cart) => (
                <div className="cart" key={cart.id}>
                  <div className="cart_name_image">
                    <span className="cart_image">
                      <img src={cart.image} alt="not found" />
                    </span>
                    <span className="cart_product_name">{cart.name}</span>
                  </div>
                  <div className="cart_product_price">{cart.price}</div>
                  <div className="incr_decr_btn">
                    <span
                      className="inc"
                      onClick={() => {
                        dispatch({
                          type: "INC",
                          id: cart.id,
                          cart: cart,
                        });
                      }}
                    >
                      <i class="fas fa-plus"></i>
                    </span>
                    <span className="product_qty">{cart.qty}</span>
                    <span
                      className="dec"
                      onClick={() => {
                        dispatch({
                          type: "DEC",
                          id: cart.id,
                          cart: cart,
                        });
                      }}
                    >
                      <i class="fas fa-minus"></i>
                    </span>
                  </div>
                  <div className="product_total_price">
                    ₹ {cart.price * cart.qty}.00
                  </div>
                  <div
                    className="product_del_btn"
                    onClick={() => {
                      dispatch({
                        type: "DELETE",
                        id: cart.id,
                        cart: cart,
                      });
                    }}
                  >
                    <i class="fas fa-trash"></i>
                  </div>
                </div>
              ))
            : "sorry your cart is current empty"}
        </div>
        {shopingCart.length > 0 ? (
          <div className="cart_summary">
            <div className="summary">
              <h3 className="summ_head">Cart Summary</h3>
              <div className="total_item">
                <div className="items">Total Items</div>
                <div className="items_count">{qty}</div>
              </div>
              <div className="total_price_section">
                <div className="price_title">Total Price</div>
                <div className="price_total"> ₹ {totalprice}.00</div>
              </div>
              <div className="stripe_section">
                <StripeCheckout
                  stripeKey="pk_test_51IJvmPHg6hIUitLYK1CQAVdIR4pgRSr9hfTt9yErldC6z7kk9xg7E4E5EVxHqHdUUIzAdLn4EBtWLh7nM8P37Xco00WtNy83HS"
                  token={handleToken}
                  billingAddress
                  shippingAddress
                  amount={totalprice * 100}
                  name="Payment Mode"
                />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Cart;
