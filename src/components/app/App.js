import React, {Fragment} from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import store from '../../store'
import Navbar from '../navbar';
import MainPage from '../../pages/main-page'
import AddPage from '../../pages/add-page'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route path="/" component={MainPage} exact />
            <Route path="/add" component={AddPage} />
            <Redirect to="/" />
          </Switch>
        </Fragment>
      </Router>
    </Provider>

  );
}

export default App;
