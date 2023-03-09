// 

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit' 
import axios from 'axios'

// function add event
export const addEvenement = createAsyncThunk("evenement/add", async (evenement) => {
    try {
        let response = await axios.post(
            "http://localhost:5000/evenement/add", evenement)
        return await response
    } catch (error) {
        console.log(error)
    }
}
)




const initialState = {
    evenement:null,
    status:null,
   }


   export const eventSlice = createSlice({
    name: 'evenement',
    initialState,
    reducers: {
      
    },
    extraReducers:{
        [addEvenement.pending]: (state) => {
            state.status = 'loading'
            
        },
    
        [addEvenement.fulfilled]: (state, action) => {
            state.status = 'Success'
           
            
             
            state.evenement = action.payload.data?.evenement;
            
            
    
        },

        [addEvenement.rejected]: (state) => {
            state.status = 'failed'
    
    
        },
    
    
    
      },
    })
    
    // Action creators are generated for each case reducer function
    // export const { logout } = eventSlice.actions
    
    export default eventSlice.reducer
