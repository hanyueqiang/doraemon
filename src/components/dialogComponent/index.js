import React, { Component } from 'react';
import { Modal } from 'antd';

export default class DialogComponent extends Component {
  render() {
    const {
      title,
      contents,
      visible,
      onOk = () => { },
      onCancel = () => { },
      width = 520,
      style = {},
      maskClosable = true,
    } = this.props;
    return (
      <Modal
        style={style}
        destroyOnClose={true}
        maskClosable={maskClosable}
        title={title}
        visible={visible}
        onOk={onOk}
        width={width}
        onCancel={onCancel}>
        {contents}
      </Modal>
    );
  }
}