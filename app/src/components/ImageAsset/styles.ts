import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { CSSProperties } from "@material-ui/core/styles/withStyles";

const styles = (t: Theme) => ({
  title: {
    textAlign: "center",
    marginBottom: "24px",
    marginTop: "96px"
  } as CSSProperties,
  description: {
    marginBottom: "48px",
  } as CSSProperties,
  img: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  } as CSSProperties
})

export const useStyles = makeStyles(t => createStyles(styles(t)));
