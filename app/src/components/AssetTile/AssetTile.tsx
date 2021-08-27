import React from "react";
import { ImageProps, INasaImageData } from "../../types";

export interface IAssetTileProps {
    image: ImageProps,
    nasaImageData: INasaImageData,
}

export const AssetTile = ({ image, nasaImageData }: IAssetTileProps): JSX.Element => {

    const onClickHandler = () => {
        window.location.pathname = `/asset/${nasaImageData.nasa_id}`
    }

    return (
        <img onClick={onClickHandler} {...image}></img>
    )
}