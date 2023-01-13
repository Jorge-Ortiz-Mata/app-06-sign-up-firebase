import { View, Text, Pressable } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomLabel from "../components/CustomLabel";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

export default function SignUp(){
  const navigation = useNavigation();

  function changeScreen(){
    navigation.replace('Login')
  }

  return(
    <View className="flex-1 justify-center">
      <Text className="text-center my-5 font-bold text-2xl">Sign Up Screen</Text>

      <View className="m-5">
        <CustomLabel text="Enter your email:" />
        <CustomInput />
      </View>

      <View className="m-5">
        <CustomLabel text="Enter your password:" />
        <CustomInput />
      </View>

      <View className="m-5">
        <CustomLabel text="Confirm your password:" />
        <CustomInput />
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
