import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements"

export default function CursoActualizar() {
    const navigation= useNavigation();
    const [txtIdCurso, setIdCurso] = useState('')
    const [txtCurso, setCurso] = useState('')
    const [btnEnviar, setEnviar] = useState('')

    return (
        <ScrollView centerContent={true} style={styles.viewBody}>
            <View>

            <Text>Id del curso</Text>
               
               <TextInput style={styles.input}
                   underlineColorAndroid="transparent"
                   placeholder="Escribe el id del curso"
                   placeholderTextColor="CA6F1E"
                   autoCapitalize="none"
                   autoCapitalize='characters'
                   onChangeText={(ca) => setIdCurso(ca)}
              />

                <Text>Nombre del curso</Text>
               
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Escribe el nombre del curso"
                    placeholderTextColor="CA6F1E"
                    autoCapitalize="none"
                    autoCapitalize='characters'
                    onChangeText={(n) => setCurso(n)}
               />             
                            
                <Button
                    title="Modificar curso"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => {
                        fetch(`http://192.168.100.2:3000/cursos/${txtIdCurso}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                
                                id: Number(txtIdCurso),
                                nomCurso: txtCurso
                            })
                        }).then(() => {

                            setIdCurso('Escribe el id del curso')
                            setCurso('Escribe el nombre del curso')

                            alert('Curso modificado')
                            navigation.navigate('cursos')
                        })
                    }}
                />
                <Text style={styles.textTitle}>Datos del curso</Text>
                <Text>NOMBRE: {txtCurso}</Text>
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