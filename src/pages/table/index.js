import React, { Component } from 'react';
import { Table } from 'antd';
import { columns } from './components/config';
import { connect } from 'dva';
import FilterOptions from './components/filterOptions';
import cloneDeep from 'lodash/cloneDeep';
import DialogComponent from '@components/dialogComponent';
import TableSettings from './components/tableSettings';
import styles from './index.less';


@connect(({ table }) => ({ ...table }))
class Index extends Component {
  state = {
    dialog: {
      title: '',
      contents: '',
      visible: false
    },
    status: '',
    record: {}
  }

  componentDidMount() {
    this.goFetch();
  }
  goFetch = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'table/getTableList',
      payload: {
      }
    });
  }

  deleteHandle = async (record) => {
    const { tableSource, dispatch } = this.props;
    let newDataSource = cloneDeep(tableSource);
    if (record.key) {
      newDataSource = newDataSource.filter(item => item.key !== record.key);
    }
    dispatch({
      type: 'table/save',
      payload: {
        dataSource: newDataSource
      }
    });
  }
  onDialogOk = () => {
    const { status } = this.state;
    this[status]();
  }
  onDialogCancel = () => {
    this.toggleDialogShow();
  }
  toggleDialogShow(visible = false, title = '', contents = '') {
    this.setState({
      dialog: {
        visible,
        title,
        contents,
      }
    });
  }

  addHandle = () => {
    this.toggleDialogShow(true, '新增', <TableSettings record={{}} ref={ref => this.addTableRef = ref} />);
    this.setState({
      status: 'addOk'
    });
  }
  addOk = () => {
    this.addTableRef.validateFields(async (err, values) => {
      if (!err) {
        let obj = {
          key: parseInt(Math.random() * 50),
          reviewCaseTime: values.reviewCaseTime.format('YYYY-MM-DD'),
          name: values.name,
          reviewCaseStatus: values.reviewCaseStatus
        }
        const { tableSource, dispatch } = this.props;
        let newDataSource = cloneDeep(tableSource);
        newDataSource.push(obj)
        dispatch({
          type: 'table/save',
          payload: {
            dataSource: newDataSource
          }
        });
        this.toggleDialogShow();
      }
    })
  }

  editHandle = (record) => {
    this.toggleDialogShow(true, '编辑', <TableSettings record={record} ref={ref => this.addTableRef = ref} />);
    this.setState({
      status: 'editOk',
      record
    });
  }

  editOk = () => {
    this.addTableRef.validateFields(async (err, values) => {
      if (!err) {
        const { record } = this.state;

        const { tableSource, dispatch } = this.props;
        let newDataSource = cloneDeep(tableSource);
        let obj = newDataSource.find(item => item.key === record.key);
        obj.reviewCaseTime = values.reviewCaseTime.format('YYYY-MM-DD');
        obj.name = values.name;
        obj.reviewCaseStatus = values.reviewCaseStatus;

        dispatch({
          type: 'table/save',
          payload: {
            dataSource: newDataSource
          }
        });
        this.toggleDialogShow();
      }
    })
  }


  render() {
    const { dataSource } = this.props;
    const { dialog } = this.state;
    return (
      <div className={styles.tableSearch}>
        <FilterOptions goFetch={this.goFetch} addHandle={this.addHandle} />
        <Table
          columns={columns(this)}
          dataSource={dataSource}
          size="middle"
        />
        <DialogComponent {...dialog} onOk={this.onDialogOk} onCancel={this.onDialogCancel} />
      </div>
    )
  }
}
export default Index
