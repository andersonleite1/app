import React from 'react';
import { 
    StyleSheet, 
    View, 
    TouchableOpacity, 
    Image 
} from 'react-native';

class ChatBot extends React.Component {
  render() {
    return (
      <View style={styles.item}>
          <TouchableOpacity >
            <Image style={styles.image} 
            source={require('../assets/images/chatbot.png')}
          />         
          </TouchableOpacity>
        </View>
    ); 
  }
}

const styles = StyleSheet.create({
  item: {  
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // backgroundColor: '#eeee'
  },
  image: {
    width: 92,
    height: 95,
    marginRight: 20,
  },
});

export default ChatBot;