import { View, Text, ActivityIndicator } from "react-native";

export default function LoaderOverlay(){

  return(
    <View className="flex-1 items-center justify-center gap-5">
      <Text className="font-bold text-xl">Please Wait...</Text>
      <ActivityIndicator size={40} />
    </View>
  )
}
