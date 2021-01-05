import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react';
import { Read } from './components/Read';
import { Create } from './components/Create';
import { Content } from './components/Content';
import { Edit } from './components/Edit';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      //our navbar borrowed from react bootstrap
      //the router that is being used to define the paths for each component

      <Router>
        <div className="App">

          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Articles</Nav.Link>
              <Nav.Link href="/create">Editor</Nav.Link>
            </Nav>
          </Navbar>

          <br />

          <Switch>
            <Route path='/' component={Content} exact />
            <Route path='/create' component={Create}  />
            <Route path='/read' component={Read}  />
            <Route path='/edit/:id' component={Edit} />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
