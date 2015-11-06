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
          <h3 className="charts--block--title">Instagram stats for @nike account</h3>
          <p className="charts--block--desc">Chart of most recent followers count</p>
          <Linechart type="followed_by"/>
        </div>
        <div className="charts--block">
          <h3 className="charts--block--title">Instagram stats for @nike account</h3>
          <p className="charts--block--desc">Chart of most recent followings count</p>
          <Linechart type="follows"/>
        </div>
      </div>

      <MainBottom />
    </div>
  );
};
