import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCall from "@material-ui/core/TableCell";
import ChoiceList from "./cList";

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

class ChoiceTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choiceUser: [
        {
          idx: 1,
          uname: "정태영",
          rank: "사원",
          dept: "스마트러닝본부",
          birthday: "19991114",
        },
        {
          idx: 1,
          uname: "정태영",
          rank: "사원",
          dept: "스마트러닝운영",
          birthday: "19991114",
        },
        {
          idx: 1,
          uname: "정태영",
          rank: "사원",
          dept: "스마트러닝개발",
          birthday: "19991114",
        },
        {
          idx: 1,
          uname: "정태영",
          rank: "사원",
          dept: "스마트러닝개발",
          birthday: "19991114",
        },
        {
          idx: 1,
          uname: "정태영",
          rank: "사원",
          dept: "스마트러닝",
          birthday: "19991114",
        },
        {
          idx: 1,
          uname: "정태영",
          rank: "사원",
          dept: "스마트러닝본부",
          birthday: "19991114",
        },
        {
          idx: 1,
          uname: "정태영",
          rank: "사원",
          dept: "스마트러닝본부",
          birthday: "19991114",
        },
        {
          idx: 2,
          uname: "정치영",
          rank: "사원",
          dept: "스마트러닝본부",
          birthday: "19970529",
        },
      ],
    };
  }

  render() {
    const cellList = ["no", "이름", "직급", "생년월일", "평가권유"];
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
              <ChoiceList
                idx={c.idx}
                uname={c.uname}
                rank={c.rank}
                birthday={c.birthday}
              />
            );
          })}
        </TableBody>
      </Table>
    );
  }
}

export default withStyles(styles)(ChoiceTable);
