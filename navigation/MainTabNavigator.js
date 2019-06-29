import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import { Platform, StatusBar } from 'react-native';
import TabBarIcon from '../components/TabBarIcon';
import RankScreen from '../screens/RankScreen';
import ScanScreen from '../screens/ScanScreen';
import WalletScreen from '../screens/WalletScreen';

const ScanStack = createStackNavigator(
  {
    Scan: ScanScreen
  },
  {
    headerMode: 'none'
  }
);

ScanStack.navigationOptions = {
  tabBarLabel: 'Scan',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-qr-scanner` : 'md-qr-scanner'}
    />
  )
};

const WalletStack = createStackNavigator(
  {
    Wallet: WalletScreen
  },
  {
    headerMode: 'none'
  }
);

WalletStack.navigationOptions = {
  tabBarLabel: 'Wallet',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-wallet` : 'md-wallet'}
    />
  )
};

const RankStack = createStackNavigator(
  {
    Rank: RankScreen
  },
  {
    headerMode: 'none'
  }
);

RankStack.navigationOptions = {
  tabBarLabel: 'Rank',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-list` : 'md-list'}
    />
  )
};

const tabNavigator = createBottomTabNavigator({
  WalletStack,
  ScanStack,
  RankStack
});

tabNavigator.path = '';

export default tabNavigator;
