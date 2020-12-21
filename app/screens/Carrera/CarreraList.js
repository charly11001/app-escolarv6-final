import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import ListItem from '../../components/Carrera/ListItem';
import useFetch from '../../hooks/useFetch';
import CarrerasDet from "../../screens/Carrera/CarreraDet";


export default function CarreraList({ navigation }) {

    const { loading, data: carreras } = useFetch('http://192.168.100.2:3000/carreras')

    return (
        <View style={styles.container}>
            {loading ? <Text>Cargando ...</Text> :
                <FlatList
                    style={styles.list}
                    data={carreras}
                    keyExtractor={x => x.id}
                    renderItem={({ item }) =>
                        <ListItem
                            onPress={() => navigation.navigate('carreras-det', { id: item.id, nomCarrera: item.nomCarrera })}
                            nomCarrera={item.nomGrupo}
                        />
                    }
                />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    list: {
        alignSelf: 'stretch',
    }
});

