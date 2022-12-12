import { useEffect } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { carsthunk, checkoutCartsThunk } from "../store/slice/cart.slice";

const CarSideBar = ({ show, handleClose }) => {
  const cartProduct = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(carsthunk());
  }, []);

  console.log(cartProduct);
  return (
    <div>
      
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
          <h1>Shopping cart</h1>
            {cartProduct.map((cartsproduct) => (
              <ul key={cartsproduct.id}>
                <li className=" colorw">{cartsproduct.brand}</li>
                <li className=" colorw">{cartsproduct.title}</li>
                <li  className="quantity colorw"> {cartsproduct.productsInCart?.quantity}</li>
              </ul>
            ))}
            <Button onClick={() => dispatch(checkoutCartsThunk())} >Checkout</Button>
          </Offcanvas.Title>
        </Offcanvas.Header>
      </Offcanvas>
    </div>
  );
};

export default CarSideBar;
