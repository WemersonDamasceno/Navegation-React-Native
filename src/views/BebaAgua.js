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
  Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { set } from 'react-native-reanimated';

  let porcentagem1 = 0;
  let quantidade1 = 2000;
  let consumido1 = 0;
export default function BebaAgua({navigation}) {


  const [porcentagem, setPorcentagem] = useState("0");
  const [consumido, setConsumido] = useState("0");
  const [situacao, setSituacao] = useState("Ruim");



  function beberAgua(){
    consumido1 += 200;
    setConsumido(consumido1);

    if(consumido1 <= 1000){
      setSituacao("Ruim")
    }else if(consumido1 >= 1001 && consumido1 <= 1999){
      setSituacao("Razoável");
    }else{
      setSituacao("Ótimo!");
    }

    porcentagem1 = Math.floor((consumido1/2000)*100);
    setPorcentagem(porcentagem1);

  }

  return(
    <View>
      <ImageBackground source={require("NavegationsScreens/src/img/fundoagua.jpg")} style={styles.bgimage}>
      </ImageBackground>

      <View style={styles.porcentagem}>
        <Text style={styles.porcText}>{porcentagem}%</Text>
      </View>

      <View style = {styles.bodyValores}>
        <View>
            <Text style={styles.etiqueta}>Quantidade</Text>
            <Text style={styles.valores}>2000 ml</Text>
          </View>

          <View>
            <Text style={styles.etiqueta}>Consumido</Text>
            <Text style={styles.valores}>{consumido} ml</Text>
          </View>

          <View>
            <Text style={styles.etiqueta}>Situação</Text>
            <Text style={styles.valores}>{situacao}</Text>
          </View>

      </View>

      <TouchableOpacity style ={styles.btnBeberAgua} onPress={()=> beberAgua()}>
        <Text style={{color:"#FFF", fontSize:19}}>Beber 200ml</Text>
      </TouchableOpacity>

    </View>
  );


}
const styles = StyleSheet.create({
  body:{
    flex:1,
  },

  btnBeberAgua:{
    backgroundColor:"#00BFFF",
    height:130,
    width:130,
    alignItems:"center",
    alignSelf:"center",
    marginTop:10,
    justifyContent:"center",
    borderRadius:100
  },

  porcentagem:{
    width:200,
    borderRadius:100,
    backgroundColor:"#00BFFF",
    height:200,
    marginTop:50,
    justifyContent:"center",
    alignSelf:"center",
  },

  porcText:{
    color:"#FFF",
    fontSize:70,
    alignSelf:"center",
    justifyContent:"center",
    fontWeight:"bold",
  },

  bodyValores:{
    height:80,
    marginTop:120,
    width:"95%",
    flexDirection:"row",
    justifyContent:"space-between",
    marginLeft:10,
    marginRight:10,
  },

  etiqueta:{
    fontSize:24,
    marginTop:0,
    color:"#FFF",
    fontWeight:"bold",
    alignItems:"center",
  },

  valores:{
    fontSize:20,
    color:"#FFF",
    fontWeight:"bold",
    alignSelf:"center"
  },

  bgimage:{
    flex: 1,
    height:700,
    opacity:1,
    width:"100%",
  },
});
