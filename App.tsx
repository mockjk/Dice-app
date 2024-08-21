
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screen/Home';
import { useContext } from 'react';
import History from './src/screen/History';
import { HistoryProvider } from './src/context/context';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <HistoryProvider>
      <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="History" component={History} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </HistoryProvider>
  );
}