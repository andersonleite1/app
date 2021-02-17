import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttons: {
    flex: .25,
    flexDirection: 'row',
    // backgroundColor: '#d5eb34'
  },
  connect: {
    width: '45%',
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'green',
    borderRadius: 5,
    margin: 5,
  },
  voiceCommand: {
    width: '45%',
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'red',
    borderRadius: 5,
    margin: 5,
  },
});

export default styles;