import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'dva';

@connect(({ view1 }) => ({ ...view1 }))
class Index extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'view1/getView1',
      payload: {
      }
    });
  }

  columns = [
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: 'age',
      dataIndex: 'age',
    },
    {
      title: 'love',
      dataIndex: 'love',
    }
  ];

  render() {
    const { dataSource } = this.props;
    return (
      <div style={{ width: '100%' }}>
        <Table
          columns={this.columns}
          dataSource={dataSource}
          size="middle"
        />
      </div>
    )
  }
}
export default Index
