import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Global/CartContext";

const Navbar = () => {
  const { qty } = useContext(CartContext);
  return (
    <nav>
      <div className="cstm_container">
        <div className="nav_row">
          <ul className="left">
            <li>
              <Link to="/">React Ecommerce</Link>
            </li>
          </ul>
          <ul className="right">
            <li>
              <Link to="/cart">
                <span className="shop_cart_icon">
                  <i class="fas fa-cart-arrow-down"></i>
                  <span className="cart_count">{qty}</span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
