import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './screens/SignUp';
import Login from './screens/Login';

export default function AuthScreens() {
  const Stack = createNativeStackNavigator();

  return(
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Signup' component={SignUp} />
    </Stack.Navigator>
  )
}
