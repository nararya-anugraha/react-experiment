import React, { Component, Fragment } from "react";

const processMessage = event => {
  console.log("Parent is told");
  console.log(event);
};

const openTabbedChild = event => {
  window.open("http://localhost:3000/tabbed-child");
};

class Parent extends Component {
  componentDidMount() {
    window.addEventListener("message", processMessage, false);
  }

  componentWillUnmount() {
    window.removeEventListener("message", processMessage);
  }

  render() {
    return (
      <Fragment>
        <h1>Parent</h1>
        <iframe src="http://localhost:3000/child" />
        <br />
        <button onClick={openTabbedChild}>Open Tabbed Child</button>
      </Fragment>
    );
  }
}

export default Parent;
