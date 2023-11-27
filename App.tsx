import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ScreenInitial } from "./src/screens/ScreenInitial";
import { ScreenHome } from "./src/screens/ScreenHome";
import { ScreenMovieDatails } from './src/screens/ScreenMovieDetails';

type AppStackParamList = {
  ScreenInitial: undefined;
  ScreenHome: undefined;
  ScreenMovieDatails: undefined;
};

const AppStack = createNativeStackNavigator<AppStackParamList>();

export default function App() {
  return (
  <NavigationContainer>
    <AppStack.Navigator>
      <AppStack.Screen name="ScreenInitial" component={ScreenInitial} options={{headerShown:false}}/>
      <AppStack.Screen name="ScreenHome" component={ScreenHome} options={{headerShown:false}}/>
      <AppStack.Screen name="ScreenMovieDatails" component={ScreenMovieDatails} options={{headerShown:false}}/>
    </AppStack.Navigator>
  </NavigationContainer>
  );
}
