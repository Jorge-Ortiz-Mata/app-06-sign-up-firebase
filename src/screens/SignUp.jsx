import { View, Text, Pressable } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomLabel from "../components/CustomLabel";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function SignUp(){
  const navigation = useNavigation();
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

  console.log(credentials)

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
        <CustomButton text="Sign Up" />
      </View>

      <Pressable className="justify-center items-center mt-5" onPress={changeScreen}>
        <Text className="font-bold underline">Do you have an account?</Text>
      </Pressable>
    </View>
  )
}
