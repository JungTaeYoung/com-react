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
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
const styles = (theme) => ({
  tableHead: {
    fontSize: "1.0rem",
  },
  tableCall: {
    padding: 0,
  },
});

class EvaList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, idx, handleChange, selectedValue } = this.props;
    return (
      <TableRow>
        <TableCall className={classes.tableCall} padding="0" width="40%">
          {this.props.text}
        </TableCall>
        <TableCall className={classes.tableCall} padding="0" width="12%">
          <Radio
            checked={selectedValue === 1}
            onChange={handleChange}
            name={"radio" + idx}
            value="1"
          />
        </TableCall>
        <TableCall className={classes.tableCall} padding="0" width="12%">
        <Radio
            checked={selectedValue === 2}
            onChange={handleChange}
            name={"radio" + idx}
            value="2"
          />
        </TableCall>
        <TableCall className={classes.tableCall} padding="0" width="12%">
        <Radio
            checked={selectedValue === 3}
            onChange={handleChange}
            name={"radio" + idx}
            value="3"
          />
        </TableCall>
        <TableCall className={classes.tableCall} padding="0" width="12%">
        <Radio
            checked={selectedValue === 4}
            onChange={handleChange}
            name={"radio" + idx}
            value="4"
          />
        </TableCall>
        <TableCall className={classes.tableCall} padding="0" width="12%">
        <Radio
            checked={selectedValue === 5}
            onChange={handleChange}
            name={"radio" + idx}
            value="5"
          />
        </TableCall>
      </TableRow>
    );
  }
}

export default withStyles(styles)(EvaList);
