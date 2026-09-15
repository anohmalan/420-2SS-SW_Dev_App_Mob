import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#387E7F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    width:'90%',
    height: 'auto',
    gap: "5%",
    padding: 5
  },
  input: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 8,
    color:"#FFFFFF",
    height: '6%' , 
    width: '70%'
  },
  descripInput:{
    width: '100%', 
    height: '55%', 
    verticalAlign: 'top'
  },

  text: {
    fontSize: 18,
  },
  bouton:{
    backgroundColor: "#F2A93B", 
    width: "auto",
    padding: 10,
    alignItems: 'center', 
    height: "6%", 
    justifyContent: "center", 
    borderRadius: 3
  },
  textComponent: {color: "#FFFFFF", fontSize: 16, fontWeight: 'bold'}
});
