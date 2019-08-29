import React, { Component } from 'react';
import { Table } from 'antd';
import { columns } from './components/config';
import { connect } from 'dva';
import FilterOptions from './components/filterOptions'
import styles from './index.less';


@connect(({ table }) => ({ ...table }))
class Index extends Component {

  componentDidMount() {
    this.goFetch();
  }
  goFetch = () => {
    const { dispatch, } = this.props;
    dispatch({
      type: 'table/getTableList',
      payload: {

      }
    });
  }
  reviewOnChange = (value) => {
    const { dispatch,  } = this.props;
    dispatch({
      type: 'table/save',
      payload: {
        
      }
    });
  }

  render() {
    const { dataSource } = this.props;
    return (
      <div className={styles.tableSearch}>
        <FilterOptions reviewOnChange={this.reviewOnChange}/>
        <Table
          columns={columns}
          dataSource={dataSource}
          size="middle"
        />
      </div>
    )
  }
}
export default Index
