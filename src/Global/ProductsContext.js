import { createContext, useState } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";

export const ProductsContext = createContext();

const ProductContextProvider = (props) => {
  const [products] = useState([
    { id: 1, name: "Earphone", price: 300, image: img1, status: "hot" },
    { id: 2, name: "Watch", price: 400, image: img2, status: "new" },
    { id: 3, name: "Computer", price: 600, image: img3, status: "hot" },
    { id: 4, name: "Camera Sony", price: 300, image: img4, status: "new" },
    { id: 5, name: "Camera Kotak", price: 800, image: img5, status: "hot" },
    { id: 6, name: "Camera Dlsr", price: 200, image: img6, status: "new" },
    { id: 7, name: "Roboat", price: 700, image: img7, status: "hot" },
    { id: 8, name: "Laptop", price: 500, image: img8, status: "new" },
  ]);
  return (
    <ProductsContext.Provider value={{ products: [...products] }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductContextProvider;
