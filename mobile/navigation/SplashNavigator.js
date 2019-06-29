import React from 'react';
import { createStackNavigator } from 'react-navigation';
import OnboardingScreen from '../screens/OnboardingScreen';
import SignUpScreen from '../screens/SignUpScreen';

export default createStackNavigator(
  {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Onboarding: { screen: OnboardingScreen },
    SignUp: { screen: SignUpScreen }
  },
  {
    headerMode: 'none'
  }
);
