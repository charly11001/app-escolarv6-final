import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements"

export default function AlumnoAdd() {

    const [txtNoControl, setnoControl] = useState('Escribe el No. Control ...')

    const [txtNombre, setNombre] = useState('Escribe el nombre ...')
    
    const [txtCarrera, setCarrera] = useState('Escribe la carrera ...')
    const [btnEnviar, setEnviar] = useState('')

    return (
        <ScrollView centerContent={true} style={styles.viewBody}>
            <View>

              

                <Text>No. de Control</Text>
                <TextInput
                    style={styles.input}
                    placeholder={txtNoControl}
                    onChangeText={nc => setnoControl(nc)}
                />

                <Text>Nombre del alumno</Text>
                <TextInput
                    style={styles.input}
                    placeholder={txtNombre}
                    onChangeText={n => setNombre(n)}
                />

                <Text>Carrera</Text>
                <TextInput
                    style={styles.input}
                    placeholder={txtCarrera}
                    onChangeText={c => setCarrera(c)}
                />
                <Button
                    title="Agregar alumno"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => {
                        setEnviar(txtNoControl)
                    }}
                />
                <Text style={styles.textTitle}>Datos del alumno</Text>
                
                <Text>No. de control: {txtNoControl}     </Text>

                <Text>Nombre: {txtNombre}</Text>

                <Text>Carrera: {txtCarrera}</Text>
               
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    viewBody: {
        marginLeft: 30,
        marginTop: 20,
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
        height: 240,
        width: 240,
        marginBottom: 20,
        marginTop: 20
    }
})