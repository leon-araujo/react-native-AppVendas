import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-web";


export default function Home() {
  const [open, setOpen] = useState(false);

  function img01() {
    setOpen(true); 
  }

  return (
    <View style={styles.containerIMG}>
        <TouchableOpacity onPress={img01}>
          <View style={styles.imgGrade}>
              <Text style={styles.imgTitle}>Poco X3 Pro 5G 128GB</Text>
              <Image style={styles.img} source={require('../Image/smartphone-00.png')}></Image>
              <Text style={styles.imgPreco}>Preço: R$1.245,99</Text>
              <Text style={styles.imgPreco}>Parcelameto: Até 5x s/juros</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.imgGrade}>
            <Text style={styles.imgTitle}>Moto G30</Text>
            <Image style={styles.img} source={require('../Image/smartphone-01.png')}></Image>
            <Text style={styles.imgPreco}>Preço: R$1.375,00</Text>
            <Text style={styles.imgPreco}>Parcelameto: Até 5x s/juros</Text>
        </View>
        <View style={styles.imgGrade}>
            <Text style={styles.imgTitle}>Iphone 8S Plus</Text>
            <Image style={styles.img} source={require('../Image/smartphone-02.png')}></Image>
            <Text style={styles.imgPreco}>Preço: R$2.799,00</Text>
            <Text style={styles.imgPreco}>Parcelameto: Até 5x s/juros</Text>
        </View>
        <Modal animationType='slide' transparent={false} visible={open}>
        <TouchableOpacity onPress={ () => setOpen(false)}>
          <Ionicons name="md-arrow-back" size={40} color='#000'/>
        </TouchableOpacity>
        <Text>TESTE01</Text>
        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    containerIMG: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 350
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
});