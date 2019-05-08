import React, { Component } from "react";
import "../src/index.css";
import { BrowserRouter, Route } from "react-router-dom";
import FirstScreen from "./components/firstScreen";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visited: localStorage.getItem("visited")
    };
  }

  componentWillMount() {
    localStorage.getItem("visited");
  }

  handleClick = () => {
    localStorage.setItem("visited", true);
    console.log(localStorage.getItem("visited"));
    this.setState({
      visited: localStorage.getItem("visited")
    });
  };

  render() {
    return (
      <div>
        {this.state.visited && (
          <BrowserRouter>
            <div className="App">
              <Navbar />
              <Route exact path="/" component={Home} />
              <Route path="/About" component={About} />
              <Route path="/Contacts" component={Contacts} />
              <Footer />
            </div>
          </BrowserRouter>
        )}

        {!this.state.visited && (
          <div>
            <FirstScreen handleClick={this.handleClick} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
