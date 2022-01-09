import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TaskList({data}) {
    return(
        <View style={styles.container}>
            <View style={styles.containerList}>
                <Text style={styles.task}>{data.task}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%'
        
    },
    containerList: {
        margin: 8,
        flexDirection: 'row',
        backgroundColor: '#90CDFA',
        borderRadius: 5,
        padding: 7,
        width: '90%',
    },
    task: {
        color: '#fff',
        fontSize: 18,
        paddingLeft: 8,
        paddingRight: 20,
        fontWeight: 'bold'
    },
})