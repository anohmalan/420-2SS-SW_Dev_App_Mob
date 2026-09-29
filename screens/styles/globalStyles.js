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
    padding: 20
  },
  text: {
    fontSize: fontSizes.ml,
  },
  textComponent: {color: colors.textWhite, fontSize: fontSizes.md, fontWeight: 'bold'}
});
