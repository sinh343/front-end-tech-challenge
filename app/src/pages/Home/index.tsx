import { config } from "config";
import React from "react";
import { useAppSelector } from "store/hooks";
import { ImageProps, INasaAsset, NasaRel } from "types";
import { AssetTile } from "../../components/AssetTile";
import { SearchSection } from "../../components/SearchSection";

const createAssetTile = (nasaAsset: INasaAsset, i: number) => {
  const previewImage = nasaAsset.links?.find(l => l.rel === NasaRel.PREVIEW)?.href ?? config.defaultPreviewImage;
  const imageProps: ImageProps = {
    src: previewImage,
  }
  return <AssetTile key={i} imageProps={imageProps} nasaImageId={nasaAsset.data[0].nasa_id} />
}

export const Home = () => {

  const nasaImagesData = useAppSelector(s => s.nasa.images);
  return (
    <div>
      <SearchSection />
      <div>
        {nasaImagesData.map(createAssetTile)}
      </div>
    </div>
  )
}