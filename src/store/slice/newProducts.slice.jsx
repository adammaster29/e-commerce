import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsloading } from "./isloading.slice";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const newProductsSlice = createSlice({
  name: "newProducts",
  initialState: [],
  reducers: {
    newProducts: (state, action) => {
      const product = action.payload;
      return product;
    },
  },
});

export const getProductsthunk = () => (dispatch) => {
  dispatch(setIsloading(true));

  axios
    .get("https://e-commerce-api.academlo.tech/api/v1/products")
    .then((res) => dispatch(newProducts(res.data.data.products)))
    .finally(() => dispatch(setIsloading(false)));
};

export const filterProductsthunk = (id) => (dispatch) => {
  dispatch(setIsloading(true));

  return axios
    .get(`https://e-commerce-api.academlo.tech/api/v1/products/?category=${id}`)
    .then((res) => dispatch(newProducts(res.data.data.products)))
    .finally(() => dispatch(setIsloading(false)));
};

export const filterQueryThunk = (inputQuery) => (dispatch) => {
  dispatch(setIsloading(true));
  return axios.get(`https://e-commerce-api.academlo.tech/api/v1/products/?query=${inputQuery}`)
      .then((res) => dispatch(newProducts( res.data.data.products )))
      .finally(() => dispatch(setIsloading(false)));
}


export const { newProducts } = newProductsSlice.actions;

export default newProductsSlice.reducer;
