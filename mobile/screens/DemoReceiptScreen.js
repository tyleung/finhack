import React from 'react';
import {
  Dimensions,
  View,
  Button,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ActivityIndicator
} from 'react-native';
const { height, width } = Dimensions.get('window');
export const w = percent => (width * percent) / 100;
export const h = percent => (height * percent) / 100;
export const totalSize = num =>
  (Math.sqrt(height * height + width * width) * num) / 100;

export default class DemoReceiptScreen extends React.Component {
  state = {
    isLoading: false
  };

  performOCR = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLoading: false });
      const { navigate } = this.props.navigation;
      navigate('DemoReceiptOCR');
    }, 2000);
  };

  render() {
    const { navigate } = this.props.navigation;
    if (this.state.isLoading) {
      return <ActivityIndicator size="large" style={styles.loading} />;
    } else {
      return (
        <View>
          <Image
            source={require('../images/receipt.png')}
            style={{ width: '100%', height: '85%' }}
            resizeMode={'contain'}
          />
          <Button
            onPress={this.performOCR}
            title="Perform OCR"
            color="#36802d"
            style={{ marginTop: 20 }}
          />
        </View>
      );
    }
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
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
