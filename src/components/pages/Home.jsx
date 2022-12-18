import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProductsthunk,
  filterQueryThunk,
  getProductsthunk,
} from "../../store/slice/newProducts.slice";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Button,
  InputGroup,
  Form,
  ButtonGroup,
  DropdownButton,
} from "react-bootstrap";

const Home = () => {
  const dispatch = useDispatch();
  const newProducts = useSelector((state) => state.newProducts);
  const [categoryList, setCategoryList] = useState([]);
  const [inputQuery, setInputQuery] = useState("");

  useEffect(() => {
    dispatch(getProductsthunk());

    axios
      .get("https://e-commerce-api.academlo.tech/api/v1/products/categories")
      .then((res) => setCategoryList(res.data.data.categories));
  }, []);

  return (
    <div className="container--father-allHome">
      <div className="one">
        
        <div className="category">
          <h3>category</h3>
          {categoryList.map((category) => (
            <ul key={category.id}>
              <Button
                onClick={() => dispatch(filterProductsthunk(category.id))}
              >
                {" "}
                {category.name}
              </Button>
            </ul>
          ))}
        </div>
      </div>

      <InputGroup className="mb-3 input--bootstrap " style={{ width: "600px" }}>
        <Form.Control
          placeholder="Search products"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
        />
        <Button
          style={{ height: 40 }}
          onClick={() => dispatch(filterQueryThunk(inputQuery))}
        >
          <i class="bx bx-search-alt-2"></i>
        </Button>
      </InputGroup>
      <br />

      <div className="container--product-home three">
        {newProducts.map((product) => (
          <ul className="container--product" key={product.id}>
            <div className="container--img-price">
              {" "}
              <Link className="link" to={`/Products/${product.id}`}>
                <img
                  className="img-product-home"
                  src={product.productImgs[0]}
                  alt=""
                />{" "}
              </Link>
              <Link className="link" to={`/Products/${product.id}`}>
                {" "}
                <li> {product.title}</li>{" "}
              </Link>
              <div className="price--and-cart">
                {" "}
                <li> Price: {product.price}</li>{" "}
                <button className="btn-cart-bx cart--color">
                  {" "}
                  <i className="bx bx-cart"></i>{" "}
                </button>{" "}
              </div>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Home;
