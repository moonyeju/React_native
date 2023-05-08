import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from '../screens/ListScreen';
import SignInScreen from '../screens/SignInScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { PRIMARY, WHITE } from '../colors';
import HeaderLeftButton from '../components/HeaderLeftButton';
import HeaderRightButton from '../components/HeaderRightButton';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerTitleAlign: 'center',
        headerTintColor: PRIMARY.DEFAULT,
        headerTitleStyle: { fontWeight: '700' },
        title: 'TODO List',
        headerBackTitleVisible: false,
        headerLeft: HeaderLeftButton,
      }}
    >
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={{ headerRight: HeaderRightButton }}
      />
      <Stack.Screen
        name="Home"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      {/*nameprops -> 대문자 선호 */}
    </Stack.Navigator>
  );
};
export default AuthStack;
