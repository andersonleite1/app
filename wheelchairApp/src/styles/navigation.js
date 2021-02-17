import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  control: {
    flex: 1,
  },
  btnVertical: {
    flexDirection: 'column',
    // backgroundColor: '#3437eb',
  },
  btnHorizontal: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    // backgroundColor: '#eb3434',
  },

  BtnUp: {
    marginLeft: 135,
    marginRight: 135,
  },

  BtnRight: {
    marginLeft: 65,
  },

  BtnDown: {
    marginLeft: 135,
    marginRight: 135,
  },
});

export default styles;