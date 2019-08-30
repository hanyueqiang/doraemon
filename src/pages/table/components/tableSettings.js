import React, { Component } from 'react';
import moment from 'moment';
import { Form, Select, Input, Row, Col, DatePicker } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

@Form.create()
class AddPlanForm extends Component {

  setValues({ name, reviewCaseStatus, reviewCaseTime }) {
    let timepick = moment(reviewCaseTime, 'YYYY-MM-DD');
    this.props.form.setFieldsValue({
      name,
      reviewCaseStatus,
      reviewCaseTime: timepick
    });
  }

  componentDidMount() {
    const { record } = this.props;
    if (record.key) {
      let timeout = setTimeout(this.setValues(record), 800);
      clearTimeout(timeout);
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 15, offset: 1 },
    };
    return (
      <Form layout="inline">
        <Row>
          <Col span={24} style={{ height: 55 }}>
            <FormItem
              label="患者姓名"
              {...formItemLayout}
            >
              {getFieldDecorator('name', {
                rules: [
                  { required: false, message: '不能为空' },
                ],
              })(
                <Input style={{ width: 300 }} />
              )}
            </FormItem>
          </Col>
          <Col span={24} style={{ height: 55 }}>
            <FormItem
              label="审核状态"
              {...formItemLayout}
            >
              {getFieldDecorator('reviewCaseStatus', {
                rules: [
                  { required: false, message: '不能为空' },
                ],
              })(
                <Select
                  getPopupContainer={triggerNode => triggerNode.parentNode}
                  style={{ width: 300 }}
                  placeholder="请选择审核状态"
                >
                  <Option value={1}>待审核</Option>
                  <Option value={2}>审核中</Option>
                  <Option value={3}>通过</Option>
                  <Option value={4}>不通过</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={24} style={{ height: 55 }}>
            <FormItem
              label="审核时间"
              {...formItemLayout}
            >
              {getFieldDecorator('reviewCaseTime', {
                rules: [{ required: false, message: '审核时间不能为空' }],
              })(
                <DatePicker format="YYYY-MM-DD" style={{ width: 300 }} />
              )}
            </FormItem>
          </Col>
        </Row>
      </Form>
    );
  }
}
export default AddPlanForm