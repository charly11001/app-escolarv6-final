import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements"

export default function AlumnoActualizar() {
    const navigation= useNavigation();
    const [txtIdAlumno, setIdAlumno] = useState('')
    const [txtAlumno, setAlumno] = useState('')
    const [btnEnviar, setEnviar] = useState('')

    return (
        <ScrollView centerContent={true} style={styles.viewBody}>
            <View>

            <Text>Id del alumno</Text>
               
               <TextInput style={styles.input}
                   underlineColorAndroid="transparent"
                   placeholder="Escribe el id del alumno"
                   placeholderTextColor="CA6F1E"
                   autoCapitalize="none"
                   autoCapitalize='characters'
                   onChangeText={(ca) => setIdAlumno(ca)}
              />

                <Text>Nombre del alumno</Text>
               
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Escribe el nombre del alumno"
                    placeholderTextColor="CA6F1E"
                    autoCapitalize="none"
                    autoCapitalize='characters'
                    onChangeText={(n) => setAlumno(n)}
               />             
                            
                <Button
                    title="Modificar alumno"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => {
                        fetch(`http://192.168.100.2:3000/alumnos/${txtIdAlumno}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                
                                id: Number(txtIdAlumno),
                                nomAlumno: txtAlumno
                            })
                        }).then(() => {

                            setIdAlumno('Escribe el id del alumno')
                            setAlumno('Escribe el nombre del alumno')

                            alert('Alumno modificado')
                            navigation.navigate('alumnos')
                        })
                    }}
                />
                <Text style={styles.textTitle}>Datos del alumno</Text>
                <Text>NOMBRE: {txtAlumno}</Text>
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