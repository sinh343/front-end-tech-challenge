import { ImageList } from "@material-ui/core";
import React from "react";
import { useAppSelector } from "store/hooks";
import { AssetTile } from "../../components/AssetTile";
import { SearchSection } from "../../components/SearchSection";


export const Home = () => {
  const nasaImagesData = useAppSelector(s => s.nasa.images);

  return (
    <div>
      <SearchSection />
      <ImageList rowHeight={200}>
        {nasaImagesData.map((props) => <AssetTile {...props} key={props.href} />)}
      </ImageList>
    </div>
  )
}