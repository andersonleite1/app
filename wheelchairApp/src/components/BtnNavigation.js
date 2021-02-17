import React from 'react';
import { 
  View, 
  TouchableOpacity, 
  Image 
} from 'react-native';

import navigation from '../styles/navigation';

class BntNavigation extends React.Component {
  render() {
    return (
      <View style={navigation.control}>
        <View style={navigation.btnVertical}>
          <TouchableOpacity style={navigation.BtnUp}>
            <Image 
              style={navigation.BtnUpImage} 
              source={require('../assets/images/caret-square-up.png')}
            />
          </TouchableOpacity> 
        </View>

        <View style={navigation.btnHorizontal}>
          <TouchableOpacity style={navigation.BtnLeft}>
            <Image 
              style={navigation.BtnLeftImage} 
              source={require('../assets/images/caret-square-left.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity style={navigation.BtnRight}>
            <Image 
              style={navigation.BtnRightImage} 
              source={require('../assets/images/caret-square-right.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={navigation.btnVertical}>
          <TouchableOpacity style={navigation.BtnDown}>
            <Image 
              style={navigation.BtnDownImage} 
              source={require('../assets/images/caret-square-down.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default BntNavigation;