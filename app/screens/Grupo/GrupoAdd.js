import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements"

export default function GrupoAdd() {

    const [txtGrupo, setGrupo] = useState('Escribe el Nombre del grupo')
    const [btnEnviar, setEnviar] = useState('')

    return (
        <ScrollView centerContent={true} style={styles.viewBody}>
            <View>
                <Text>Nombre de grupo</Text>
                <TextInput
                    style={styles.input}
                    placeholder={txtGrupo}
                    onChangeText={n => setGrupo(n)}
                />
                <Button
                    title="Agregar grupo"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => {
                        fetch('http://192.168.100.2:3000/grupos/', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                nomGrupo: txtGrupo
                            })
                        }).then(() => {
                            alert('Grupo agregado')
                            navigation.navigate('grupos')
                        })
                    }}
                />
                <Text style={styles.textTitle}>DATOS DEL GRUPO</Text>
                <Text>NOMBRE: {txtGrupo}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    viewBody: {
        marginLeft: 30,
        marginRight: 30
    },
    textTitle: {
        marginTop: 20,
        marginBottom: 20,
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    },
    input: {
        height: 40,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        width: "90%"
    },
    btnStyle: {
        backgroundColor: "#00a680"
    },
    btnContainer: {
        width: "90%",
        marginBottom: 10
    }
})