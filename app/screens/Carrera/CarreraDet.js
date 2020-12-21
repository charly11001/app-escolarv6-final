import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import useFetch from '../../hooks/useFetch';

export default function CarreraDet({ route, navigation }) {
    const { id, nomCarrera } = route.params;

    const { loading, data } = useFetch(`http://192.168.100.2:3000/carreras/${id}`)
    return (
        <View style={styles.container}>
            {loading ? <Text>Cargando ...</Text> :
                <>
                    <Text>{data.id}</Text>
                    <Text>{data.nomCarrera}</Text>
                </>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})