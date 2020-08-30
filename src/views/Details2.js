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

//const Stack = createStackNavigator();

export default function Details({navigation}) {
      //let mensagem = route.params.text;   Pegar obj de outra tela
    //tem q ter o "route" junto com o navigation
    const showToast = () =>{
      //ToastNormal
      //ToastAndroid.show("👏👏Esse aqui é o Toast!👏👏", ToastAndroid.SHORT);

      //Toast Centralizado
      ToastAndroid.showWithGravity(
        "👏👏Esse aqui é o Toast!👏👏",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );

    };

  return (
    <View>

    <Text>Ver o toast</Text>
    <Button title="Botão do Toast" onPress ={()=> showToast()}></Button>
    <Text>Ver a lista de mensagens</Text>
    <Button title="Ver lista" onPress={()=>  navigation.navigate('ListMensg')}></Button>
    <Text>Voltar pra home "voltando"</Text>
    <Button title="voltar pra home" onPress={()=>navigation.goBack()}></Button>
    <Text>Voltar pra home "empilhando telas"</Text>
    <Button title="voltar home push" onPress={()=>navigation.push("Home")}></Button>
    <Text>Voltar pra home "sem empilhar telas"</Text>
    <Button title="voltar home navigate" onPress={()=>navigation.navigate("Home")}></Button>
  </View>
  );
}
