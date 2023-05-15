import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

const contactReducer = createSlice({
  name: "contacts",
  initialState:{
    data:[]
  },
  reducers: {
    //here we will write our reducer
    //Adding todos
    addContact: (state, action) => {

      let obj = action.payload;
      state.data.push(obj);
      return state;
    },
    //remove todos
    removeContact: (state, action) => {
      const contactId =action.payload;
      state.data= state.data.filter((item)=>item.id !== contactId);
    },
    //update todos
    updateContact: (state, action) => {
      console.log(action);
      state.data.splice(action.payload.index, 1, action.payload.data);
      return state;
    },
    
},
});

export const {
  addContact,
  removeContact,
  updateContact,
} = contactReducer.actions;
export default contactReducer.reducer;