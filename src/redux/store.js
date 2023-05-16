import { configureStore } from "@reduxjs/toolkit";
import rocketReducer from "./RocketSlice/rocketsSlice";
import missionReducer from "./missionSlice/missionsSlice";


const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    mission: missionReducer,
  },
});

export default store;
