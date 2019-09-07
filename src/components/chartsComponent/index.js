import React, { Component } from 'react';
import echarts from 'echarts';
let timer;

export default class ChartsComponent extends Component {
  chart = null;
  containerWidth = '';
  resizeTimer = null;
  async render_chart() {
    const { options = {} } = this.props;
    const opts = await options;
    let chartOptions = {
      grid: {
        top: 50,
        bottom: 40,
        left: 50,
        right: 50,
        containLabel: true
      },
      toolbox: {
        show: false
      },
      ...opts
    };
    return chartOptions;
  }


  draw() {
    if(!this.container) return;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(async () => {
      if(!this.container) return;
      //const e = await import('echarts');
      if (!this.chart){
        this.chart = echarts.init(this.container);
        if(this.props.bindEvents){
          this.props.bindEvents(this.chart);
        }
      }
      let chartOptions = await this.render_chart();
      this.chart.setOption(chartOptions);
      window.addEventListener("resize", () => {
        this.chart.resize();
      });
      if (this.container.clientWidth !== this.containerWidth) {
        this.containerWidth = this.container.clientWidth;
      }
    }, 500);
  }

  componentDidUpdate() {
    this.draw();
  }

  componentDidMount() {
    this.draw();
  }

  getWidth() {
    if (this.resizeTimer) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = null
    }
    this.resizeTimer = setTimeout(() => {
      if (this.container && this.containerWidth !== this.container.clientWidth) {
        this.containerWidth = this.container.clientWidth;
        this.chart && this.chart.resize();
      }
    }, 500);
  }

  shouldComponentUpdate(nextProps) {
    let oOpts = JSON.stringify(this.props.options);
    let nOpts = JSON.stringify(nextProps.options);
    this.getWidth();
    return oOpts !== nOpts;
  }

  render() {
    return (
      <div ref={container => { this.container = container; }} className={"container " + (this.props.className || '')}/>
    )
  }
}
