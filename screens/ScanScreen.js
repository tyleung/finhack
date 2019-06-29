import React from 'react';
import { View, Text, Platform, TouchableOpacity, Button } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import axios from 'axios';

class ScanScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  snap = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      let d = new FormData();
      d.append('picture', {
        uri: photo.uri,
        name: 'receipt.jpg',
        type: 'image/jpg'
      });
      axios.post('https://8ff20e70.ngrok.io/test', d, {
        headers: {
          accept: 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data;`
        }
      });
    }
  };

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
          {isFocused && (
            <Camera
              style={{ flex: 1 }}
              type={this.state.type}
              ref={ref => {
                this.camera = ref;
              }}
            >
              <View
                style={{
                  margin: 20
                }}
              >
                <Button
                  onPress={() => {
                    this.snap();
                  }}
                  title="Capture"
                />
              </View>
            </Camera>
          )}
        </View>
      );
    }
  }
}

export default withNavigationFocus(ScanScreen);
