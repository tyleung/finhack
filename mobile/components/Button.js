import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  ActivityIndicator,
  Text,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
const { height, width } = Dimensions.get('window');
export const w = percent => (width * percent) / 100;
export const h = percent => (height * percent) / 100;
export const totalSize = num =>
  (Math.sqrt(height * height + width * width) * num) / 100;

export default class LoginButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.click}
        style={styles.button}
        activeOpacity={0.6}
      >
        {this.props.isLogin ? (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="white"
          />
        ) : (
          <Text style={styles.text}>{this.props.text}</Text>
        )}
      </TouchableOpacity>
    );
  }
}

LoginButton.propTypes = {
  click: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired
};

const styles = StyleSheet.create({
  button: {
    width: '85%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: w(2),
    backgroundColor: '#888',
    borderRadius: w(10),
    marginTop: h(1)
  },
  text: {
    color: 'white',
    fontWeight: '700',
    paddingVertical: h(1),
    fontSize: totalSize(2.1)
  },
  spinner: {
    height: h(5)
  }
});
