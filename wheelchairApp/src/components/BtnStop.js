import React from 'react';
import { 
    Text, 
    View, 
    TouchableOpacity, 
} from 'react-native';

import stopBtn from '../styles/btnStop';

class BtnStop extends React.Component {
  render() {
    return (
      <View style={stopBtn}>
        <TouchableOpacity style={stopBtn.stop}>
          <Text style={{
            textAlign: 'center', 
            fontSize: 24, 
            fontWeight: 'bold',
            color: '#FFF'
          }}>
            Stop
          </Text>         
        </TouchableOpacity>
      </View>
    );
  }
}

export default BtnStop;