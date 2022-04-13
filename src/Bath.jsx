import React, { Component } from "react";

export default class Bath extends Component {
  render() {
    return <div id={`${this.props.size}-bath`}>{this.props.size} Bath</div>;
  }
}
