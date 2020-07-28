import React, { useState, useContext, useRef, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import Home from '../pages/home/home';
import Login from '../pages/login/login'
import Tips from '../pages/tips/tips';
import Quests from '../pages/quests/quests';
import AddQuest from '../pages/quests/add/quests-add';
import AddTipPage from '../pages/tips/add/tips-add'
import EditTipPage from '../pages/tips/edit/tips-edit'


import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Administration</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/tips">Tips</Nav.Link>
            <Nav.Link href="/quests">Quests</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/tips" component={Tips} />
        <Route exact path="/quests" component={Quests} />
        <Route exact path="/quests/add" component={AddQuest} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/tips/add" component={AddTipPage} />
        <Route exact path="/tips/edit" component={EditTipPage} />

      </BrowserRouter>
    </div>
  );
}

export default App;
