import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";


export default function CursoList() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <View style={styles.center}><Text>Cargando ...</Text></View>
    }


    return (
        <View style={styles.container} >
            <FlatList
                data={users}
                renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
                keyExtractor={item => String(item.id)}
            />
        </View >
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
        borderBottomColor: '#ff0000',
        borderBottomWidth: 1
    },
})