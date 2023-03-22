import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Chapters" component={HomeScreen} />
      <HomeStack.Screen name="Chapter" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}
