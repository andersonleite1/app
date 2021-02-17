import React from 'react';
import { 
    StyleSheet, 
    View, 
    TouchableOpacity, 
    Image 
} from 'react-native';

class Menu extends React.Component {
  render() {
    return (
      <View>
          <TouchableOpacity>
            <Image style={styles.menu} 
            source={require('../assets/images/menu.png')}
          />         
          </TouchableOpacity>
        </View>
    ); 
  }
}

const styles = StyleSheet.create({
  menu: {
    width: 35,
    height: 35,
    marginLeft: 10,
  },
});

export default Menu;