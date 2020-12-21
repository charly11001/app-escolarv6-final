import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements"

export default function CarreraAdd() {

    const [txtCarrera, setCarrera] = useState('Escribe el nombre de la carrera')
    const [btnEnviar, setEnviar] = useState('')

    return (
        <ScrollView centerContent={true} style={styles.viewBody}>
            <View>
                <Text>Nombre de la carrera</Text>
                <TextInput
                    style={styles.input}
                    placeholder={txtCarrera}
                    onChangeText={n => setCarrera(n)}
                />
                <Button
                    title="Agregar carrera"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => {
                        fetch('http://192.168.100.2:3000/carreras/', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                nomCarrera: txtCarrera
                            })
                        }).then(() => {
                            alert('Carrera agregada')
                            navigation.navigate('carreras')
                        })
                    }}
                />
                <Text style={styles.textTitle}>DATOS DE LA CARRERA</Text>
                <Text>NOMBRE: {txtCarrera}</Text>
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