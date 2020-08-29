import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import { View, Text,StyleSheet, FlatList, ToastAndroid, Keyboard, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';





  const Item = ({ mensg }) => (
    <View style={styles.item}>
    <Text style={{padding:10}}>{mensg}</Text>
    </View>
  );


export default function ListMensg({route, navigation}){

    const DATA = [];

    const [listMensg, setList] = useState(DATA);
    const [novaMensg, newSetMensg] = useState("");


    async function addItem(texto){
      let m = texto;
      setList([... listMensg, novaMensg]);
      Keyboard.dismiss; //Minimizar o teclado
      newSetMensg("");
    }

    async function excluirMensg(){
      ToastAndroid.show("Excluir",ToastAndroid.show);
    }


    return (
      <View style={styles.container}>

        <FlatList
          data={listMensg}
          keyExtractor = {item => item.toString()} //id do objeto, funciona como um hash
          renderItem={({item})=>
          <View style={styles.item}>
            <View style={{alignItems:"center",flexDirection:"row", justifyContent:"space-around"}}>
              <View>
                <Text style={{marginTop:5,paddingStart:10}}>{item}</Text>
              </View>
              <View style={{alignItems:"center", backgroundColor:"#F00", marginEnd:20, height:30, width:70, borderRadius:24, marginStart:100}}>
                <TouchableOpacity onPress={()=> excluirMensg(item)}>
                <Text style={{color:"#FFF", alignSelf:"center", marginTop:5}}>Excluir</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        }/>

        <View style={styles.divInput}>
          <TextInput value={novaMensg} onChangeText={text => newSetMensg(text)} placeholder="Digite a nova mensagem:" placeholderTextColor="#000" style={{backgroundColor:"#D3D3D3", width:280, borderRadius:24, paddingStart:10, flex:1}}></TextInput>
          <TouchableOpacity onPress={()=>addItem()} style={{backgroundColor:"#A020F0", height:30, width:80,borderRadius:24}}>
            <Text style={{color:"#FFF", alignSelf:"center", marginTop:5}}>Enviar</Text>
          </TouchableOpacity>

        </View>





      </View>
    );
  }

 const styles = StyleSheet.create({
    FlatList:{
        flex:1,
        display:"flex",
    },

    divInput:{
      justifyContent:"space-between",
      alignItems:"center",
      margin:10,
      flexDirection:"row"
    },

    item:{
        backgroundColor:"#D3D3D3",
        marginTop:10,
        width:"80%",
        borderRadius:24,
        height:70,
        alignSelf:"center",
        flexWrap:"wrap", //todos os itens que nao caberem na tela vão pra baixo
        justifyContent:"center",
    },

    container:{
      flex:1,
      display:"flex",
    }

 });
