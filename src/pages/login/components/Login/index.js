
import { PureComponent } from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from "./index.less";

const FormItem = Form.Item;
@connect(({ login }) => ({ isError: login.isError }))
class Login extends PureComponent {
    handleSubmit = (e) => {
        e.preventDefault();
        const { form, onSubmit } = this.props;
        form.validateFields({ force: true }, (errors, values) => {
            onSubmit(errors, values);
        });
    }
    handleChange = () => {
        if (this.props.isError === true) {
            this.props.dispatch({
                type: 'login/save',
                payload: {
                    isError: false
                }
            });
        }
    }
    render() {
        const { loading, form, isError } = this.props;
        const {
            getFieldDecorator: fd,
        } = form;
        const error = isError ? {
            validateStatus: "error",
            help: "用户名或密码错误"
        } : {};
        return (
            <div className={styles.login_form}>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem
                        {...error}
                    >
                        {fd('username', {
                            initialValue: 'admin',
                            rules: [{
                                required: true,
                                message: '请输入用户名!'
                            }]
                        })(
                            <Input
                                prefix={<Icon type="user" className={styles.color} />}
                                onChange={this.handleChange}
                                placeholder={'请输入用户名'}
                            />
                        )}
                    </FormItem>
                    <FormItem
                        {...error}
                    >
                        {fd('password', {
                            initialValue: 'admin',
                            rules: [{ required: true, message: '请输入密码!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" className={styles.color} />}
                                type="password"
                                onChange={this.handleChange}
                                placeholder={'请输入密码!'}
                            />
                        )}
                    </FormItem>
                    <FormItem>
                        {fd('rememberMe', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>记住密码</Checkbox>
                        )}
                        <a className={styles.login_form_forgot} href="/">{'忘记密码'}</a>
                        <Button type="primary" htmlType="submit" className={styles.login_form_button} loading={loading}>
                            {'登录'}
                        </Button>
                    </FormItem>
                </Form>
            </div >
        );
    }
}

export default Form.create()(Login);