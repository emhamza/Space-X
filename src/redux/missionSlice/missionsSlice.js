import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://api.spacexdata.com/v3/missions";

export const getMissions = createAsyncThunk(
  "missions/getMissionsFromAPI",
  async () => {
    const res = await axios.get(API_URL);
    return res.data;
  }
);

const initialState = {
  missions: [],
  Loading: false,
  error: null,
};

export const missionsSlice = createSlice({
  name: "mission",
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const newState = state.missions.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, joined: true };
        }
        return mission;
      });
      state.missions = newState;
    },
    cancelMission: (state, action) => {
      const newState = state.missions.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, joined: false };
        }
        return mission;
      });
      state.missions = newState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMissions.fulfilled, (state, action) => {
      state.Loading = false;
      state.error = null;
      state.missions = action.payload;
    });
    builder.addCase(getMissions.rejected, (state, action) => {
      state.Loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getMissions.pending, (state) => {
      state.Loading = true;
      state.error = null;
    });
  },
});

export const { joinMission, cancelMission } = missionsSlice.actions;
export const showMission = (state) => state.mission.missions;
export default missionsSlice.reducer;
