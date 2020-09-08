import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import Home from '../pages/home/home';
import Login from '../pages/login/login'
import Tips from '../pages/tips/tips';
import Quests from '../pages/quests/quests';
import AddQuest from '../pages/quests/add/quests-add';
import EditQuest from '../pages/quests/edit/quests-edit';
import AddTipPage from '../pages/tips/add/tips-add'
import EditTipPage from '../pages/tips/edit/tips-edit'
import { logoutUser, isLogged } from '../services/login.service';
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
            {isLogged() ?
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text >Logged in</Navbar.Text>
                <Button onClick={logoutUser}>Logout</Button>
              </Navbar.Collapse>
              :
              <Navbar.Collapse class="justify-content-end">
                <Navbar.Text >Unlogged</Navbar.Text>
              </Navbar.Collapse>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <BrowserRouter>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/tips" component={Tips} />
        <Route exact path="/quests" component={Quests} />
        <Route exact path="/quests/add" component={AddQuest} />
        <Route exact path="/quests/edit" component={EditQuest} />
        <Route exact path="/tips/add" component={AddTipPage} />
        <Route exact path="/tips/edit" component={EditTipPage} />
      </BrowserRouter>
    </div >
  );
}

export default App;
