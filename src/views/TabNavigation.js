import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text,Button,ToastAndroid} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Tab = createBottomTabNavigator();
import Home from './Home';
import Contatos from './Contatos';
import BebaAgua from './BebaAgua';
import Details2 from './Details2';

//const Stack = createStackNavigator();

export default function TabNavigation({navigation}) {


      return (
      <>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#A020F0',}}>

        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel:"Home",
            tabBarIcon: ({color,size}) => (
              <MaterialCommunityIcons name="home" color={color} size={30}/>)}}>
          </Tab.Screen>

          <Tab.Screen
            name="BebaAgua"
            component={BebaAgua}
            options={{
              tabBarLabel: 'BebaAgua',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="cup-water" color={color} size={30} />
              ),//tabBarBadge: 3, para colocar um numero em cima do icone
            }}>
          </Tab.Screen>

          <Tab.Screen
            name="Details"
            component={Details2}
            options={{tabBarLabel: 'Details',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="details" color={color} size={30} />
              ),}}>
          </Tab.Screen>

          <Tab.Screen
            name="Contatos"
            component={Contatos}
            options={{
              tabBarLabel:"Contatos",
              tabBarIcon: ({color,size}) => (
                <MaterialCommunityIcons name="contacts" color={color} size={30}/>
              )}}>
          </Tab.Screen>
        </Tab.Navigator>
      </>
    );
  }
