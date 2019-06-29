import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  Platform
} from 'react-native';
import InputField from '../components/InputField';
import Button from '../components/Button';
import {
  Container,
  Header,
  Content,
  ListItem,
  Radio,
  Right,
  Left
} from 'native-base';

import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
export const w = percent => (width * percent) / 100;
export const h = percent => (height * percent) / 100;
export const totalSize = num =>
  (Math.sqrt(height * height + width * width) * num) / 100;

export default class AddPaymentScreen extends Component {
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
          <Text style={styles.header}>Add Payment Method</Text>
          <View style={styles.radioGroup}>
            <Left>
              <Radio selected={true} />
              <Text>Credit/Debit Card</Text>
            </Left>
            <Right>
              <Radio selected={false} />
              <Text>E-Wallet</Text>
            </Right>
          </View>
          <InputField
            placeholder="Cardholder's Name"
            keyboardType="default"
            style={styles.email}
            focus={this.changeInputFocus}
            ref={ref => (this.name = ref)}
            vectorIcon={'account-circle'}
          />
          <InputField
            placeholder="Card Number"
            keyboardType="number-pad"
            style={styles.email}
            error={this.state.isEmailCorrect}
            focus={this.changeInputFocus}
            ref={ref => (this.email = ref)}
            vectorIcon={'email'}
          />
          <InputField
            placeholder="Mobile"
            keyboardType="number-pad"
            style={styles.email}
            focus={this.changeInputFocus}
            ref={ref => (this.mobile = ref)}
            vectorIcon={'cellphone'}
          />
          <InputField
            placeholder="CVV Number"
            secureTextEntry={true}
            returnKeyType="done"
            style={styles.email}
            blurOnSubmit={true}
            error={this.state.isPasswordCorrect}
            ref={ref => (this.password = ref)}
            focus={this.changeInputFocus}
            vectorIcon={'onepassword'}
          />
          <Button
            click={this.getStarted}
            isLogin={this.state.isLogin}
            text={'Add'}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    color: '#ff8fa0',
    fontSize: totalSize(4),
    fontWeight: '600'
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
  radioGroup: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: w(5),
    paddingRight: w(5)
  }
});
