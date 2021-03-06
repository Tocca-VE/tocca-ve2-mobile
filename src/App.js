import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
/*import BootstrapSlider from 'react-bootstrap-slider';*/
import { LinkContainer } from "react-router-bootstrap";
/*import Image from './assets/image.png';
import Image from './assets/image.svg';*/

import Welcome from "./Welcome/Welcome";
import Sidebar from "./Sidebar/Sidebar";
import Lobby from "./Lobby/Lobby";
import "./App.css";
import Layout from "./Layout";


const App = () => (
  <BrowserRouter>
 
     
        <Layout>
          <Switch>
            <Route path="/lobby">
              <Lobby />
            </Route>
            <Route path="/sidebar">
              <Sidebar />
            </Route>
            <Route path="/">
              <Welcome />
            </Route>
          </Switch>
        </Layout>
        
        {/* <h2>
          Navigate to{' '}
          <ButtonToolbar className="custom-btn-toolbar">
            <LinkContainer to="/welcome">
              <Button>welcome</Button>
            </LinkContainer>
            <LinkContainer to="/sidebar">
              <Button>sidebar</Button>
            </LinkContainer>
            <LinkContainer to="/lobby">
              <Button>lobby</Button>
            </LinkContainer>
          </ButtonToolbar>
        </h2> */}
     
        
  </BrowserRouter>
);

export default App;
