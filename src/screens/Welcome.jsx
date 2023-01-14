import { useAtom } from 'jotai';
import { View, Text, Button } from "react-native";
import { userAtom } from "../../store/JotaiVariables";

export default function Welcome(){
  const [user, setUser] = useAtom(userAtom);

  function deleteSession(){
    setUser(null)
  }

  return(
    <View className="flex-1 items-center justify-center">
      <Text className="mb-5 font-bold text-2xl">Welcome to the Firebase App</Text>
      <Text>You've successfully logged in.</Text>
      <View className="my-5"><Button title="Log Out" onPress={deleteSession} /></View>

    </View>
  )
}
