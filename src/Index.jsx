import { NavigationContainer } from '@react-navigation/native';
import AuthScreens from './AuthScreens';
import AppScreens from './AppScreens';

export default function Index() {
  const user = false;

  return (
    <NavigationContainer>
      { user ? <AppScreens /> : <AuthScreens /> }
    </NavigationContainer>
  )
}
