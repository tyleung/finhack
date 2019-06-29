import React from 'react';
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  ImageBackground
} from 'react-native';
const { height, width } = Dimensions.get('window');
export const w = percent => (width * percent) / 100;
export const h = percent => (height * percent) / 100;
export const totalSize = num =>
  (Math.sqrt(height * height + width * width) * num) / 100;

export default class WalletScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground
        source={require('../images/homepage.png')}
        style={{ width: '100%', height: '100%' }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    color: '#ff8fa0',
    fontSize: totalSize(6),
    fontWeight: '600',
    paddingTop: h(2),
    paddingLeft: w(4)
  }
});
