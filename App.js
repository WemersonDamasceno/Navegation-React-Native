import 'react-native-gesture-handler';
import * as React from 'react';
//import { View, Text,Button, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//As telas que vou usar
import Details from './src/views/Details';
import Home from './src/views/Home';
import ListMensg from './src/views/ListMensg';
import BebaAgua from './src/views/BebaAgua';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home" component={Home}
          options={{
            title:"Bem vindo",
            headerStyle:{backgroundColor:"#A020F0"}, //Cor do header
            headerTintColor:"#eee", //Cor da font
            headerTitleStyle:{fontWeight:"bold", alignSelf:"center"}
          }}/>
        <Stack.Screen name="Details" component={Details}/>
        <Stack.Screen name="ListMensg" component={ListMensg}/>
        <Stack.Screen name="BebaAgua" component={BebaAgua}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
