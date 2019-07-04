import React, { Component, Fragment } from "react";

const tellParent = message => {
  window.console.log("Telling Parent");
  window.parent.postMessage("Hi");
};

class Child extends Component {
  componentDidMount() {
    console.log("Child is Mountted");
  }

  render() {
    return (
      <Fragment>
        <h1>Child</h1>
        <button type="button" onClick={tellParent}>
          Tell Parent
        </button>
      </Fragment>
    );
  }
}

export default Child;
