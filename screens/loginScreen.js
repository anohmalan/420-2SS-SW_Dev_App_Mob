import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { InputRect } from "../components/InputRect";
import { ButtonHighlight } from "../components/ButtonHighlight";


export default function LoginScren(){
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={[styles.body, {justifyContent: 'center', alignItems: 'center'}]}>

          <InputRect placeholder='Username' placeholderTextColor="#FFFFFF"/>

          <InputRect placeholder='Password'placeholderTextColor="#FFFFFF" />

          <ButtonHighlight label={"Login"} styleText={styles.textComponent}/>

          <ButtonHighlight label={"Sign up!"} styleText={{color: "#4a32c1"}} styleButton={{backgroundColor: "transparent"}}/>

        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}