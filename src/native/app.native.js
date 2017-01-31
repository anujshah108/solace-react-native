import React from "react";
import {Scene, Router} from "react-native-router-flux";
import Login from './screens/Login.native';
import Signup from './screens/Signup.native';
import Homepage from './screens/Homepage.native';
import Charts from './screens/Charts.native';
import Avg from './screens/AverageChart.native'
import { Provider } from 'react-redux';
import store from './store.native';

export default class App extends React.Component {
  render () {
    return (
      <Provider store={ store }>
        <Router>
          <Scene key="root">
            <Scene key="entryPoint" component={Login} hideNavBar/>
            <Scene key="signup" component={Signup} title="Signup"/>
            <Scene key="homepage" component={Homepage} title="Homepage"/>
            <Scene key="charts" component={Avg} hideNavBar title="Charts" initial/>
          </Scene>
        </Router>
      </Provider>
    );
  }
}
