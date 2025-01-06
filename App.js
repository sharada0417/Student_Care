import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './components/Login';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='home'
          screenOptions={{
            headerStyle:{
              backgroundColor:"#5b1166",
            },
            headerTintColor:"#fff",
            hedaerTitle:{
              color:"#fff",
            },
            headerTitleAlign:"center"
          }}
        >
          <Stack.Screen
           name='login'
           component={Login}
           options={{title:"UOV Student Care"}}
           />
           <Stack.Screen
           name='home'
           component={Home}
           options={{title:"UOV StudentCare"}}
           />
          
        </Stack.Navigator>
      </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  conatiner:{
    flex:1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center"
  }
})