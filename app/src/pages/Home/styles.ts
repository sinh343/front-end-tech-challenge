import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { CSSProperties } from "@material-ui/core/styles/withStyles";

const styles = (t: Theme) => ({
  imageGridItem: {
    overflow: "hidden",
  } as CSSProperties,
})

export const useStyles = makeStyles(t => createStyles(styles(t)));
