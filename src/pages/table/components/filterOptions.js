import React, { Component } from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import SelectComponent from '@components/selectComponent';
import cloneDeep from 'lodash/cloneDeep';
import { reviewOptions } from './config';
import styles from '../index.less';

@connect(({ table }) => ({ ...table }))
class FilterOptions extends Component {
    state = {
        dialog: {
            title: '',
            contents: '',
            visible: false
        },
        status: ''
    }

    handleChange = async (value) => {
        const { tableSource, dispatch } = this.props;
        let newDataSource = cloneDeep(tableSource);
        if (value) {
            newDataSource = newDataSource.filter(item => item.reviewCaseStatus === value);
        }
        dispatch({
            type: 'table/save',
            payload: {
                review: value,
                dataSource: newDataSource
            }
        });
    }
    addHandle = () => {
        this.props.addHandle();
    }

    render() {
        const { review } = this.props;
        return (
            <div className={styles.tableFilters}>
                <SelectComponent label={'审核状态'} value={review} options={reviewOptions} handleChange={this.handleChange} />
                <Button type="primary" onClick={this.addHandle}>新增</Button>
            </div>
        )
    }
}
export default FilterOptions
