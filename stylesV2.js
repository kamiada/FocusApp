import {StyleSheet} from 'react-native';

export default StyleSheet.create({
background:{
  flex: 1,
  flexDirection: "column" ,
  alignItems: "center",
  justifyContent: "center",
},
button:{

},
image:{
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
  justifyContent:'center',
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
}
});