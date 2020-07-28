import {StyleSheet} from 'react-native';

export default StyleSheet.create({
background:{
  flex: 1,
  flexDirection: "column" ,
  alignItems: "center",
  justifyContent: "center",
},
button:{
  marginBottom:150,
  height:50,
  width:250,
  backgroundColor: "#2D6949",
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  marginTop: 10,
  alignItems: 'center',
  justifyContent:'center',
},
dropdownStyle:{
  flex:1,
  flexShrink: 3,
  height: 64,
  alignItems: 'center',
  justifyContent:'center'
},
timer:{
  paddingTop:90,
  alignItems: "center",
  justifyContent:'center',
  fontFamily: "Palatino",
  fontSize: 61,
  color:"#2D6949",
},
lettering:{
  textAlign:"center",
  fontFamily: "Palatino",
  fontSize: 20,
  color: "white"
},
wave_container:{
  flex: 1,
  flexDirection: "column" ,
  alignItems: "center",
  justifyContent: "center",
  marginVertical: 10,
  marginHorizontal: 20,
},
waveball:{
  // width: 100,
  // aspectRatio: 3/4,
  // borderRadius: 50,
  // overflow: "hidden",
  height:300,
  width: 300,
  aspectRatio: 3/4,
  borderRadius: 300/2,
  overflow: "hidden",
  paddingTop: 10,
  paddingRight: 50,
  marginBottom: 30,
  paddingLeft: 50,
}
});