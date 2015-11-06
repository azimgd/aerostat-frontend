import React from "react";
import { Link } from "react-router";
import Linechart from './linechart.jsx';
import MainTop from './main-top.jsx';
import MainBottom from './main-bottom.jsx';

export default (pros) => {
  return (
    <div>
      <MainTop />

      <div className="charts">
        <div className="charts--block">
          <h3 className="charts--block--title">Sample stats for @nike</h3>
          <p className="charts--block--desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          <Linechart/>
        </div>
        <div className="charts--block">
          <h3 className="charts--block--title">Sample stats for @nike</h3>
          <p className="charts--block--desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          <Linechart/>
        </div>
      </div>

      <MainBottom />
    </div>
  );
};
