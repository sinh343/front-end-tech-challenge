import { ImageList } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { AssetTile } from "components/AssetTile";
import { SearchSection } from "components/SearchSection";
import React from "react";
import { useAppSelector } from "store/hooks";
import { useStyles } from "./styles";

export const Home = () => {
  const nasaImagesData = useAppSelector(s => s.nasa.images);
  const classes = useStyles();
  return (
    <Grid container justifyContent="center">
      <Grid item sm={6}>
        <SearchSection />
      </Grid>

      <Grid item xs={12}>
        <ImageList rowHeight={300} gap={16} cols={4}>
          {nasaImagesData.map((props) =>
            <Grid item className={classes.imageGridItem}>
              <AssetTile {...props} key={props.href} />
            </Grid>
          )}
        </ImageList>
      </Grid>
    </Grid>
  )
}