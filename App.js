import React from 'react';
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useFonts as useBaloo, BalooTamma2_400Regular } from "@expo-google-fonts/baloo-tamma-2";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import Dashboard from './src/components/Dashboard'
import theme from './src/themes/index'

const Stack = createStackNavigator();


const App = () => {

  const [balooLoaded] = useBaloo({
    BalooTamma2_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!balooLoaded || !latoLoaded) {
    return null;
  }

  return ( 
    <>
    <ThemeProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Dashboard" component={Dashboard} />
        {/* Add other screens to your app's navigation flow */}
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider>
    <ExpoStatusBar style="auto" />
    </>
  );
};

export default App;
