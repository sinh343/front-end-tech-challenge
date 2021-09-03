import React from "react";
import { useAppSelector } from "store/hooks";

export const Favourites = () => {
  const favouriteIds = useAppSelector(s => s.nasa.favourites);

  return (
    <div>
      favourites
      <ul>
        {favouriteIds.map(item => (<li key={item} >{item}</li>))}
      </ul>
    </div>
  )
}