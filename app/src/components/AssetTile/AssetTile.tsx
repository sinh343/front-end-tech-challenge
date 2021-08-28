import React from "react";
import { useHistory } from "react-router-dom";
import { ImageProps } from "../../types";

export interface IAssetTileProps {
  imageProps?: ImageProps,
  nasaImageId: string,
}

export const AssetTile = ({ imageProps, nasaImageId }: IAssetTileProps): JSX.Element => {
  const history = useHistory();
  const onClickHandler = () => {
    history.push(`/asset/${nasaImageId}`);
  }
  return (
    <img onClick={onClickHandler} {...imageProps}></img>
  )
}