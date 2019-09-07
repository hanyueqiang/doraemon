
export const getChartsOptionsForLine = (detailData) => {
  let nameArr = detailData.map(e => e.name);
  // let format = (e) => {
  //   return e.substr(0, 10) + '...'
  // }
  return {
    color: ['#38A0FF'],
    xAxis: {
      axisLabel: {
        interval: 0,
        //rotate: 40,
        //formatter: format
      },
      data: nameArr
    },
    yAxis: {
      axisLine: {
        show: true
      },
      name: '缺陷数',
    },
    tooltip: {
      show: true,
      //formatter: '{b}: {c}',
      formatter: function (params) {
        var res = '<div style="max-width: 280px;white-space: normal">' + params.name + ': ' + params.value + '</div>';
        return res;
      }
    },
    series: [
      {
        type: 'bar',
        data: detailData,
        barWidth: 30,
        // itemStyle: {
        //   shadowBlur: 2,
        //   //shadowColor: 'rgba(0, 0, 0, 0.5)',
        //   shadowOffsetX: 2,
        //   shadowOffsetY: 2
        // }
      }
    ]
  }
}