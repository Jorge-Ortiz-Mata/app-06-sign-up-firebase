import { NavigationContainer } from '@react-navigation/native';
import AuthScreens from './AuthScreens';
import AppScreens from './AppScreens';
import { useAtom } from 'jotai';
import { userAtom } from '../store/JotaiVariables';

export default function Index() {
  const [user] = useAtom(userAtom);

  return (
    <NavigationContainer>
      { user ? <AppScreens /> : <AuthScreens /> }
    </NavigationContainer>
  )
}
