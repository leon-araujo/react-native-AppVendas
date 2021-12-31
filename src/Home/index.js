import React from "react";
import { Text, View, StyleSheet, Image } from 'react-native';


export default function Home() {
  return (
    <View style={styles.containerIMG}>
        <View style={styles.imgGrade}>
            <Text style={styles.imgTitle}>Poco X3 Pro 5G 128GB</Text>
            <Image style={styles.img} source={require('../Image/smartphone-00.png')}></Image>
            <Text style={styles.imgPreco}>Preço: R$1.245,99</Text>
            <Text style={styles.imgPreco}>Parcelameto: Até 5x s/juros</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    containerIMG: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
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
        textAlign: 'center'
    },
    img: {
        flex: 1,
        height: 150,
        width: '100%',
        resizeMode: 'center',
    },
});