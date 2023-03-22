import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import {HomeStackParamList} from '../types/navigation';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Chapters" component={HomeScreen} />
      <HomeStack.Screen name="Chapter" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}
