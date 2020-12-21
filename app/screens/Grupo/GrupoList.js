import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import ListItem from '../../components/Grupo/ListItem';
import useFetch from '../../hooks/useFetch';
import GruposDet from "../../screens/Grupo/GrupoDet";


export default function GrupoList({ navigation }) {

    const { loading, data: grupos } = useFetch('http://192.168.100.2:3000/grupos')

    return (
        <View style={styles.container}>
            {loading ? <Text>Cargando ...</Text> :
                <FlatList
                    style={styles.list}
                    data={grupos}
                    keyExtractor={x => x.id}
                    renderItem={({ item }) =>
                        <ListItem
                            onPress={() => navigation.navigate('grupos-det', { id: item.id, nomGrupo: item.nomGrupo })}
                            nomGrupo={item.nomGrupo}
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

