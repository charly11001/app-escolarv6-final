import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements"

export default function GrupoAdd() {

    const [txtClave, setClave] = useState('Escribe clave grupo ...')
    const [txtNombre, setNombre] = useState('Escribe nombre grupo ...')
    const [btnAgregar, setAgregar] = useState('')

    return (
        <ScrollView centerContent={true} style={styles.viewBody}>
            <View style={styles.viewBtn}>
                <Image
                    style={styles.photo}
                    source={require('../../../assets/alumnosAdd1.png')}
                />
                <Text>Clave Grupo</Text>
                <TextInput
                    style={styles.input}
                    placeholder={txtClave}
                    onChangeText={c => setClave(c)}
                />
                <Text>Nombre Grupo</Text>
                <TextInput
                    style={styles.input}
                    placeholder={txtNombre}
                    onChangeText={n => setNombre(n)}
                />
                <Button
                    title="Agregar grupo"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => {
                        setAgregar(txtNombre)
                        setClave("")
                        setNombre("")

                    }}
                />

                <Text>Clave de grupo: {txtClave}</Text>
                <Text>Clave de grupo: {txtNombre}</Text>
                <Text>ENVIADO: {btnAgregar}</Text>
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
        backgroundColor: "#800600"
    },
    btnContainer: {
        width: "90%",
        marginBottom: 10
    },
    photo: {
        height: 120,
        width: 120,
        marginBottom: 20,
        marginTop: 20
    },
    viewBtn: {
        flex: 6,
        alignItems: "center"
    }
})