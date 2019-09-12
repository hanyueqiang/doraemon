import React, { Component } from 'react';
import ChartsComponent from '@components/chartsComponent';
import { getChartsOptionsForLine } from './components/utils';
import styles from './index.less';

const barData = [
  {
    name: '机器',
    value: 12
  },
  {
    name: '人工',
    value: 8
  },
  {
    name: '运行',
    value: 25
  },
  {
    name: '终末',
    value: 20
  }
]

export default class Index extends Component {

  bindChartEvents = (chart) => {
    chart.on('click', (params) => {
      console.log('click charts item')
    })
  }

  render() {
    return (
      <div style={{ width: '100%' }}>
        <div className={styles.Barcharts}>
          <ChartsComponent
            options={getChartsOptionsForLine(barData)}
            className="line-charts"
            bindEvents={c => { this.bindChartEvents(c) }}
          />
        </div>

      </div>
    )
  }
}
