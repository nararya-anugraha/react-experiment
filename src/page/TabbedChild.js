import React, { Component, Fragment } from "react";

const tellParent = () => {
  window.console.log("Telling parent from tabbed child");
  window.opener.postMessage("Hi from tabbled child");
};

class TabbedChild extends Component {
  componentDidMount() {
    console.log("TabbedChild is Mountted");
  }

  render() {
    return (
      <Fragment>
        <h1>TabbedChild</h1>
        <button type="button" onClick={tellParent}>
          Tell Parent
        </button>
      </Fragment>
    );
  }
}

export default TabbedChild;
