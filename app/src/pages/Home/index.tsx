import { ImageList } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { AssetTile } from "components/AssetTile";
import { SearchSection } from "components/SearchSection";
import React from "react";
import { useAppSelector } from "store/hooks";
import { useStyles } from "./styles";

export const Home = () => {
  const nasaImagesData = useAppSelector(s => s.nasa.images);
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.up('sm'));
  const matchesMd = useMediaQuery(theme.breakpoints.up('md'));
  const classes = useStyles();

  const getCols = (): number => {
    if (matchesMd) return 4
    if (matchesSm) return 2
    return 1
  }

  return (
    <Grid container justifyContent="center">
      <Grid item sm={6}>
        <SearchSection />
      </Grid>

      <Grid item xs={12}>
        <ImageList rowHeight={300} gap={16} cols={getCols()}>
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