import React, { Component }from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

Icon.loadFont();

class Screen extends Component {
  render() {
    return (
      <View>
        <SafeAreaView styles={{flex: 1}}>
          <TouchableOpacity 
            style={{ alignItems: 'flex-end', margin: 16}} 
            onPress={this.props.navigation.openDrawer}
          >
            
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFF"
    },
    text: { 
        color: "#161924",
        fontSize: 20,
        fontWeight: "500"
    }
});