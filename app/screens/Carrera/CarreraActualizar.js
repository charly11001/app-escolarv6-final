import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements"

export default function CarreraActualizar() {
    const navigation= useNavigation();
    const [txtIdCarrera, setIdCarrera] = useState('')
    const [txtCarrera, setCarrera] = useState('')
    const [btnEnviar, setEnviar] = useState('')

    return (
        <ScrollView centerContent={true} style={styles.viewBody}>
            <View>

            <Text>Id de la carrera</Text>
               
               <TextInput style={styles.input}
                   underlineColorAndroid="transparent"
                   placeholder="Escribe el id de la carrera"
                   placeholderTextColor="CA6F1E"
                   autoCapitalize="none"
                   autoCapitalize='characters'
                   onChangeText={(ca) => setIdCarrera(ca)}
              />

                <Text>Nombre de la carrera</Text>
               
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Escribe el nombre de la carrera"
                    placeholderTextColor="CA6F1E"
                    autoCapitalize="none"
                    autoCapitalize='characters'
                    onChangeText={(n) => setCarrera(n)}
               />             
                            
                <Button
                    title="Modificar carrera"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => {
                        fetch(`http://192.168.100.2:3000/carreras/${txtIdCarrera}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                
                                id: Number(txtIdCarrera),
                                nomCarrera: txtCarrera
                            })
                        }).then(() => {

                            setIdCarrera('Escribe el id de la carrera')
                            setCarrera('Escribe el nombre de la carrera')

                            alert('Carrera modificada')
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
        backgroundColor: "#800600"
    },
    btnContainer: {
        width: "90%",
        marginBottom: 10
    }
})