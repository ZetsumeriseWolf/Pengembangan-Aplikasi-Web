import React, { Component } from "react";
// import logo from "./logo.svg";
import "./bootstrap-5.1.3-dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./views/Home/Home";
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
        return <Home name="Eden Hazard" />;
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

// function Message(props) {
//   return <p>Hello {props.name}</p>;
// }

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Message name="Kharlos Davinci" />
//         <Home name="Davinci" />
//       </div>
//     );
//   }
// }

// function App() {
//   var h1 = <i>Lannister</i>;
//   const title = "Praktek Pengembangan Aplikasi Web Praktek";
//   var text =
//     "ReactJS merupakan Framework atau pustaka Javascript untuk membangun komponen interaksi pengguna interaktif dan dapat digunakan ulang";
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <div className="content">
//           <h1 style={{ textAlign: "center", color: "rgb(252, 146, 158)" }}>
//             Hai, {h1}
//           </h1>
//           <h2 className="title">{title}</h2>
//           <p className="content-text">{text}</p>
//         </div>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Aplikasi Pengembangan Web
//         </a>
//         <img src={logo} />
//       </header>
//     </div>
//   );
// }

export default App;
