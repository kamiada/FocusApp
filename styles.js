import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text :{
    textAlign:"center",
    fontFamily: "Palatino",
    fontSize: 20,
  },
  image: {
    height:50,
    width:150,
    backgroundColor: "pink",
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
    backgroundColor: "pink",
    borderRadius: 300/2,
    paddingTop: 10,
    paddingRight: 50,
    marginBottom: 30,
    paddingLeft: 50,
    borderColor:"red",
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
  }
});