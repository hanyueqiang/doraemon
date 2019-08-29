import React, { Component } from 'react';
import { Select } from 'antd';
import SelectComponent from '@components/selectComponent';
import { reviewOptions } from './config'

export default class FilterOptions extends Component {

    handleChange = (value) => {
        this.props.reviewOnChange(value);
    }

    render() {
        return (
            <div>
                <SelectComponent label={'审核状态'} options={reviewOptions} handleChange={this.handleChange} />
            </div>
        )
    }
}
