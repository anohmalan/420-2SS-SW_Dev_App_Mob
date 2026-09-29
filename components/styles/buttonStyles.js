import { StyleSheet } from "react-native";
import { colors, fontSizes } from "../../theme";

export const ButtonStyles = StyleSheet.create({
  button:{
    backgroundColor: colors.buttonPrimary, 
    width: "auto",
    padding: 10,
    alignItems: 'center', 
    height: 40, 
    justifyContent: "center", 
    borderRadius: 3
  },
})