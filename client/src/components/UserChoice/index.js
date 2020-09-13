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
import ChocieTable from './cTable'
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

class UserChoiceIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
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
            평가 권유
              </Typography>
          <Typography
            gutterBottom
            className={classes.pageComment}
          >
            올해 커뮤니케이션을 가장 많이한 4명을 선택해주세요.
              </Typography>
          <Table>
            <ChocieTable/>
          </Table>
        </Paper>
      </main>
    )
  }
}

export default withStyles(styles)(UserChoiceIndex);
