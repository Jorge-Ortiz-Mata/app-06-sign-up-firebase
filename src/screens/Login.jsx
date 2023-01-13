import { View, Text, Pressable } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomLabel from "../components/CustomLabel";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

export default function Login(){
  const navigation = useNavigation();

  function changeScreen(){
    navigation.replace('SignUp')
  }

  return(
    <View className="flex-1 justify-center">
      <Text className="text-center my-5 font-bold text-2xl">Login Screen</Text>

      <View className="m-5">
        <CustomLabel text="Enter your email:" />
        <CustomInput />
      </View>

      <View className="m-5">
        <CustomLabel text="Enter your password:" />
        <CustomInput />
      </View>

      <View className="m-5 items-center justify-center">
        <CustomButton text="Login" />
      </View>

      <Pressable className="justify-center items-center mt-5" onPress={changeScreen}>
        <Text className="font-bold underline">Are you new?</Text>
      </Pressable>
    </View>
  )
}
