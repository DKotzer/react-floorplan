import React, { Component } from "react";
import Kitchen from "./Kitchen";
import Bedroom from "./Bedroom";
import Bath from "./Bath";
import LivingRoom from "./LivingRoom";

export default class FloorPlan extends Component {
  render() {
    return (
      <div>
        <div className='top'>
          <div className='bedBath'>
            <Bedroom bedNum={1}></Bedroom>
            <Bath size={"Full"}></Bath>
          </div>
          <LivingRoom></LivingRoom>
          <Kitchen></Kitchen>
        </div>
        <div className='bottom'>
          <Bedroom bedNum={2}></Bedroom>
          <Bath size={"Half"}></Bath>
          <Bedroom bedNum={3}></Bedroom>
        </div>
      </div>
    );
  }
}
