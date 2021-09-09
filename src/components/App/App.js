import React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store'
import HomePage from '../HomePage/HomePage';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ErrorComponent from '../ErrorComponent/ErrorComponent';


const App = () => {
    
  return (
    <Router>

    <Provider store={store}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/search" />
          </Route>
          <Route exact path="/search/:searchTerm?">
            <HomePage />
          </Route>
          <Route path="/" component={ErrorComponent} />
        </Switch>
    </Provider>
    </Router>

  );
}

export default App;
