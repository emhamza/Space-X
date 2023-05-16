import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchRockets = createAsyncThunk('get/rockets', async () => {
    const rockets = await axios.get('https://api.spacexdata.com/v3/rockets');

    return rockets.data;
});

const initialState = {
    rockets: [],
    isLoading: true,
    error: undefined,
}

const rocketSlice = createSlice({
    name: 'rocket',
    initialState,
    // reducers: {},
    
    extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => {
        state.isLoading = true;
    });
    builder.addCase(fetchRockets.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const filterdRockets = [];
        payload.map((info) => filterdRockets.push({
            id: info.rockets_id,
            rocket_name: info.rocket_name,
            description: info.description,
            flickr_images: info.flickr_images[0]
      }));
      state.rockets = filterdRockets;
      });
    builder.addCase(fetchRockets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    });
    },
});

export default rocketSlice.reducer;