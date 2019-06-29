import React from 'react';
import { createStackNavigator } from 'react-navigation';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import AddPaymentScreen from '../screens/AddPaymentScreen';

export default createStackNavigator(
  {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Onboarding: { screen: OnboardingScreen },
    Login: { screen: LoginScreen },
    SignUp: { screen: SignUpScreen },
    AddPayment: { screen: AddPaymentScreen }
  },
  {
    headerMode: 'none'
  }
);
