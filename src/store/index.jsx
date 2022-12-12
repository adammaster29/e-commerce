import { configureStore } from '@reduxjs/toolkit'
import  cartsSlice  from './slice/cart.slice'
import isloadingSlice from './slice/isloading.slice'
import  newProductsSlice  from './slice/newProducts.slice'
import purchasesSlice from './slice/purchases.slice'

export default configureStore({
  reducer: {
    newProducts:newProductsSlice,
isloading:isloadingSlice,
purchases: purchasesSlice,
carts: cartsSlice
	}
})