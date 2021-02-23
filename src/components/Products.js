import { useContext } from "react";
import { ProductsContext } from "../Global/ProductsContext";
import { CartContext } from "../Global/CartContext";
import Banner from "./Banner";

const Products = () => {
  const { products } = useContext(ProductsContext);
  const { dispatch } = useContext(CartContext);
  return (
    <>
      <Banner />
      <section className="products">
        <div className="cstm_container">
          <h4 className="product_head">All Products</h4>
          <div className="Product_row">
            {products.map((product) => {
              return (
                <div className="product_col" key={products.id}>
                  <div className="product_image">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="product_detail">
                    <div className="product_name">{product.name}</div>
                    <div className="product_price">₹ {product.price}</div>
                    <button
                      className="product_btn"
                      onClick={() => {
                        dispatch({
                          type: "PRODUCT_BTN",
                          id: product.id,
                          product: product,
                        });
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                  {product.status === "hot" ? (
                    <span className="hot">hot</span>
                  ) : (
                    ""
                  )}
                  {product.status === "new" ? (
                    <span className="new">new</span>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
