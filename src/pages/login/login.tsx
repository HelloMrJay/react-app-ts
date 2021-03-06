import React from 'react';
import { Form, Input, Icon, Button, Checkbox, message } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import { login } from '../../api/user';
import { useHistory } from 'react-router-dom';
import './login.scss';

const Login: React.FC<FormComponentProps> = props => {
  const { getFieldDecorator } = props.form;
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.form.validateFields((err, fieldsValue) => {
      if (err) return;
      login(fieldsValue).then(res => {
        if (res && res.status !== 200) {
          message.error(res.message)
        } else {
          history.push('/home')
        }
      });
    });
  };

  return (
    <div className="login-container">
      <div className="login-main-wrapper">
        <Form labelAlign="left" onSubmit={handleSubmit} className="login-form">
          <Form.Item label={<span style={{ fontSize: '16px' }}>用户名</span>}>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入用户名' }]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="请输入用户名"
              />
            )}
          </Form.Item>

          <Form.Item label={<span style={{ fontSize: '16px' }}>密码</span>}>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' }]
            })(
              <Input.Password
                type="password"
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="请输入密码"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true
            })(<Checkbox>Remember me</Checkbox>)}
            {
              // eslint-disable-next-line
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            }
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or
            {
              // eslint-disable-next-line
              <a href="">register now!</a>
            }
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Form.create<FormComponentProps>()(Login);
