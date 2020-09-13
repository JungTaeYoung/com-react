import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCall from '@material-ui/core/TableCell';
import EvaTable from './eTable'
const styles = theme => ({
  _main: {
    maxWidth: 1130,
    marginLeft: "auto",
    marginRight: "auto",
  },
  pageTitle: {
    fontSize: "1.8rem",
    marginTop: 2,
    textAlign: "center"
  },
  pageComment: {
    fontSize: "0.8rem",
  },
  paper: {
    marginBotton: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(1130 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(2),
      marginBotton: theme.spacing(6),
      padding: theme.spacing(3)
    }
  }
})

class EvaluationIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      evaluationData: '',
      completed: 0,
      searchKeyword: ''
    }
  }
  render() {
    const { classes } = this.props
    return (
      <main class={classes._main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.pageTitle}
          >
            평가 하기
              </Typography>
              <Typography
            gutterBottom
            className={classes.pageComment}
          >
            아래의 직원분들이<br/><b>정태영사원</b>님을 설문지 평가 선택을 하였습니다.<br/>
            귀하의 응답은 모두 기밀로 처라되오니,<br/>설문지 작성 버튼을 눌러동의하고 참여해 주셔서 감사합니다. 
              </Typography>
          <Table>
            <EvaTable/>
          </Table>
        </Paper>
      </main>
    )
  }
}

export default withStyles(styles)(EvaluationIndex);
