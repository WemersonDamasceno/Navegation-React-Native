import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { View, Text,Button, TextInput, StyleSheet, TouchableOpacity, Image, ToastAndroid} from 'react-native';


export default function Home({navigation}) {
    //Faz a variavel e uma função para setar o valor nela
    //const [title, setTitle] = useState('');
    //const [mens, setMensg] = useState('');

    /*let mensg = {
      mensagem: mens,
      //id: Math.random().toString(10).substring(7)
    }*/
    async function trocarTela(){
        navigation.navigate('Details');
    }

    async function ToastTeste(){
      ToastAndroid.show("HOME", ToastAndroid.LONG);
    }

    return (
      <>


      <View style={styles.container}>

        <Image style={{width:130, height:150, alignSelf:"center"}} source = {require("NavegationsScreens/src/img/fotomensg.png")}></Image>


        <Text style={{color:"#000", fontSize:17, marginTop:20, marginStart:5}}>Digite uma mensagem:📚📝</Text>

        <TouchableOpacity
          style={styles.btnEnviar}
          onPress={()=> trocarTela()}>
          <Text style={{alignItems:"center", marginTop:7,color:"#FFF", fontSize:17}}>Detalhes</Text>
        </TouchableOpacity>

        <Text style={{alignSelf:"center", fontSize:17, marginTop:15}}>Ou</Text>

        <TouchableOpacity style={styles.btnEnviar}
        onPress = {()=> navigation.navigate("BebaAgua")}>
          <Text style={{alignItems:"center", marginTop:7,color:"#FFF", fontSize:17}}>Ja bebeu agua ?</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.btnEnviar}
        onPress = {()=> navigation.navigate("Contatos")}>
          <Text style={{alignItems:"center", marginTop:7,color:"#FFF", fontSize:17}}>Contatos</Text>
        </TouchableOpacity>




      </View>

      </>
    );

}

  const styles = StyleSheet.create({
    btnEnviar: {
      marginTop:20,
      backgroundColor:"#A020F0",
      height:40,
      width:300,
      borderRadius:24,
      alignSelf:"center",
      alignItems:"center",
    },
    inputTxt:{
      marginTop:20,
      height:40,
      width:300,
      alignSelf:"center",
      borderRadius:24,
      paddingStart:10,
      backgroundColor:"#D3D3D3",
      fontSize:17,
      color:"#000",
    },

    container:{
      display:"flex",
      flex:1,
      backgroundColor:"#FFF",
      justifyContent:"center"
    },


  });
