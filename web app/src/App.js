import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "../src/components/pages/LoginPage";
import HomePage from "../src/components/pages/HomePage";
import RecordsPage from './components/pages/RecordsPage';
import patientRecordsPage from "../src/components/pages/patientRecordsPage";
import TemperatureGraph from "../src/components/graphs/temperatureGraph";
import BloodPressureGraph from "../src/components/graphs/bloodPressureGraph";
import PulseGraph from "../src/components/graphs/pulseGraph";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/Login" component={LoginPage}/>
        <Route path="/home" component={HomePage}/>
        <Route path="/records" component={RecordsPage}/>
        <Route path="/your-vitals" component={patientRecordsPage} />
        <Route path="/temperatureGraph" component={TemperatureGraph} />
        <Route path="/bloodpressureGraph" component={BloodPressureGraph} />
        <Route path="/pulseGraph" component={PulseGraph} />

      </Switch>
    </Router>
  );
}

export default App;
