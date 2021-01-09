import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";
import { ScrollView, TextInput } from 'react-native-gesture-handler';
           
export default function AlumnoDelete() {
 
    const navigation = useNavigation();
    const [txtAlumno, setAlumno]=useState('')
    return (

        <ScrollView centerContent={true} style={styles.viewbody}>
                    
           <View>
               
            <Text>  ID del alumno    </Text>
                 <TextInput
                     style={styles.input}
                     placeholder="Escribe el id del alumno a eliminar"
                     onChangeText={car => setAlumno(car)}
                 />
                 
                 <Button
                    title="Eliminar alumno"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() =>  {

                        fetch(`http://192.168.100.2:3000/alumnos/${txtAlumno}`, {
                            method: 'DELETE'
                        
                        }).then(() => {
                            alert('Alumno eliminado')
                            navigation.navigate('alumnos')
                        })                                                      

                     } }                                      
                />

                 <Text style={styles.textTitle}>Datos del alumno</Text>
                     <Text>CARRERA: {txtAlumno}</Text>
                    
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
 
    viewBody: {
        marginLeft: 30,
        marginRight: 30,
        marginTop: 0,
      marginBottom: 10,
      },

      textoutput:{
        fontWeight: "bold",
      },

      btnContainer: {
        width: "70%",
        marginBottom: 15
      },

      btnStyle: {
        backgroundColor: "#800600",
     
      },

      viewBtn: {   
        marginTop:10,
        alignItems: "center"
      },

      textinfo: {
        margin: 15,
        height: 40,
        borderColor: '#F1C40F',
        borderWidth: 1,
        color: 'maroon' ,
        textAlignVertical: "center",            
     }
})