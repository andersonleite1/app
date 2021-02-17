import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
} from 'react-native';

class VersionApp extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.versionApp}>
          Version 1.0
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  versionApp: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
  },    
});

export default VersionApp;