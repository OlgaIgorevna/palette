import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Palette from "./containers/Palette/Palette";
import Form from "./containers/Form/Form"

function App() {
  return (
    <div className="App">
        <Router>
            <Menu/>
            <Switch>

                <Route path="/" exact={true}>
                    <Form/>
                </Route>
                <Route path="/palette" exact={true}>
                    <Palette/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
