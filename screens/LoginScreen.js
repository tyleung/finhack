import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground
} from 'react-native';
import InputField from '../components/InputField';
import LoginButton from '../components/LoginButton';

const companyLogo = require('../images/PepeHands.png');
const email = require('../images/PepeHands.png');
const password = require('../images/PepeHands.png');

import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
export const w = percent => (width * percent) / 100;
export const h = percent => (height * percent) / 100;
export const totalSize = num =>
  (Math.sqrt(height * height + width * width) * num) / 100;

export default class LoginScreen extends Component {
  state = {
    isEmailCorrect: false,
    isPasswordCorrect: false,
    isLogin: false
  };

  getStarted = () => {
    const email = this.email.getInputValue();
    const password = this.password.getInputValue();

    this.setState(
      {
        isEmailCorrect: email === '',
        isPasswordCorrect: password === ''
      },
      () => {
        if (email !== '' && password !== '') {
          this.props.navigation.navigate('Main');
        } else {
          console.warn('Fill up all fields');
        }
      }
    );
  };

  changeInputFocus = name => () => {
    if (name === 'Email') {
      this.setState({ isEmailCorrect: this.email.getInputValue() === '' });
      this.password.input.focus();
    } else {
      this.setState({
        isPasswordCorrect: this.password.getInputValue() === ''
      });
    }
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ImageBackground
        source={require('../images/greenforest.png')}
        style={{ width: '100%', height: '100%' }}
      >
        <View style={styles.container}>
          <Image
            style={styles.icon}
            resizeMode="contain"
            source={companyLogo}
          />
          <InputField
            placeholder="Email"
            keyboardType="email-address"
            style={styles.email}
            error={this.state.isEmailCorrect}
            focus={this.changeInputFocus}
            ref={ref => (this.email = ref)}
            vectorIcon={'email'}
          />
          <InputField
            placeholder="Password"
            returnKeyType="done"
            secureTextEntry={true}
            blurOnSubmit={true}
            error={this.state.isPasswordCorrect}
            ref={ref => (this.password = ref)}
            focus={this.changeInputFocus}
            vectorIcon={'onepassword'}
          />
          <LoginButton click={this.getStarted} isLogin={this.state.isLogin} />
          <View style={styles.textContainer}>
            <TouchableOpacity
              onPress={() => navigate('SignUp')}
              style={styles.touchable}
              activeOpacity={0.6}
            >
              <Text style={styles.createAccount}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={navigate('forgot')}
              style={styles.touchable}
              activeOpacity={0.6}
            >
              <Text style={styles.forgotPassword}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  icon: {
    width: w(70),
    height: h(30),
    marginTop: h(10),
    marginBottom: h(7)
  },
  textContainer: {
    width: w(100),
    flexDirection: 'row',
    marginTop: h(5)
  },
  email: {
    marginBottom: h(4.5)
  },
  touchable: {
    flex: 1
  },
  createAccount: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: totalSize(2),
    fontWeight: '600'
  },
  forgotPassword: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: totalSize(2),
    fontWeight: '600'
  }
});
