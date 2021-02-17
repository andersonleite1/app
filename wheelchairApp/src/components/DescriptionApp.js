import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
} from 'react-native';

class DescriptionApp extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.descriptionApp}>
          Directional Control
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  descriptionApp: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },    
});


export default DescriptionApp;