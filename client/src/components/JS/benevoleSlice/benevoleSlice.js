// 

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit' 
import axios from 'axios'

// function add benevole
export const addBenevole = createAsyncThunk("benevole/add", async (benevole) => {
    try {
        let response = await axios.post(
            "http://localhost:5000/benevole/add", benevole)
        return await response
    } catch (error) {
        console.log(error)
    }
}
)




const initialState = {
    user:null,
    status:null,
   }


   export const benevoleSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      
    },
    extraReducers:{
        // [userRegister.pending]: (state) => {
        //     state.status = 'loading'
            
        // },
    
        // [userRegister.fulfilled]: (state, action) => {
        //     state.status = 'Success'
           
        //     //  state.user heya  user: null, 
             
        //     state.user = action.payload.data?.newUserToken;
        //     localStorage.setItem("token", action.payload.data?.token)
            
    
        // },
        // [userRegister.rejected]: (state) => {
        //     state.status = 'failed'
    
    
        // },
    
    
    
      },
    })
    
    // Action creators are generated for each case reducer function
    // export const { logout } = userSlice.actions
    
    export default benevoleSlice.reducer
