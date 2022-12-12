import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsloading } from './isloading.slice';
import getConfig from '../../utils/getConfig';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const purchasesSlice = createSlice({
		name: 'purchases',
    initialState:[],
    reducers: {
        
setpurchases: (state,action)=>{
const purchases = action.payload;
return purchases;
}

    }

})

export const getPurchasesthunk = () => (dispatch) => {
    dispatch(setIsloading(true));
  
   return axios
      .get('https://e-commerce-api.academlo.tech/api/v1/purchases', getConfig())
      .then((res) => dispatch(setpurchases(res.data.data.purchases)))
      .finally(() => dispatch(setIsloading(false)))
  };
export const { setpurchases } = purchasesSlice.actions;

export default purchasesSlice.reducer;