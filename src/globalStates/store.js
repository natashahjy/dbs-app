import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userState";

export default configureStore({
  reducer: {
    userState: userReducer
  }
});