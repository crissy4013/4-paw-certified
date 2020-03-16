import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { connect } from "react-redux";

import Home from "./containers/Home";
import Setting from "./containers/Setting";

import MainLayout from "./layouts/MainLayout";
import EmptyLayout from "./layouts/EmptyLayout";
import BottomNav from "./components/BottomNav/BottomNav";
import Bonding from "./containers/Bonding"
import Food from "./components/Food"
import Feeding from "./containers/Feeding"
import Exercise from "./containers/Exercise"

const NotFound = () => {
  return <div>Time to play</div>;
};

const DashboardRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <MainLayout>
          <Component {...matchProps} />
        </MainLayout>
      )}
    />
  );
};

const EmptyRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <EmptyLayout>
          <Component {...matchProps} />
        </EmptyLayout>
      )}
    />
  );
};

class App extends Component {
  render() {
    const { settings } = this.props;

    return (
      <MuiThemeProvider theme={settings.theme}>
        <CssBaseline />
        <div style={{ height: "100vh" }}>
          <Router>
            <Switch>
              <DashboardRoute exact path="/" component={Home} />
              <DashboardRoute exact path="/task/feeding" component={Feeding} />
              <DashboardRoute exact path="/task/exercise" component={Exercise} />
              <DashboardRoute exact path="/task/bonding" component={Bonding} />
              <DashboardRoute exact path="/task/kennel" component={Feeding} />
              <DashboardRoute path="/dashboard" component={Home} />
              <DashboardRoute path="/setting" component={Setting} />
              
              <EmptyRoute component={NotFound} />
            </Switch>
          </Router>
          {/* <Play/>
          <Food/> */}
          <BottomNav/>

        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    settings: state.settings,
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
