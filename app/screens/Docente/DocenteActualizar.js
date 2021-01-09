import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements"

export default function DocenteActualizar() {
    const navigation= useNavigation();
    const [txtIdDocente, setIdDocente] = useState('')
    const [txtDocente, setDocente] = useState('')
    const [btnEnviar, setEnviar] = useState('')

    return (
        <ScrollView centerContent={true} style={styles.viewBody}>
            <View>

            <Text>Id del docente</Text>
               
               <TextInput style={styles.input}
                   underlineColorAndroid="transparent"
                   placeholder="Escribe el id del docente"
                   placeholderTextColor="CA6F1E"
                   autoCapitalize="none"
                   autoCapitalize='characters'
                   onChangeText={(ca) => setIdDocente(ca)}
              />

                <Text>Nombre del docente</Text>
               
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Escribe el nombre del docente"
                    placeholderTextColor="CA6F1E"
                    autoCapitalize="none"
                    autoCapitalize='characters'
                    onChangeText={(n) => setDocente(n)}
               />             
                            
                <Button
                    title="Modificar docente"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => {
                        fetch(`http://192.168.100.2:3000/docentes/${txtIdDocente}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                
                                id: Number(txtIdDocente),
                                nomDocente: txtDocente
                            })
                        }).then(() => {

                            setIdDocente('Escribe el id del docente')
                            setDocente('Escribe el nombre del docente')

                            alert('Docente modificado')
                            navigation.navigate('docentes')
                        })
                    }}
                />
                <Text style={styles.textTitle}>Datos del docente</Text>
                <Text>NOMBRE: {txtDocente}</Text>
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
    }
})