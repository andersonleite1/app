import React from 'react';
import { 
    Text, 
    View, 
    TouchableOpacity, 
} from 'react-native';

import buttonController from '../styles/buttonsControllers';

class BtnControllers extends React.Component {
  render() {
    return (
      <View style={buttonController.buttons}>
          <TouchableOpacity style={buttonController.connect}>
            <Text style={{
              textAlign: 'center', 
              fontSize: 20, 
              color: '#FFF'
            }}>
              Connect
            </Text>         
          </TouchableOpacity>

          <TouchableOpacity style={buttonController.voiceCommand}>
            <Text style={{
              textAlign: 'center', 
              fontSize: 20, 
              color: '#FFF'
            }}>
              Voice Command
            </Text>         
          </TouchableOpacity>
        </View>
    );
  }
}

export default BtnControllers;