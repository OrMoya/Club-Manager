import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Counter } from "./components/Counter";

<<<<<<< HEAD
import './custom.css'
import { MemberTable } from './components/MemberTable';
=======
import "./custom.css";
import { MemberTable } from "./components/MemberTable";
>>>>>>> f0bbaf4c4a1f9ad61693caf9efbfd39ae65e09a9

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
<<<<<<< HEAD
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/members' component={MemberTable} />
=======
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/members" component={MemberTable} />
>>>>>>> f0bbaf4c4a1f9ad61693caf9efbfd39ae65e09a9
      </Layout>
    );
  }
}
