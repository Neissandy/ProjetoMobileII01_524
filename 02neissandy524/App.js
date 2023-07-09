//import "assets / scss / blk-design-system-react.scss";
//import "assets / css / nucleo-icons.css";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { useFonts } from 'expo-font';

//Código usado para tentar adicionar imagem OBS: ERRO
//Tentei várias formas de adicionar fonts diferentes nos textos e também não consegui.
//<Image source={require('../assets/Sandy.jpg')} />

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={styles.titulo} >Instituto Federal de Alagoas - Ifal</Text>
        <Text style={styles.subtitulo} >Campus Palmeira dos Índios</Text>
        
          <View style={styles.container2}>
            <Text >Bem-Vindo ao App!!</Text>
 
            <Text > {`Informações do Aluno(a)\n`} </Text>      
            <Text>("Aqui ficaria a imagem do aluno") </Text>
          </View>

          <View style={styles.container3}>
            <Text >Nome: Neissandy da Silva Costa</Text>
            <Text >Matrícula: 2017310890</Text>
            <Text >Turma: 524 - Informática Vespertino</Text>
          </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    backgroundColor: 'powderblue',
    alignItems: 'center',
    top: 20,

  },
  container3: {
    backgroundColor: 'powderblue',
    top: 50,
  },
  titulo:{
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
    fontSize: 20,
    //fontFamily: '',
  },
  subtitulo:{
    alignItems: 'center',
    justifyContent: 'center',
    color: 'green',
    fontSize: 15.5,
  }
});
