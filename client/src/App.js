import 'typeface-roboto';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AppShell from './components/AppShell'
import HomeIndex from './components/Home'
import UserChoiceIndex from './components/UserChoice'
import EvaluationIndex from './components/Evaluation'
import EvaluationSheetIndex from './components/EvaluationSheet'

class App extends React.Component {
  render() {
    return (
      <Router>
        <AppShell>
          <Switch>
            <Route exact path="/" component={HomeIndex} />
            <Route exact path="/userchoice" component={UserChoiceIndex} />
            <Route exact path="/evaluation" component={EvaluationIndex} />
            <Route exact path="/evaluation/:evaluationPk" component={EvaluationSheetIndex} />
          </Switch>
        </AppShell>
      </Router>
    )
  }
}

export default App;
