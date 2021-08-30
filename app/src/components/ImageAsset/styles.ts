import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { CSSProperties } from "@material-ui/core/styles/withStyles";

const styles = (t: Theme) => ({
  img: {
    width: "100%",
    maxWidth: "800px",
    maxHeight: `600px`,
  } as CSSProperties
})

export const useStyles = makeStyles(t => createStyles(styles(t)));
