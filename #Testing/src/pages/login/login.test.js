/**
 * https://segmentfault.com/a/1190000017930406
 * 登录页测试用例
 * 
 * 1、页面title显示“登录”（UI）
 * 2、登录账号输入手机号或邮箱时，账号上方显示登录账号
 * 3、登录账号输入不为手机号或邮箱，账号上方显示【账户输入错误，请重新输入】
 * 4、账号输入正常，密码小于6位，登录按钮置灰。
 * 5、账号输入异常，密码不小于6位，登录按钮置灰。
 * 6、账号输入正常，密码不小于6位，登录按钮可点。
 * 7、点击密码后眼睛图标，显示密码。
 * 8、显示密码状态，再次点击，隐藏密码。
 */
import Login from 'pages/Login';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';

configure({ adapter: new Adapter() });

const wrapper = mount(<Login />);

describe("登陆页测试", () => {
  const accountInput = wrapper.find('.account').find('input');
  const passwordInput = wrapper.find('.password').find('input');
  const accountTitle = wrapper.find('.account .name').find('span');
  const eyeIcon = wrapper.find('.password').find('Iconfont');

  // 1、title显示
  it('标题显示', () => {
    const title = wrapper.find('.title').text();
    expect(title).toBe('登录');
  })

  // 2.1、输入正确手机号
  it('输入正确手机号', () => {
    const event = {
      target: {
        value: '18888888888'
      }
    }
    accountInput.simulate('change', event);
    expect(accountTitle.text()).toBe('登录账号');
  })

  // 2.2、输入正确邮箱
  it('输入正确邮箱号', () => {
    const event = {
      target: {
        value: '18888888888@163.com'
      }
    }
    accountInput.simulate('change', event);
    expect(accountTitle.text()).toBe('登录账号');
  })

  // 3、输入错误账号
  it('输入不合法账号', () => {
    const event = {
      target: {
        value: 'abc123'
      }
    }
    accountInput.simulate('change', event);
    expect(accountTitle.text()).toBe('账户输入错误，请重新输入');
  })

  // 4.1  指定初始状态
  it('输入正确账号，密码小于6位，指定状态', () => {
    wrapper.setState({
      account: '18888888888',
      password: '12345',
      errorAccount: false
    });
    // 此处需重新获取btn对象，否则会导致用例失败
    const submitBtn = wrapper.find('.btn-box').find('Button');
    expect(submitBtn.props().disabled).toBe(true);
  })

  // 4.2  通过change触发状态更改
  it('输入正确账号，密码小于6位，通过change触发', () => {
    const accountEvent = {
      target: {
        value: '18888888888'
      }
    };
    const pwdEvent = {
      target: {
        value: '12345'
      }
    }
    accountInput.simulate('change', accountEvent);
    passwordInput.simulate('change', pwdEvent);
    const submitBtn = wrapper.find('.btn-box').find('Button');
    expect(submitBtn.prop('disabled')).toBe(true);
  })
  
  // 5、账号输入异常
  it('账号输入异常，密码不小于6位', () => {
    const accountEvent = {
      target: {
        value: '1868888'
      }
    };
    const pwdEvent = {
      target: {
        value: '1234567'
      }
    }
    accountInput.simulate('change', accountEvent);
    passwordInput.simulate('change', pwdEvent);
    const submitBtn = wrapper.find('.btn-box').find('Button');
    expect(submitBtn.prop('disabled')).toBe(true);
  })

  // 6、账号密码输入正常，按钮可点击
  it('账号密码均输入正常，提交按钮可点击', () => {
    const accountEvent = {
      target: {
        value: '18888888888'
      }
    };
    const pwdEvent = {
      target: {
        value: '1234567'
      }
    }
    accountInput.simulate('change', accountEvent);
    passwordInput.simulate('change', pwdEvent);
    const submitBtn = wrapper.find('.btn-box').find('Button');
    expect(submitBtn.props().disabled).toBe(false);
  })

  // 7、点击密码后眼睛图标，显示密码
  it('点击密码后眼睛图标，显示密码', () => {
    eyeIcon.simulate('click');
    const passwordInput = wrapper.find('.password').find('input');
    expect(wrapper.find('.password').find('Iconfont').prop('name')).toBe('eye1');
    expect(passwordInput.prop('type')).toBe('text');
  })

  // 8、再次点击密码后眼睛图标，隐藏密码
  it('再次点击密码后眼睛图标，隐藏密码', () => {
    wrapper.setState({
      showPwd: true
    });
    eyeIcon.simulate('click');
    const passwordInput = wrapper.find('.password').find('input');
    expect(wrapper.find('.password').find('Iconfont').prop('name')).toBe('eye2');
    expect(passwordInput.prop('type')).toBe('password');
  })

})