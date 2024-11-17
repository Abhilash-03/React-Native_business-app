import { StyleSheet } from "react-native";
import {Colors} from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading : {
     fontSize: 30,
     fontFamily: 'karla-bold'
  },
  loginContainer: {
     marginTop: 80,
     alignItems: 'center',
  },
  loginImg: {
    height: 450,
    width: 220,
    borderWidth: 6,
    borderRadius: 20,
    borderColor: 'black'
  },
  loginArea: {
    backgroundColor: '#fff',
    paddingHorizontal: 3,
    marginTop: -30,
    
  },
  highlightedText: {
    color: Colors.PRIMARY,
    fontFamily: 'ubuntu-bold'
  },
  subHeading: {
    fontSize: 30,
    color: Colors.GREY,
    fontFamily: 'ubuntu-medium',
    paddingVertical: 20,
    textAlign: 'center'
  },
  para: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'karla-regular',paddingHorizontal: 5,
    color: Colors.GREY
  },
  btn: {
    backgroundColor: Colors.BTN,
    width: '70%',
    marginHorizontal: 'auto',
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 10,
    marginVertical: 13
  },
  btnText : {
    color: 'white',
    textAlign: 'center',
    fontSize: 17,
    fontFamily: 'karla-bold'
  }
})

export default styles;