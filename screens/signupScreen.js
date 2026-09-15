import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { InputRect } from "../components/InputRect";
import { ButtonHighlight } from "../components/ButtonHighlight";

export default function SignupScreen(){
 return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={[styles.body, {justifyContent: 'center', alignItems: 'center'}]}>
         
          <InputRect placeholder='Username'placeholderTextColor="#FFFFFF" />

          <InputRect placeholder='Password'placeholderTextColor="#FFFFFF" />

          <InputRect placeholder='Password confirmation'placeholderTextColor="#FFFFFF" />

          <ButtonHighlight label={"Create my account"} styleText={styles.textComponent}/>

        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}