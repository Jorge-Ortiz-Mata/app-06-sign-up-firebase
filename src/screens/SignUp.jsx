import { useState } from "react";
import { useAtom } from 'jotai';
import { View, Text, Pressable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomInput from "../components/CustomInput";
import CustomLabel from "../components/CustomLabel";
import CustomButton from "../components/CustomButton";
import LoaderOverlay from "../components/LoaderOverlay";
import { createUser } from '../../util/auth'
import { userAtom } from '../../store/JotaiVariables';

export default function SignUp(){
  const navigation = useNavigation();
  const [user, setUser] = useAtom(userAtom);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [credentials, setCredentials] = useState({
    email: '', password: '', confirmPassword: ''
  });

  function changeScreen(){
    navigation.replace('Login')
  }

  function handleLoginCredentials(value, name){
    setCredentials(prevState => ({
      ...prevState, [name]: value
    }))
  }

  async function signUpFunction(){
    setIsAuthenticating(true);
    try {
      const response = await createUser(credentials.email, credentials.password);
      setUser({email: response.data.email, token: response.data.idToken})
    } catch {
      Alert.alert('Authentication failed', 'An error ocurred. Try later again.')
    }
    setIsAuthenticating(false)
  }

  if(isAuthenticating) return <LoaderOverlay />

  return(
    <View className="flex-1 justify-center">
      <Text className="text-center my-5 font-bold text-2xl">Sign Up Screen</Text>

      <View className="m-5">
        <CustomLabel text="Enter your email:" />
        <CustomInput handleCredentials={handleLoginCredentials} name="email" />
      </View>

      <View className="m-5">
        <CustomLabel text="Enter your password:" />
        <CustomInput handleCredentials={handleLoginCredentials} name="password" />
      </View>

      <View className="m-5">
        <CustomLabel text="Confirm your password:" />
        <CustomInput handleCredentials={handleLoginCredentials} name="confirmPassword" />
      </View>

      <View className="m-5 items-center justify-center">
        <CustomButton text="Sign Up" sendData={signUpFunction} />
      </View>

      <Pressable className="justify-center items-center mt-5" onPress={changeScreen}>
        <Text className="font-bold underline">Do you have an account?</Text>
      </Pressable>
    </View>
  )
}
