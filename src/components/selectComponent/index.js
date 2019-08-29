import React, { Component } from 'react';
import { Select } from 'antd';
const { Option } = Select;

export default class SelectComponent extends Component {

  onChange = (value) => {
    this.props.handleChange(value);
  }

  render() {
    const { label, options = [], style, value } = this.props;
    return (
      <div style={{ display: 'inline-block' }}>
        {label && <span style={{ marginRight: 10 }}>{label} :</span>}
        <Select
          style={{ width: 140, ...style }}
          onChange={this.onChange}
          value={value || ''}
        >
          <Option value={''}>全部</Option>
          {options.map((item, index) => <Option key={index} value={item.id}>{item.name}</Option>)}
        </Select>
      </div>
    )
  }
}
