import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCall from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import TouchAppIcon from "@material-ui/icons/TouchApp";
const styles = (theme) => ({
  tableHead: {
    fontSize: "1.0rem",
  },
  TableCall: {
    [theme.breakpoints.down(600 + theme.spacing(3) * 2)]: {
      padding: 0,
    },
  },
});

class EvaList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props
    return (
      <TableRow>
        <TableCall className={classes.TableCall}>{this.props.idx}</TableCall>
        <TableCall className={classes.TableCall}>{this.props.uname}</TableCall>
        <TableCall className={classes.TableCall}>{this.props.dept}</TableCall>
        <TableCall className={classes.TableCall}>{this.props.birthday}</TableCall>
        <TableCall className={classes.TableCall}>
          <Button>
            <TouchAppIcon />
          </Button>
        </TableCall>
      </TableRow>
    );
  }
}

export default withStyles(styles)(EvaList);
