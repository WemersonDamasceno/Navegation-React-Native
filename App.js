/*import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text,Button, TextInput} from 'react-native';
import { NavigationContainer, TabActions} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//As telas que vou usar
import Details from './src/views/Details';
import Home from './src/views/Home';
import ListMensg from './src/views/ListMensg';
import BebaAgua from './src/views/BebaAgua';
import Contatos from './src/views/Contatos';

const Stack = createStackNavigator();

function HomeScreen() {
	return (
		<View>
			<Text>Home!</Text>
		</View>
	);
}



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home" component={Home}
          options={{
            title:"Bem vindo",
            headerStyle:{backgroundColor:"#A020F0"}, //Cor do header
            headerTintColor:"#eee", //Cor da font
            headerTitleStyle:{fontWeight:"bold"}
          }}/>
        <Stack.Screen name="Details" component={Details}/>
        <Stack.Screen name="ListMensg" component={ListMensg}/>
        <Stack.Screen name="BebaAgua" component={BebaAgua} options={{title:"Vamos se hidratar",
            headerStyle:{backgroundColor:"#00BFFF"}, headerTintColor:"#FFF" }}/>
        <Stack.Screen name="Contatos" component = {Contatos}/>
      </Stack.Navigator>

      </NavigationContainer>

  );
}*/
import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

//As telas que vou usar
import TabNavigation from './src/views/TabNavigation';
import Home from './src/views/Home';
import BebaAgua from './src/views/BebaAgua';
import Contatos from './src/views/Contatos';
import ListMensg from './src/views/ListMensg';
import { color } from 'react-native-reanimated';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (


    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home" component={Home}
          options={{
            title:"Bem vindo",
            headerStyle:{backgroundColor:"#A020F0"}, //Cor do header
            headerTintColor:"#eee", //Cor da font
            headerTitleStyle:{fontWeight:"bold"}
          }}/>
        <Stack.Screen name="Details" component={TabNavigation}/>
        <Stack.Screen name="ListMensg" component={ListMensg}/>
        <Stack.Screen name="BebaAgua" component={BebaAgua} options={{title:"Vamos se hidratar",
            headerStyle:{backgroundColor:"#00BFFF"}, headerTintColor:"#FFF" }}/>
        <Stack.Screen name="Contatos" component = {Contatos}/>
      </Stack.Navigator>

      </NavigationContainer>
  );
}
