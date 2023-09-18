import { Component } from 'react';
import { LoginPageProps, userCredentials } from '../../types/types';
import Login from './Login';
import { connect } from 'react-redux';
import { loginUserAction } from '../../redux/actions/actions';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { loginUserSuccess } from '../../redux/reducers/reducers';
// import { getLoginState, loginUserSuccess } from '../../redux/reducers/reducers';

class LoginPage extends Component<LoginPageProps | userCredentials | Dispatch<AnyAction>> {
  constructor(props: LoginPageProps | userCredentials | Dispatch<AnyAction>) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleUserNameChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    this.setState({ email: e.target.value });
    this.state.email
  }

  handlePasswordChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    this.setState({ password: e.target.value });
  }

  handleLogin = (email: string, password: string) => {
    console.log('CLASSS', loginUserAction);
    this.props.dispatch(loginUserAction({ email, password }));
    this.props.dispatch(loginUserSuccess());
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
    password: state.password,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    dispatch,
  };
};
const LoginPageClass = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
export default LoginPageClass;
