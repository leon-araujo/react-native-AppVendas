import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView,  TextInput, SafeAreaView, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Home';

function HomeCliente(){
  const Stack = createNativeStackNavigator();
  return(
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name='Cliente' component={Home}/>
    </Stack.Navigator>
  )
}

export default function App() {
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);

  function validarCli() {
    if (name === '') {
      alert('Nome de cliente vazio!');
    } else {
      setOpen(true);
    }
  }

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
            <View style={styles.cabecario}>
              <Text style={styles.title}>Loja do Leonardo Moura</Text>
            </View>
            <View style={styles.home}>
              <TextInput
              placeholder='Nome do cliente'
              style={styles.cliNome}
              value={name}
              onChangeText={(texto) => setName(texto)}
              autoCorrect={false}
              ></TextInput>
            </View>
            <TouchableOpacity  onPress={validarCli} style={styles.btnCad}>Cadastrar</TouchableOpacity>
            <Modal animationType='slide' transparent={false} visible={open}>
              <ScrollView>
                <SafeAreaView>
                  <TouchableOpacity onPress={ () => setOpen(false)}>
                    <Ionicons name="md-arrow-back" size={40} color='#000'/>
                  </TouchableOpacity>
                  <View style={styles.cabecario}>
                    <Text style={styles.title}>Loja do Leonardo Moura</Text>
                  </View>
                  <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10}}>
                    <Text style={styles.titleCliente}>Cliente: {name}</Text>  
                  </View>
                  <View style={{position: 'relative'}}>
                  <NavigationContainer>
                    <HomeCliente></HomeCliente>
                  </NavigationContainer>
                  </View>
                </SafeAreaView>
              </ScrollView>
            </Modal>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  home: {
    marginTop: '20%',
    width: '80%',
    
  },
  cliNome: {
    padding: 8,
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 3,
    fontSize: 16
  },
  btnCad: {
      textAlign: 'center',
      marginTop: 20,
      paddingTop: 13,
      paddingBottom: 13,
      backgroundColor: '#0070c0',
      color: '#fff',
      borderRadius: 10,
      fontSize: 20,
      fontFamily: 'Arial',
      width: 250
  },
  title: {
    fontSize: 19,
    fontWeight: 400,
    color: '#fff',
    backgroundColor: '#0070c0',
    textAlign: 'center',
    padding: 15
  },
  cabecario: {
    backgroundColor: '#0070c0',
    width: '100%',
    textAlign: 'center',
    padding: 15
  },
  titleCliente: {
    marginTop: 10,
    marginBottom: 15,
    padding: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#0a568c',
    width: '80%',
    borderRadius: 15,
    fontSize: 15,
    color: '#fff'
  }
});
