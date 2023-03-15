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
      state.data.push(action.payload);
      return state;
    },
    //remove todos
    removeContact: (state, action) => {
      const contactId =action.payload;
      state.data= state.data.filter((item)=>item.id !== contactId);
    },
    //update todos
    updateContact: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    //completed
    // completeTodos: (state, action) => {
    //   return state.map((todo) => {
    //     if (todo.id === action.payload) {
    //       return {
    //         ...todo,
    //         completed: true,
    //       };
    //     }
    //     return todo;
    //   });
    // },
},
});

export const {
  addContact,
  removeContact,
  updateContact,
} = contactReducer.actions;
export default contactReducer.reducer;