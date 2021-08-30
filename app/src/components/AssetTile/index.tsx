import { IconButton, ImageListItem, ImageListItemBar } from "@material-ui/core";
import InfoIcon from '@material-ui/icons/Info';
import { config } from "config";
import React from "react";
import { useHistory } from "react-router-dom";
import { ImageProps, INasaAsset, NasaRel } from "../../types";

export interface IAssetTileProps {
  imageProps?: ImageProps,
  nasaImageId: string,
}


export const AssetTile = (nasaAsset: INasaAsset) => {
  const previewImage = nasaAsset.links?.find(l => l.rel === NasaRel.PREVIEW)?.href ?? config.defaultPreviewImage;
  const { title = "", nasa_id: nasaImageId } = nasaAsset.data?.[0];

  const history = useHistory();
  const onClickHandler = () => {
    history.push(`/asset/${nasaImageId}`);
  }

  return (
    <ImageListItem >
      <img src={previewImage} alt={title} />
      <ImageListItemBar
        title={title}
        actionIcon={
          <IconButton aria-label={`info about ${title}`} onClick={onClickHandler} onMouseDown={e => e.preventDefault()}>
            <InfoIcon style={{ color: "white" }} />
          </IconButton>
        }
      />
    </ImageListItem>
  )
}