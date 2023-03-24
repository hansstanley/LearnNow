/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {PropsWithChildren, useEffect} from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import ProfileScreen from './src/screens/ProfileScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeStackScreen from './src/stacks/HomeStackScreen';
import {Box, NativeBaseProvider} from 'native-base';
import LoginScreen from './src/screens/LoginScreen';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {RootTabParamList} from './src/types/navigation';
import {StoreProvider} from 'easy-peasy';
import {store, useStoreState} from './src/features/auth/auth';

const Tab = createMaterialBottomTabNavigator<RootTabParamList>();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider>
      <StoreProvider store={store}>
        <NativeBaseProvider>
          <NavigationContainer>
            <AuthGuard>
              <Tab.Navigator>
                <Tab.Screen
                  name="Learn"
                  component={HomeStackScreen}
                  options={{
                    tabBarIcon: ({color, focused}) => (
                      <Icon
                        name={focused ? 'home' : 'home-outline'}
                        size={20}
                        color={color}
                      />
                    ),
                  }}
                />
                <Tab.Screen
                  name="Profile"
                  component={ProfileScreen}
                  options={{
                    tabBarIcon: ({color, focused}) => (
                      <Icon
                        name={focused ? 'person' : 'person-outline'}
                        size={20}
                        color={color}
                      />
                    ),
                  }}
                />
              </Tab.Navigator>
            </AuthGuard>
          </NavigationContainer>
        </NativeBaseProvider>
      </StoreProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

function AuthGuard({children}: PropsWithChildren) {
  const userToken = useStoreState(state => state.auth.userToken);

  useEffect(() => {
    console.log(userToken);
  }, [userToken]);

  return <Box flex={1}>{!!userToken ? children : <LoginScreen />}</Box>;
}
