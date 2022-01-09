import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Modal, TouchableOpacity, SafeAreaView, ScrollView, FlatList, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import TaskList from "../TaskList";

export default function Produto({ route }) {
  const [img1, setImg1] = useState(false);
  const [img2, setImg2] = useState(false);
  const [img3, setImg3] = useState(false);
  const [carrinho, setCarrinho] = useState(false);
  const [task, setTask] = useState([]);
  const [input, setInput] = useState('');
  const [chave, setChave] = useState();

  const navigation = useNavigation();

  function img01() {
    setImg1(true);
  }
  function img02() {
    setImg2(true);
  }
  function img03() {
    setImg3(true);
  }

  function logOut() {
    alert('COMPRA ENCERRADA!');
    navigation.navigate("Home");
  }

  function addProd1() {
    /*setInput('Poco X3 Pro 128GB');
    setChave(1);
    addProdCart();*/
    const data = {
      key:  'Poco X3 Pro 128GB',
      task: 'Poco X3 Pro 128GB'
    };
    setTask([...task, data]);
    alert('Produto Adicionado!');
  }
  function addProd2() {
    /*setInput('Moto G30');
    setChave(2);
    addProdCart();*/
    const data = {
      key:  'Moto G30',
      task: 'Moto G30'
    };
    setTask([...task, data]);
    alert('Produto Adicionado!');
  }
  function addProd3() {
    /*setInput('Iphone 8 Plus');
    setChave(3);
    addProdCart();*/
    const data = {
      key:  'Iphone 8 Plus',
      task: 'Iphone 8 Plus'
    };
    setTask([...task, data]);
    alert('Produto Adicionado!');
  }

  function addProdCart() {
    const data = {
      key:  chave,
      task: input
    };
    setTask([...task, data]);
    setInput('');
    alert('Produto Adicionado!');
  }

  function cartSharp() {
      setCarrinho(true);
  }
  return (
    <View>
    <ScrollView>
    <Modal animationType="slide" transparent={false} visible={carrinho}>
    <View style={styles.modalHeader}>
      <TouchableOpacity onPress={ () => setCarrinho(false)}>
        <Ionicons style={{marginLeft: 5, marginRight: 5}} name='md-close' size={40} color={'#fff'}/>
      </TouchableOpacity>
      <Text style={styles.dono}>Loja do Leonardo Moura</Text>
    </View>
      <View>
        <Text style={styles.title}>Carrinho de Compras</Text>
      </View>
      <View>
        <FlatList
        marginHorizontal={10}
        showsHorizontalScrollIndicator={false}
        data={task}
        keyExtractor={(item) => String(item.key)}
        renderItem={({item}) => <TaskList data={item}/>}
        />
      </View>
    </Modal>

    <View style={styles.containerIMG}>
        <Text style={styles.cliente}>Cliente: {route.params.nomeCli}</Text>
        <TouchableOpacity style={styles.prod} onPress={img01}>
          <View style={styles.imgGradePrincipal}>
              <Text style={styles.imgTitle}>Poco X3 Pro 5G 128GB</Text>
              <View style={styles.imgGrade}>
                <Image style={styles.img} source={require('../Image/smartphone-00.png')}/>
              </View>
              <Text style={styles.imgPreco}>Preço: R$1.245,99</Text>
              <Text style={styles.imgPreco}>Parcelameto: Até 5x s/juros</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.prod} onPress={img02}>
          <View style={styles.imgGradePrincipal}>
              <Text style={styles.imgTitle}>Moto G30</Text>
              <View style={styles.imgGrade}>
                <Image style={styles.img} source={require('../Image/smartphone-01.png')}/>
              </View>
              <Text style={styles.imgPreco}>Preço: R$1.375,00</Text>
              <Text style={styles.imgPreco}>Parcelameto: Até 5x s/juros</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.prod} onPress={img03}>
          <View style={styles.imgGradePrincipal}>
              <Text style={styles.imgTitle}>Iphone 8 Plus</Text>
              <View style={styles.imgGrade}>
                <Image style={styles.img} source={require('../Image/smartphone-02.png')}/>
              </View>
              <Text style={styles.imgPreco}>Preço: R$2.799,00</Text>
              <Text style={styles.imgPreco}>Parcelameto: Até 5x s/juros</Text>
          </View>
        </TouchableOpacity>
        
        <Modal animationType="slide" transparent={false} visible={img1}>
          <SafeAreaView style={styles.modal}>
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={ () => setImg1(false)}>
                <Ionicons style={{marginLeft: 5, marginRight: 5}} name='md-close' size={40} color={'#fff'}/>
              </TouchableOpacity>
              <Text style={styles.dono}>Loja do Leonardo Moura</Text>
            </View>
            <View style={styles.detProd}>
              <Text></Text>
              <TextInput style={styles.detProdNome} editable={false}>Poco X3 Pro 5G 128GB</TextInput>
              <Image style={styles.imgModal} source={require('../Image/smartphone-00.png')}/>
              <View style={styles.detProdInfo}>
                <Text style={styles.detProdInfoText}>Marca: Xiaomi</Text>
                <Text style={styles.detProdInfoText}>Fabricante: Xiaomi</Text>
                <Text style={styles.detProdInfoText}>Armazenamento: 128GB</Text>
                <Text style={styles.detProdInfoText}>Memória RAM: 6GB</Text>
              </View>
              <View style={styles.btnContainer}>
                <TouchableOpacity onPress={logOut}><Text style={styles.btnCad}>Encerrar Compra</Text></TouchableOpacity>
                <TouchableOpacity onPress={addProd1}>
                  <View style={styles.btnAdd}>
                    <Ionicons name="ios-add" size={50} color="#FFF"/> 
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </Modal>
        <Modal animationType="slide" transparent={false} visible={img2}>
          <SafeAreaView style={styles.modal}>
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={ () => setImg2(false)}>
                <Ionicons style={{marginLeft: 5, marginRight: 5}} name='md-close' size={40} color={'#fff'}/>
              </TouchableOpacity>
              <Text style={styles.dono}>Loja do Leonardo Moura</Text>
            </View>
            <View style={styles.detProd}>
              <Text style={styles.detProdNome}>Moto G30</Text>
              <Image style={styles.imgModal} source={require('../Image/smartphone-01.png')}/>
              <View style={styles.detProdInfo}>
                <Text style={styles.detProdInfoText}>Marca: Motorola</Text>
                <Text style={styles.detProdInfoText}>Fabricante: Motorola</Text>
                <Text style={styles.detProdInfoText}>Armazenamento: 128GB</Text>
                <Text style={styles.detProdInfoText}>Memória Ram: 4GB</Text>
              </View>
              <View style={styles.btnContainer}>
                <TouchableOpacity onPress={logOut}><Text style={styles.btnCad}>Encerrar Compra</Text></TouchableOpacity>
                <TouchableOpacity onPress={addProd2}>
                  <View style={styles.btnAdd}>
                    <Ionicons name="ios-add" size={50} color="#FFF"/> 
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </Modal>
        <Modal animationType="slide" transparent={false} visible={img3}>
          <SafeAreaView style={styles.modal}>
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={ () => setImg3(false)}>
                <Ionicons style={{marginLeft: 5, marginRight: 5}} name='md-close' size={40} color={'#fff'}/>
              </TouchableOpacity>
              <Text style={styles.dono}>Loja do Leonardo Moura</Text>
            </View>
            <View style={styles.detProd}>
              <Text style={styles.detProdNome}>Iphone 8 Plus</Text>
              <Image style={styles.imgModal} source={require('../Image/smartphone-02.png')}/>
              <View style={styles.detProdInfo}>
                <Text style={styles.detProdInfoText}>Marca: Apple</Text>
                <Text style={styles.detProdInfoText}>Fabricante: Apple</Text>
                <Text style={styles.detProdInfoText}>Armazenamento: 64GB</Text>
                <Text style={styles.detProdInfoText}>Memória RAM: 2GB</Text>
              </View>
              <View style={styles.btnContainer}>
                <TouchableOpacity onPress={logOut}><Text style={styles.btnCad}>Encerrar Compra</Text></TouchableOpacity>
                <TouchableOpacity onPress={addProd3}>
                  <View style={styles.btnAdd}>
                    <Ionicons name="ios-add" size={50} color="#FFF"/> 
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </Modal>
    </View>
    </ScrollView>
    <View style={styles.btnCartContainer}>
      <TouchableOpacity onPress={cartSharp}>
        <View style={styles.btnCart}>
          <Ionicons name="md-cart-sharp" size={35} color="#FFF"/>
        </View>
      </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    containerIMG: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        zIndex: 1
    },
    imgGradePrincipal: {
        width: '90%',
        padding: 10,
        marginTop: 15,
        borderRadius: 15,
        backgroundColor: '#ddd',
    },
    imgGrade: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    imgPreco: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14
    
    },
    imgTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    img: {
        flex: 1,
        height: 150,
        width: 300,
        resizeMode: 'center',
    },
    imgModal: {
      flex: 1,
      height: 50,
      width: '80%',
      resizeMode: 'center'
    },
    prod: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modal: {
      flex: 1,
    },
    modalHeader: {
      paddingTop: 10,
      paddingBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#11538C',
      width: '100%'
    },
    dono: {
      color: '#F0F1F2',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
      width: '80%'
      
    },
    cliente: {
      fontSize: 22,
      fontWeight: 'bold',
      backgroundColor: '#0070c0',
      color: '#fff',
      width: '80%',
      padding: 10,
      marginTop: 15,
      borderRadius: 10,
      textAlign: 'center'
    },
    detProd: {
      flex: 1,
      alignItems: 'center'
    },
    detProdInfo: {
      marginBottom: '5%',
      backgroundColor: '#cde8ff',
      padding: 15,
      width: '90%',
      borderRadius: 10
    },
    detProdInfoText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    btnContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 15,
      flexDirection: 'row',
    },
    btnCad: {
      textAlign: 'center',
      paddingTop: 13,
      paddingBottom: 13,
      backgroundColor: '#0070c0',
      color: '#fff',
      borderRadius: 10,
      fontSize: 18,
      width: 180,
      fontWeight: 'bold',
      marginRight: '25%',
    },
    btnAdd: {
      backgroundColor: '#0070c0',
      color: '#fff',
      borderRadius: 30,
      alignItems:'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
    },
    detProdNome: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 30,
      color: '#000'
    },
    btnCartContainer: {
      flex: 1,
      zIndex: 9,
      right: 20,
      bottom: 20,
      position: 'absolute',
    },
    btnCart: {
      backgroundColor: '#0070c0',
      color: '#fff',
      borderRadius: 30,
      alignItems:'center',
      justifyContent: 'center',
      width: 60,
      height: 60,
      shadowColor: '#000',
      shadowOpacity: 0.3,
      shadowOffset: {
        width: 1,
        height: 3,
      }
    },
    cartContainer: {
      flex: 1
    },
    title: {
      fontSize: 25,
      top: 5,
      marginBottom: 10,
      color: '#124578',
      fontWeight: 'bold',
      textAlign: 'center'
    }
});