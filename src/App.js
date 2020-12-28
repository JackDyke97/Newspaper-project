import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Component } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Read } from './components/Read';
import { Create } from './components/Create';
import { Content } from './components/Content';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
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
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>

          <br />

          <Switch>
            <Route path='/' component={Content} exact />
            <Route path='/create' component={Create} exact />
            <Route path='/read' component={Read} exact />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
