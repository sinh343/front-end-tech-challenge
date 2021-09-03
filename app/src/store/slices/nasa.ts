import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INasaAsset } from "types";

interface INasaState {
  images: INasaAsset[],
  favourites: string[]
}

export const nasaSlice = createSlice({
  name: "nasa",
  initialState: {
    images: [],
    favourites: [],
  } as INasaState,
  reducers: {
    updateImages: (state, action: PayloadAction<INasaAsset[]>) => {
      state.images = action.payload;
    },
    addToFavourites: (state, action: PayloadAction<string>) => {
      const { favourites } = state;
      const isInFavourites = !!favourites.find((item) => item === action.payload);

      if (isInFavourites) return;

      favourites.push(action.payload);
    },
  }
})

export const { updateImages, addToFavourites } = nasaSlice.actions;
export const nasaReducer = nasaSlice.reducer;