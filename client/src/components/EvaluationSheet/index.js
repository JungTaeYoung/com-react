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

class EvaluationSheetIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      evaluationData: '',
      completed: 0,
      searchKeyword: '',
      proxyData: ''
    }
  }
  
  componentDidMount() {
    this.callApi()
    .then(res => this.setState({proxyData:res}))
    //this.setState({ proxyData:deptData })
  }
  callApi = async () => {
    let dept = await fetch('/api/dept')
    let deptData = await dept.json()
    return deptData
  }

  render() {
    const loop = (data) => {
      return data.map((c)=>{
        return <div><Typography variant="h6" color="inherit">{c.id}</Typography><Typography variant="h6" color="inherit">{c.name}</Typography></div>
      })
    }
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
            {
              this.state.proxyData ?
              loop(this.state.proxyData):
              "sdd"
            }
            정태영사원의 평가지
              </Typography>
              <Typography
            gutterBottom
            className={classes.pageComment}
          >
            설문지 작성에 동의하고 참여해 주셔서 감사합니다.<br/>귀하의 응답은 모두 기밀로 처리되고 모든 질문은 선택사항입니다.<br/>아래 좌측의 항목들에 대해 '매우 불만족 ~ 매우 만족' 중 적당한 사항에 체크해 주세요.
              </Typography>
          <Table>
            <EvaTable/>
          </Table>
        </Paper>
      </main>
    )
  }
}

export default withStyles(styles)(EvaluationSheetIndex);
