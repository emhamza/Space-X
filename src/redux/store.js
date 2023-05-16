import { configureStore } from "@reduxjs/toolkit";
import rocketReducer from "./RocketSlice/rocketsSlice";


const store = configureStore({
  reducer: {
    rockets: rocketReducer,
  },

});

export default store;
