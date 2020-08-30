import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  SectionList,
  Keyboard
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { set } from 'react-native-reanimated';


export default function Contatos({navigation}) {
  const listDATA=[

    {title: "B", data: [
      {nome: "Bruna",
      numero: "(34) 8885-9525",
      key: "1"
      },{nome: "Bianca",
      numero: "(34) 8885-9525",
      key: "2"
      },{nome: "Barbara",
      numero: "(34) 8885-9525",
      key: "3"
      },
    ]},

    {title: "C", data: [
      {nome: "Carlos",
      numero: "(34) 8885-9525",
      key: "4"
      },
    ]},

    {title: "D", data: [
      {nome: "Diogo",
      numero: "(34) 8885-9525",
      key: "7"
      },
      {nome: "Douglas",
      numero: "(34) 8885-9525",
      key: "8"
      },
      {nome: "Daniel",
      numero: "(34) 8885-9525",
      key: "9"
      },
    ]}

  ];

  const [listContatos, setListCtts] = useState(listDATA);
  const [newNumero, setNewNumero] = useState(0);
  const [newNome, setNewNome] = useState("");


  //A seção, letras em cima dos contatos
  function listSectionRender(section){
    return(
      <View>
        <Text style={{color:"#000", backgroundColor:"#DCDCDC"}}>{section.title}</Text>
      </View>
    );
  }
  //O contato
  function listRender(item){
    return(
      <View style={{backgroundColor:"#eee"}}>
        <Text style={{fontSize:19}}>{item.nome}</Text>
        <Text>{item.numero}</Text>
      </View>
    );
  }

  return(
    <View>
      <SectionList
      sections ={listContatos}
      renderItem={({item})=> listRender(item)}
      renderSectionHeader={({section})=> listSectionRender(section)} />



    </View>
  );
}
const styles = StyleSheet.create({

});
