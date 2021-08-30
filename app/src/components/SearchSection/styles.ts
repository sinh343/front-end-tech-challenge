import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { colors } from "globalCssVariables/colors";

const styles = (t: Theme) => ({
  title: {
    textAlign: "center",
    marginBottom: "16px",
    marginTop: "96px",
  } as CSSProperties,
  input: {
    marginBottom: "16px",
  },
  checkBoxGroup: {
    marginBottom: "32px"
  }
})

export const useStyles = makeStyles(t => createStyles(styles(t)));
