import React from "react";
import { ImageProps } from "../../types";

export interface IAssetTileProps {
  imageProps?: ImageProps,
  nasaImageId: string,
}

export const AssetTile = ({ imageProps, nasaImageId }: IAssetTileProps): JSX.Element => {

  const onClickHandler = () => {
    window.location.pathname = `/asset/${nasaImageId}`
  }
  return (
    <img onClick={onClickHandler} {...imageProps}></img>
  )
}