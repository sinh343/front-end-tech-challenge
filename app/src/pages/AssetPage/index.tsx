import React from "react";
import { ImageAsset } from "components/ImageAsset";
import { useEffect } from "react";
import { useState } from "react";
import { IAssetUrlParams, NasaSearchMediaType } from "types";
import { Loading } from "components/Loading";
import { nasaService } from "services/nasaService";
import { useParams } from "react-router-dom";

const AudioAsset = () => <div> audio asset not implemented</div>;

const VideoAsset = () => <div> video asset not implemented</div>;

const InvalidAsset = () => <div>invalid asset media type detected, please try another asset.</div>;

export const AssetPage = () => {
  const [assetMediaType, setAssetMediaType] = useState<NasaSearchMediaType>();
  const [isBadResponse, setIsBadResponse] = useState(false);
  const { id } = useParams<IAssetUrlParams>();

  useEffect(() => {
    (async () => {
      const mediaType = await nasaService.getAssetMediaType(id);
      console.log(mediaType);
      if (!mediaType) setIsBadResponse(true);
      setAssetMediaType(mediaType);
    })()

  }, [assetMediaType, isBadResponse, id])

  switch (assetMediaType) {
    case NasaSearchMediaType.IMAGE:
      return <ImageAsset />;
    case NasaSearchMediaType.AUDIO:
      return <AudioAsset />;
    case NasaSearchMediaType.VIDEO:
      return <VideoAsset />;

    default:
      return isBadResponse ? <InvalidAsset /> : <Loading />;

  }
}