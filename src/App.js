import React, { Component } from "react";
import GlobalStyle from './globalStyles';
import Home from './pages/Homepage/Home';
import About from './pages/Aboutpage/About';
import Contact from "./pages/Contactpage/Contact";
import Service from "./pages/Servicepage/Service";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';


class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
          <Navbar />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' component={About} />
              <Route path='/services' component={Service} />
              <Route path='/contact' component={Contact} />
            </Switch>
          <Footer />
      </Router>
    )
  }
}

export default App
