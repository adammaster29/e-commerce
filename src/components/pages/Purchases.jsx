import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPurchasesthunk } from "../../store/slice/purchases.slice";

const Purchases = () => {
  const dispatch = useDispatch();
  const purchases = useSelector((state) => state.purchases);

  useEffect(() => {
    dispatch(getPurchasesthunk());
  }, []);

  return (
    <div>
      <h1>My purchases</h1>

      {purchases.map((purchase) => (
        <ul className="container--purchases" key={purchase.id}>
          {purchase.cart?.products.map((product) => (
            <div key={product.id}>
              <div className="nameDate"> <b>{product.createdAt}</b> </div>
              <Link to={`/Products/${product.id}`} >
              <div className="container--title--price">
                 <li className="title--purchases-produtc">{product.title} </li>
                <div className="price--quantity">
                  <li className="quantity">
                    {product.productsInCart?.quantity}
                  </li>
                  <li>{product.price}</li>
                </div>
              </div>
              </Link>
            </div>
                 
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Purchases;
