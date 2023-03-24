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
import {store, useStoreState} from './src/features/auth';
import {ProgressStore} from './src/features/progress';
import {getProgresses, storeProgresses} from './src/services/progress';
import {ReadProgress} from './src/types/progress';

const Tab = createMaterialBottomTabNavigator<RootTabParamList>();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider>
      <StoreProvider store={store}>
        <ProgressStore.Provider>
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
        </ProgressStore.Provider>
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
  const {userToken, username} = useStoreState(state => state.auth);
  const progressMap = ProgressStore.useStoreState(
    state => state.progress.progresses,
  );
  const setProgress = ProgressStore.useStoreActions(
    actions => actions.setProgress,
  );

  useEffect(() => {
    if (!username || !progressMap.length) {
      return;
    }
    const progresses: ReadProgress[] = [];
    for (let progress of progressMap.values()) {
      progresses.push(progress);
    }
    storeProgresses(username, progresses);
  }, [username, progressMap]);

  useEffect(() => {
    if (!username) {
      return;
    }
    getProgresses(username).then(progresses => {
      progresses.forEach(p => setProgress(p));
    });
  }, [username]);

  useEffect(() => {
    console.log(userToken);
  }, [userToken]);

  return <Box flex={1}>{!!userToken ? children : <LoginScreen />}</Box>;
}
