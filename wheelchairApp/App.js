import React from 'react';
import { 
  StyleSheet, 
  SafeAreaView,
} from 'react-native';

import Menu           from './src/components/Menu';
import BtnControllers from './src/components/BtnControllers';
import BtnNavigation  from './src/components/BtnNavigation';
import DescriptionApp from './src/components/DescriptionApp';
import BtnStop from './src/components/BtnStop';
import VersionApp from './src/components/VersionApp';
import ChatBot from './src/components/ChatBot';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>        
        <Menu             />
        <DescriptionApp  />
        <BtnControllers />
        <BtnNavigation />
        <BtnStop      />
        <VersionApp  />
        <ChatBot    />
      </SafeAreaView>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 20,
  },   
});
