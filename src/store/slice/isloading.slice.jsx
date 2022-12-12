import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const isloadingSlice = createSlice({
		name: 'isloading',
    initialState:false,
    reducers: {
        
setIsloading: (state,action)=>{
const isloading = action.payload;
return isloading;
}

    }
})

export const { setIsloading } = isloadingSlice.actions;

export default isloadingSlice.reducer;