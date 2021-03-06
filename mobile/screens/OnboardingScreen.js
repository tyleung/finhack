import React from 'react';
import { Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

export default class OnboardingScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <Onboarding
        pages={[
          {
            backgroundColor: '#52bf90',
            image: (
              <Image
                source={require('../images/milk_1.png')}
                style={{ height: 250, width: 250 }}
              />
            ),
            title: 'Know Your CF',
            subtitle:
              'Scan your shopping bill right after you made the payment to know your Carbon Footprint'
          },
          {
            backgroundColor: '#52bf90',
            image: (
              <Image
                source={require('../images/shampoo_2.png')}
                style={{ height: 250, width: 250 }}
              />
            ),
            title: 'Recommendations',
            subtitle:
              'We show you recommendations on what to buy in terms of recyclability and reusability'
          },
          {
            backgroundColor: '#52bf90',
            image: (
              <Image
                source={require('../images/goal_3.png')}
                style={{ height: 250, width: 250 }}
              />
            ),
            title: 'Set Goals',
            subtitle:
              'We help you set and achieve your CF goal systematically through our proprietary algorithms'
          }
        ]}
        showNext={false}
        showSkip={false}
        onDone={() => navigate('Login')}
      />
    );
  }
}
