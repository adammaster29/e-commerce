import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig";
import { setIsloading } from "./isloading.slice";



// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const cartsSlice = createSlice({
  name: "carts",
  initialState: [],
  reducers: {
    setcart: (state, action) => {
      const cart = action.payload;
      return cart;
    },
  },
});

export const carsthunk = () => (dispatch) => {
  dispatch(setIsloading(true));

  return axios
    .get('https:e-commerce-api.academlo.tech/api/v1/cart', getConfig())
    .then((res) => dispatch(setcart(res.data.data.cart.products)))
    .finally(() => dispatch(setIsloading(false)));
};
export const addCartsThunk = (newsProducts) => (dispatch) => {
  dispatch(setIsloading(true));
  return axios.post('https://e-commerce-api.academlo.tech/api/v1/cart', newsProducts, getConfig())
      .then(() => dispatch(carsthunk()))
      .finally(() => dispatch(setIsloading(false)));
}

export const checkoutCartsThunk = () => (dispatch) => {
  dispatch(setIsloading(true));
  return axios.post('https://e-commerce-api.academlo.tech/api/v1/purchases', {}, getConfig())
      .then(() => dispatch(setcart([])))
      .finally(() => dispatch(setIsloading(false)));
      carsthunk()
}

export const { setcart } = cartsSlice.actions;

export default cartsSlice.reducer;