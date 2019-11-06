import React, { Component } from "react";

class Loading extends Component {
  render() {
    const { children, loaded } = this.props;

    return loaded ? children : (
        <div className="loading-spinner"></div>
    );
  }
}

export default Loading;