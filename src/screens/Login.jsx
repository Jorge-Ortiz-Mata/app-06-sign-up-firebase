import { useAtom } from 'jotai';
import { useState } from "react";
import { View, Text, Pressable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import LoaderOverlay from "../components/LoaderOverlay";
import CustomInput from "../components/CustomInput";
import CustomLabel from "../components/CustomLabel";
import CustomButton from "../components/CustomButton";

import { authenticateUser } from "../../util/auth";
import { userAtom } from '../../store/JotaiVariables';

export default function Login(){
  const navigation = useNavigation();
  const [user, setUser] = useAtom(userAtom);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [credentials, setCredentials] = useState({
    email: '', password: ''
  });

  function changeScreen(){
    navigation.replace('SignUp')
  }

  function handleLoginCredentials(value, name){
    setCredentials(prevState => ({
      ...prevState, [name]: value
    }))
  }

  async function LoginFunction(){
    setIsAuthenticating(true);
    try {
      const response = await authenticateUser(credentials.email, credentials.password);
      setUser({email: response.data.email, token: response.data.idToken})
    } catch {
      Alert.alert('Authentication failed', 'An error ocurred. Try later again.')
    }
    setIsAuthenticating(false)
  }

  if(isAuthenticating) return <LoaderOverlay />

  return(
    <View className="flex-1 justify-center">
      <Text className="text-center my-5 font-bold text-2xl">Login Screen</Text>

      <View className="m-5">
        <CustomLabel text="Enter your email:" />
        <CustomInput handleCredentials={handleLoginCredentials} name="email" />
      </View>

      <View className="m-5">
        <CustomLabel text="Enter your password:" />
        <CustomInput handleCredentials={handleLoginCredentials} name="password" />
      </View>

      <View className="m-5 items-center justify-center">
        <CustomButton text="Login" sendData={LoginFunction} />
      </View>

      <Pressable className="justify-center items-center mt-5" onPress={changeScreen}>
        <Text className="font-bold underline">Are you new?</Text>
      </Pressable>
    </View>
  )
}
