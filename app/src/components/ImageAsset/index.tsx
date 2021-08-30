import { Grid } from "@material-ui/core";
import { useStyles } from "./styles";
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
  const classes = useStyles();

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
    <Grid container justifyContent="center">
      <Grid container item xs={10} justifyContent="center">
        <h1>{title}</h1>
      </Grid>
      <Grid container item xs={10} justifyContent="center">
        <p>{description}</p>
      </Grid>

      <Grid item>
        <img src={imageSrc} alt={title} className={classes.img} />
      </Grid>
    </Grid >
  )
}