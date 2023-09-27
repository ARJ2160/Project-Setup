import { Component } from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { userCredentials } from '../../types/types';
import { getLoginState, loginUserSuccess } from '../../redux/reducers/reducers';
import { loginUserAction } from '../../redux/actions/actions';

class LoginPage extends Component<Dispatch<AnyAction> | any> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleUserNameChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    this.setState({ password: e.target.value });
  }

  handleLogin = (email: string, password: string) => {
    console.log('>>', this.props, email, password);
    this.props.getLoginState();
    this.props.loginUserSuccess();
    this.props.loginUserAction({ email, password });
  };

  render() {
    return (
      <div>
        <Login handleLogin={this.handleLogin} />
      </div>
    );
  }
}

const mapStateToProps = (state: userCredentials) => {
  return {
    email: state.email,
    password: state.password
  };
};

const mapDispatchToProps = {
  getLoginState,
  loginUserSuccess,
  loginUserAction
};
const LoginPageClass = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
export default LoginPageClass;
