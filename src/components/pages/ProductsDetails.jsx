import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addCartsThunk } from "../../store/slice/cart.slice";
import { getProductsthunk, newProducts } from "../../store/slice/newProducts.slice";

const ProductsDetails = () => {
  const dispatch = useDispatch();
  const [rate, setRate] = useState("");

  useEffect(() => {
    dispatch(getProductsthunk());
  }, []);
  const { id } = useParams();
  const productList = useSelector((state) => state.newProducts);
  const product = productList.find((products) => products.id === Number(id));
  const releate = productList.filter(
    (products) => products.category?.id === product.category?.id
  );

  const addToCart = () => {
    const newProducts = {
      id: product.id,
      quantity:rate,
    };
   dispatch(addCartsThunk(newProducts))
  };

 

  return (
    <div>
      <div>
        <div className="container--products-details">
          <div className="products--details">
            <img className="img-Details" src={product?.productImgs[0]} alt="" />{" "}
          </div>

          <div className="products--details"><br /><br />
            <li className="colorDetails"><b className="namePrice"> {product?.title} </b> </li>
            <br />
            <li className="colorDetails"> {product?.description}</li>
            <br />
            <li className="colorDetails"> <b className="namePrice">  Price:</b> <b className="priceDetils">$ {product?.price}</b></li>

            <div>
              <input
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className="input--add-to-cart"
                type="text"
                placeholder="add to cart"
              />
              <button onClick={addToCart} className="btn--add-to-cart">
                add to cart<i className="bx bx-cart"></i>
              </button>
            </div>
          </div>
        </div><br /><br />
        <div className="container--product-releated">
          {releate.map((product) => (
            <ul className="container--map-product" key={product.id}>
              <Link to={`/Products/${product.id}`}>
                <img
                  className="img-product"
                  src={product.productImgs[0]}
                  alt=""
                />{" "}
              </Link>

              <li> {product.title}</li>

              <div className="price--and-cart">
                {" "}
                <li> Price: {product.price}</li>{" "}
                <button className="btn-cart-bx">
                  {" "}
                  <i className="bx bx-cart"></i>{" "}
                </button>{" "}
              </div>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
