import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import LogIn from './screens/LogIn';
import SignUp from './screens/SignUp';
import OwnerDash from './screens/OwnerDash';
import StudentDash from './screens/StudentDash';
import DriverDash from './screens/DriverDash';
import DriverMorning from './screens/DriverMorning';
import OptionPage from './screens/OptionPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Option'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='Option' component={OptionPage} />
        <Stack.Screen name='LogIn' component={LogIn} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='StudDash' component={StudentDash} />
        <Stack.Screen name='OwnerDash' component={OwnerDash} />
        <Stack.Screen name='DriverDash' component={DriverDash} />
        <Stack.Screen name='DriverMorning' component={DriverMorning} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
