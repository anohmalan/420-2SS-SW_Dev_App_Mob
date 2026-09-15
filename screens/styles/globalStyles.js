import { StyleSheet } from "react-native";
import { colors, fontSizes } from "../../theme";

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
    gap: "5%",
    padding: 5
  },
  body: {
    flex: 1,
    height: 'auto',
    gap: "5%",
    padding: 5
  },
  input: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 8,
    color: colors.second,
    height: '6%' , 
    width: '70%'
  },
  descripInput:{
    width: '100%', 
    height: '55%', 
    verticalAlign: 'top'
  },

  text: {
    fontSize: fontSizes.ml,
  },
  bouton:{
    backgroundColor: colors.buttonPrimary, 
    width: "auto",
    padding: 10,
    alignItems: 'center', 
    height: "6%", 
    justifyContent: "center", 
    borderRadius: 3
  },
  textComponent: {color: colors.textWhite, fontSize: fontSizes.md, fontWeight: 'bold'}
});
