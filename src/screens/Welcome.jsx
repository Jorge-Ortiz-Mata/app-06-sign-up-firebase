import { useAtom } from 'jotai';
import { View, Text, Button } from "react-native";
import { userAtom } from "../../store/JotaiVariables";
import { useEffect, useState } from 'react';
import { getMessage } from '../../util/auth';

export default function Welcome(){
  const [user, setUser] = useAtom(userAtom);
  const [message, setMessage] = useState('');

  function deleteSession(){
    setUser(null)
  }

  useEffect(() => {
    getMessage(user).then(res => setMessage(res.data)).catch(err => console.log(err));
  }, []);

  return(
    <View className="flex-1 items-center justify-center">
      <Text className="mb-5 font-bold text-2xl">Welcome to the Firebase App</Text>
      <Text>You've successfully logged in.</Text>
      <Text className="my-5">This is the message: {message}</Text>
      <View className="my-5"><Button title="Log Out" onPress={deleteSession} /></View>
    </View>
  )
}
