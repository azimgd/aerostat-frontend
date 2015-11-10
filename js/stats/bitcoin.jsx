import React from "react";
import { Link } from "react-router";
import axios from 'axios';
import moment from 'moment';
import chartjs from 'react-chartjs';
import numeral from 'numeral';

const LineChart = chartjs.Line;

export default React.createClass({
  getInitialState: function() {
    this.fetchChartData();
    const lineOptions = {
      responsive: true,
      scaleLabel : "<%= value %>"
    };

    return {
      lineOptions: lineOptions,
      lineData: false
    }
  },

  /**
   *
   */
  generateDataSet: function(label, values) {
    const dataset = {
      label: label,
      fillColor: "rgba(52, 152, 219, 0.1)",
      strokeColor: "rgba(52, 152, 219, 1.0)",
      pointColor: "rgba(52, 152, 219, 1.0)",
      pointStrokeColor: "rgba(41, 128, 185, 0.6)",
      pointHighlightFill: "rgba(41, 128, 185, 0.6)",
      pointHighlightStroke: "rgba(41, 128, 185, 1)",
      data: values
    };

    return dataset;
  },

  /**
   *
   */
  setChartData: function(data) {
    const labels = data.map(item => moment.unix(item.time).format('MMM Do, h:mm a')).reverse();
    const counts = data.map(item => item.price.amount).reverse();
    const chart = this.generateDataSet('chart', counts);

    const lineData = {
      labels: labels,
      datasets: [chart]
    };

    this.setState({ lineData });
  },

  /**
   *
   */
  fetchChartData: function() {
    axios.get('http://aerostat.io/api/stats/bitcoin', { params: { count: 10 } })
    .then(response => this.setChartData(response.data));
  },

  render: function() {
    if(!this.state.lineData) {
      return <div> Loading </div>;
    }

    return (<div>
      <LineChart data={this.state.lineData} options={this.state.lineOptions}/>
    </div>);
  }
});
