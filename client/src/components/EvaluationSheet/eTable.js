import React from "react";
import update from 'react-addons-update'
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
      padding: 0,
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
          text: "전반적인 업무 처리",
          selectedValue: 0,
        },
        {
          idx: 2,
          text: "사무실 / 업무환경",
          selectedValue: 0,
        },
        {
          idx: 3,
          text: "역할 및 직책의 명확성",
          selectedValue: 0,
        },
        {
          idx: 4,
          text: "성과에 대한 피드백",
          selectedValue: 0,
        },
        {
          idx: 5,
          text: "개인의 차이인정",
          selectedValue: 0,
        },
      ],
    };
  }
  
  handleChange = (e) => {
    let evaluationNum = Number(e.target.name.split("radio")[1]);
    let evaluationValue = Number(e.target.value);
    this.setState({
      ecaluationList: this.state.ecaluationList.map((c) => {
          return evaluationNum == c.idx ? 
          {...c, selectedValue:evaluationValue} : c
        })
    });
  };
  render() {
    const cellList = ["구분", "1점", "2점", "3점", "4점", "5점"];
    const { classes } = this.props;
    return (
      <Table>
        <CssBaseline />
        <TableHead className={classes.tableHead}>
          <TableRow>
            {cellList.map((c, index) => {
              return (
                <TableCall
                  className={classes.TableCall}
                  width={index == 0 ? "40%" : "12%"}
                >
                  {c}
                </TableCall>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.ecaluationList.map((c) => {
            return (
              <EvaList
                idx={c.idx}
                text={c.text}
                handleChange={this.handleChange}
                selectedValue={c.selectedValue}
              />
            );
          })}
        </TableBody>
      </Table>
    );
  }
}

export default withStyles(styles)(EvlTable);
