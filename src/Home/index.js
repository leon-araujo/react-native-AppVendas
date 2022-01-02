import React,{useState} from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ScrollView, SafeAreaView } from 'react-native';


export default function Home({ navigation }) {
    const [name, setName] = useState('') ;
    const [open, setOpen] = useState(false);


    function validarCli() {
        if (name === '') {
            alert('Nome de cliente não informado')
        } else {
            return navigation.navigate("Produto", {nomeCli: name })
        }
    }    

    return(
        <ScrollView>
            <SafeAreaView style={styles.container}>
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
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({ // Estilização da page Home
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
        fontFamily: 'Arial',
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
  