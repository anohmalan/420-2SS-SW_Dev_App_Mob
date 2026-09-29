import { StyleSheet } from "react-native";
import { colors, fontSizes } from "../../theme";

export const PickerStyles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  thePicker:{ 
    color: colors.second, 
    backgroundColor: colors.transp, 
    borderWidth:0 
  }
})