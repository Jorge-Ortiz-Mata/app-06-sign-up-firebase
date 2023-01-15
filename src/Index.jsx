import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthScreens from './AuthScreens';
import AppScreens from './AppScreens';
import { userAtom } from '../store/JotaiVariables';
import LoaderOverlay from './components/LoaderOverlay';

export default function Index() {
  const [initialize, setInitialize] = useState(true);
  const [userStored, setUserStored] = useState(null)
  const [user, setUser] = useAtom(userAtom);

  async function getUserStored() {
    const getUser = await AsyncStorage.getItem('userStore');
    setUser(JSON.parse(getUser));
    setUserStored(getUser);
    setInitialize(false);
  }

  getUserStored();

  if(initialize) return <LoaderOverlay />;

  return (
    <NavigationContainer>
      { user ? <AppScreens /> : <AuthScreens /> }
    </NavigationContainer>
  )
}
