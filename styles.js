import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    alignItems: "center",
    justifyContent: "center",
  },
  text :{
    textAlign:"center",
    fontFamily: "Palatino",
    fontSize: 20,
    color: "white"
  },
  image: {
    height:50,
    width:150,
    backgroundColor: "#2D6949",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 10,
    alignItems: 'center',
    justifyContent:'center',
  },
  circle:{
    height:300,
    width:300,
    backgroundColor: "#91E2AF",
    borderRadius: 300/2,
    paddingTop: 10,
    paddingRight: 50,
    marginBottom: 30,
    paddingLeft: 50,
    borderColor:"#2D6949",
    borderWidth: 10,
  },
  water:{
    height:100,
    width:100,
    borderRadius: 100/2,
    paddingTop: 10,
    paddingRight: 50,
    marginBottom: 30,
    paddingLeft: 50,
    bottom: 0,
  },
  timer:{
    paddingBottom: 50,
    alignItems: "center",
    fontFamily: "Palatino",
    fontSize: 61,
    color:"#2D6949",
  }
});