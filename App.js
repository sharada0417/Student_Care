import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './components/Login';

const Stack = createNativeStackNavigator();
export default function App() {
  const Stack = createNativeStackNavigator();
  return (

    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='home'
          screenOptions={{
            headerStyle: { backgroundColor: '#5b1166' },
          }}
        >
          <Stack.Screen 
                 name="home" 
                 component={Login} 
                options={{ 
                title: "UOV Student Care", 
                headerTitleStyle: {
                 color: 'white', 
                },
                headerTitleAlign: 'center', 
              }}  
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

  );
}

