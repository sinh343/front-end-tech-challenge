import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { nasaService } from "services/nasaService";
import { IAssetUrlParams } from "types";

const getFirstUseableImage = (items: any[]): string => {
  return items
    .find(img => (img.href as string).endsWith(".jpg") || (img.href as string).endsWith(".png"))
    ?.href;
}

export const ImageAsset = () => {

  const { id: nasaId } = useParams<IAssetUrlParams>();
  const [assetData, setAssetData] = useState<any>({});
  const [assetMetadata, setAssetMetaData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      const [assetDataResult, assetMetaDataResult] = await Promise.all(
        [
          await nasaService.getAsset(nasaId),
          await nasaService.getAssetMetadata(nasaId)
        ]
      );
      setAssetData(assetDataResult);
      setAssetMetaData(assetMetaDataResult);
    }
    fetchData();
  }, [nasaId]);

  const {
    "XMP:Title": title = "",
    "XMP:Description": description = ""
  } = assetMetadata;

  const imageSrc = assetData?.items ? getFirstUseableImage(assetData?.items) : undefined;

  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div>
        <img src={imageSrc} alt={title} />
      </div>
    </div>
  )
}