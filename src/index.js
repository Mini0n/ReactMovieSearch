import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        <h3>Ola k ase!</h3>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
