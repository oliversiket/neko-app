import React, { Component } from "react";
import Loader from 'react-loader-spinner';

class Loading extends Component {
  render() {
    const { children, loaded } = this.props;

    return loaded ? children : (
        <Loader
            type="TailSpin"
            color="#da3e3e"
            height={100}
            width={100}
            timeout={3000} //3 secs
        />
    );
  }
}

export default Loading;