import { View, Text } from "react-native";

export default function Welcome(){

  return(
    <View className="flex-1 items-center justify-center">
      <Text className="mb-5 font-bold text-2xl">Welcome to the Firebase App</Text>
      <Text>You've successfully logged in.</Text>
    </View>
  )
}
