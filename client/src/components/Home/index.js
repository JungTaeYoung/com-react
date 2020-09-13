import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theem => ({

})


class HomeIndex extends React.Component {
  render() {
    return (
        <div>
            <Typography variant="h6">              
              안녕하세요, <br/>투표 시스템 홈 화면입니다.
            </Typography>
        </div>
    )
  }
}

export default withStyles(styles)(HomeIndex);
