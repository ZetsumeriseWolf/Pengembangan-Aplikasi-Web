import React, { Component } from "react";
// import logo from "./logo.svg";
import "./bootstrap-5.1.3-dist/css/bootstrap.min.css";
import "./App.css";
import Main from "./Main/index";
// import Home from "./views/Home/Home";
import About from "./views/About/About";
import Help from "./views/Help/Help";

class App extends Component {
  constructor() {
    super();
    // initial state view
    this.state = {
      view: "home",
    };
  }

  render() {
    const View = () => {
      if (this.state.view === "home") {
        return <Main />;
      } else if (this.state.view === "about") {
        return <About />;
      } else if (this.state.view === "help") {
        return <Help />;
      }
    };

    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => this.setState({ view: "home" })}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => this.setState({ view: "about" })}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => this.setState({ view: "help" })}
              >
                Help
              </a>
            </li>
          </ul>
        </nav>
        {/* {Panggil Component View} */}
        <View />
      </div>
    );
  }
}

export default App;