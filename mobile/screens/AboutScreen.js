import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

export default class AboutScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <Onboarding
        pages={[
          {
            backgroundColor: '#52bf90',
            image: (
              <Image
                source={require('../images/about1.png')}
                resizeMode={'contain'}
                style={{ height: 500 }}
              />
            ),
            title: '',
            subtitle: ''
          },
          {
            backgroundColor: '#52bf90',
            image: (
              <Image
                source={require('../images/about2.png')}
                resizeMode={'contain'}
                style={{ height: 500 }}
              />
            ),
            title: '',
            subtitle: ''
          },
          {
            backgroundColor: '#52bf90',
            image: (
              <Image
                source={require('../images/about3.png')}
                resizeMode={'contain'}
                style={{ height: 500 }}
              />
            ),
            title: '',
            subtitle: ''
          },
          {
            backgroundColor: '#52bf90',
            image: (
              <Image
                source={require('../images/about4.png')}
                resizeMode={'contain'}
                style={{ height: 500 }}
              />
            ),
            title: '',
            subtitle: ''
          }
        ]}
        showNext={false}
        showSkip={false}
        onDone={() => navigate('Login')}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  cover: {
    flex: 1,
    width: null,
    height: null
  }
});
