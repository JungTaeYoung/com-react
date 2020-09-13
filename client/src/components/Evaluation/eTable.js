import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCall from "@material-ui/core/TableCell";
import EvaList from "./eList";

const styles = (theme) => ({
  tableHead: {
    fontSize: "1.0rem",
  },
  TableCall: {
    [theme.breakpoints.down(600 + theme.spacing(3) * 2)]: {
      padding:0,
    },
  },
});

class EvlTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ecaluationList: [
        {
          idx: 1,
          uname: "정태영",
          dept: "사원",
          birthday: "19991114",
        },
        {
          idx: 1,
          uname: "정태영",
          dept: "사원",
          birthday: "19991114",
        },
        {
          idx: 1,
          uname: "정태영",
          dept: "사원",
          birthday: "19991114",
        },
        {
          idx: 1,
          uname: "정태영",
          dept: "사원",
          birthday: "19991114",
        },
        {
          idx: 1,
          uname: "정태영",
          dept: "사원",
          birthday: "19991114",
        },
        {
          idx: 1,
          uname: "정태영",
          dept: "사원",
          birthday: "19991114",
        },
        {
          idx: 1,
          uname: "정태영",
          dept: "사원",
          birthday: "19991114",
        },
        {
          idx: 2,
          uname: "정치영",
          dept: "사원",
          birthday: "19970529",
        },
      ],
    };
  }

  render() {
    const cellList = ["no", "이름", "직급", "생년월일", "평가하기"];
    const { classes } = this.props;
    return (
      <Table>
        <CssBaseline />
        <TableHead className={classes.tableHead}>
          <TableRow>
            {cellList.map((c) => {
              return <TableCall className={classes.TableCall}>{c}</TableCall>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.ecaluationList.map((c) => {
            return (
              <EvaList
                idx={c.idx}
                uname={c.uname}
                dept={c.dept}
                birthday={c.birthday}
              />
            );
          })}
        </TableBody>
      </Table>
    );
  }
}

export default withStyles(styles)(EvlTable);
