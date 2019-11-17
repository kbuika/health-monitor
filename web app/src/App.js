import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "../src/components/pages/LoginPage";
import HomePage from "../src/components/pages/HomePage";
import RecordsPage from './components/pages/RecordsPage';
import patientRecordsPage from "../src/components/pages/patientRecordsPage";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/Login" component={LoginPage}/>
        <Route path="/home" component={HomePage}/>
        <Route path="/records" component={RecordsPage}/>
        <Route path="/your-vitals" component={patientRecordsPage} />
      </Switch>
    </Router>
  );
}

export default App;
