import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Modal, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function Produto({ route }) {
  const [img1, setImg1] = useState(false);
  const [img2, setImg2] = useState(false);
  const [img3, setImg3] = useState(false);
  


  function img01() {
    setImg1(true);
  }
  function img02() {
    setImg2(true);
  }
  function img03() {
    setImg3(true);
  }

  return (
    <View style={styles.containerIMG}>
        <Text>Cliente: {route.params.nomeCli}</Text>
        <TouchableOpacity style={styles.prod} onPress={img01}>
          <View style={styles.imgGrade}>
              <Text style={styles.imgTitle}>Poco X3 Pro 5G 128GB</Text>
              <Image style={styles.img} source={require('../Image/smartphone-00.png')}/>
              <Text style={styles.imgPreco}>Preço: R$1.245,99</Text>
              <Text style={styles.imgPreco}>Parcelameto: Até 5x s/juros</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.prod} onPress={img02}>
          <View style={styles.imgGrade}>
              <Text style={styles.imgTitle}>Moto G30</Text>
              <Image style={styles.img} source={require('../Image/smartphone-01.png')}/>
              <Text style={styles.imgPreco}>Preço: R$1.375,00</Text>
              <Text style={styles.imgPreco}>Parcelameto: Até 5x s/juros</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.prod} onPress={img03}>
          <View style={styles.imgGrade}>
              <Text style={styles.imgTitle}>Iphone 8S Plus</Text>
              <Image style={styles.img} source={require('../Image/smartphone-02.png')}/>
              <Text style={styles.imgPreco}>Preço: R$2.799,00</Text>
              <Text style={styles.imgPreco}>Parcelameto: Até 5x s/juros</Text>
          </View>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    containerIMG: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    imgGrade: {
        width: '90%',
        padding: 10,
        marginTop: 15,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
          width: 1,
          height: 3
        },
        borderRadius: 15,
        backgroundColor: '#f6f6f6'
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
        width: '100%',
        resizeMode: 'center',
    },
    prod: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    }
});