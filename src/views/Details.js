import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text,Button,ToastAndroid} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default function Details({route, navigation}) {
    let mensagem = route.params.text;
    if(mensagem.mensagem == ""){
      ToastAndroid.show("Mensagem vazia", ToastAndroid.SHORT);
    }else{
      ToastAndroid.show("Mensagem tem alguma coisa", ToastAndroid.SHORT);
    }
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

        <Text>Conteudo da mensagem</Text>
        <Text style={{fontSize:27}}>{mensagem.mensagem}</Text>




        <Text>Ver o toast</Text>
        <Button title="Botão do Toast" onPress ={()=> showToast()}></Button>
        <Text>Ver a lista de mensagens</Text>
        <Button title="Ver lista" onPress={()=>  navigation.navigate('ListMensg',{txt: mensagem})}></Button>
        <Text>Voltar pra home "voltando"</Text>
        <Button title="voltar pra home" onPress={()=>navigation.goBack()}></Button>
        <Text>Voltar pra home "empilhando telas"</Text>
        <Button title="voltar home push" onPress={()=>navigation.push("Home")}></Button>
        <Text>Voltar pra home "sem empilhar telas"</Text>
        <Button title="voltar home navigate" onPress={()=>navigation.navigate("Home")}></Button>


      </View>


    );
  }
