import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatList } from 'react-native-gesture-handler';

import useFetch from '../../hooks/useFetch';

export default function DocenteList({ navigation }) {

    const { loading, data: docentes } = useFetch('http://192.168.100.2:3000/docentes')

    return (
        <View style={styles.container}>
            {loading ? <Text>Cargando ...</Text> :
                <FlatList

                data={docentes}
                renderItem={({ item }) => <Text style={styles.item}>{item.nomDocente}</Text>
            }
                keyExtractor={item => String(item.id)}
            />
            }
                             
        </View>
    );
}

const styles = StyleSheet.create({
   
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 22,
        height: 50,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },

})

