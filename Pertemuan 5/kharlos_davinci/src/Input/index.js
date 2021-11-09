import React, { Component } from "react";
import "./style.css";

export default class Input extends Component {

  render() {
    return (
      <div className="input">
        <input
          type="text"
          name="your_name"
          placeholder="Enter Your Name"
          onChange={(e) => this.props.getValues(e.target.name, e.target.value)}
        />
        <input
          type="text"
          name="status"
          placeholder="Enter Your Status"
          onChange={(e) => this.props.getValues(e.target.name, e.target.value)}
        />
      </div>
    );
  }
}

// export default class Input extends Component {
//   constructor() {
//     super();

//     this.state = { status: "" };
//   }

//   render() {
//     return (
//       <div className="input">
//         <input
//           type="text"
//           name="status"
//           placeholder="Enter Your Status"
//           onChange={(e) => this.setState({ status: e.target.value })}
//         />
//         <p>Your status : {this.state.status}</p>
//       </div>
//     );
//   }
// }
