import React, { Component } from "react";
import Oven from "./Oven";
import Sink from "./Sink";

export default class Kitchen extends Component {
  render() {
    return (
      <div className='kitchen'>
        <div id='kitchen'>
          <div className='appliances'>
            <div className='oven'>
              <Oven></Oven>
            </div>
            <div className='sink'>
              <Sink></Sink>
            </div>
          </div>
          <div className='text-holder'>
            <div className='text'>Kitchen</div>
          </div>
        </div>
      </div>
    );
  }
}
