import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { CSSProperties } from "@material-ui/core/styles/withStyles";

export const CssConstants = {
  imageHeight: 300
}

const styles = (t: Theme) => ({
  img: {
    width: "100%",
    maxHeight: `${CssConstants.imageHeight}px`,
    "&:hover": {
      cursor: "pointer"
    } as CSSProperties
  } as CSSProperties
})

export const useStyles = makeStyles(t => createStyles(styles(t)));
