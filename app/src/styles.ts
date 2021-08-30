import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { colors } from "globalCssVariables/colors";
const styles = (t: Theme) => ({
  container: {
    backgroundColor: colors.nasaGray,
    minHeight: "100vh",
    color: colors.white
  } as CSSProperties
})

export const useStyles = makeStyles(t => createStyles(styles(t)));
