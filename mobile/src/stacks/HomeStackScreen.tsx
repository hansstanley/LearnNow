import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ChapterScreen from '../screens/ChapterScreen';
import {HomeStackParamList} from '../types/navigation';
import SectionScreen from '../screens/SectionScreen';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Chapter"
        component={ChapterScreen}
        options={({route}) => ({title: route.params.chapter.title})}
      />
      <HomeStack.Screen
        name="Section"
        component={SectionScreen}
        options={({route}) => ({title: route.params.section.title})}
      />
    </HomeStack.Navigator>
  );
}
