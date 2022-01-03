import React,{useState} from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ScrollView, SafeAreaView, Modal } from 'react-native';


export default function Home({ navigation }) {
    const [name, setName] = useState('') ;

    function validarCli() {
        if (name === '') {
            alert('Nome de cliente não informado')
        } else {
            return navigation.navigate("Produto", {nomeCli: name })
        }
    }    

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.container2}>
                    <View style={styles.home}>
                        <TextInput
                        style={styles.cliNome}
                        placeholder='Nome Do Cliente'
                        value={name}
                        onChangeText={(texto) => setName(texto)}
                        autoCorrect={false}
                        />
                        <View style={styles.btnContainer}>
                            <TouchableOpacity onPress={validarCli}><Text style={styles.btnCad}>Cadastrar</Text></TouchableOpacity>
                        </View>       
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({ // Estilização da page Home
    teste4: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#033859',
    },
    teste1: {
        borderRadius: 15,
        width: '90%',
        padding: 20
    },
    teste2: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#fff'
    },
    teste5: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    teste3: {
        textAlign: 'center',
        backgroundColor: '#55baff',
        color: '#fff',
        width: 150,
        fontSize: 20,
        borderRadius: 10,
        padding: 5
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
    },
    container2: {
        alignItems: 'center',
        justifyContent: 'center'
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
    btnContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        
    },
    btnCad: {
        textAlign: 'center',
        marginTop: 10,
        paddingTop: 13,
        paddingBottom: 13,
        backgroundColor: '#0070c0',
        color: '#fff',
        borderRadius: 10,
        fontSize: 18,
        width: 150
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#0070c0',
        textAlign: 'center',
        padding: 15
      }
  });
  