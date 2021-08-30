import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INasaAsset } from "types";

interface INasaState {
  images: INasaAsset[],
}

export const nasaSlice = createSlice({
  name: "nasa",
  initialState: {
    images: [],
  } as INasaState,
  reducers: {
    updateImages: (state, action: PayloadAction<INasaAsset[]>) => {
      state.images = action.payload;
    },
  }
})

export const { updateImages } = nasaSlice.actions;
export const nasaReducer = nasaSlice.reducer;