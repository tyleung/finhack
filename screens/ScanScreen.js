import React from 'react';
import { View, Text, Platform, TouchableOpacity } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

class ScanScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      const { isFocused } = this.props;
      return (
        <View style={{ flex: 1 }}>
          {isFocused && <Camera style={{ flex: 1 }} type={this.state.type} />}
        </View>
      );
    }
  }
}

export default withNavigationFocus(ScanScreen);
