import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "../reducers/reducer";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;