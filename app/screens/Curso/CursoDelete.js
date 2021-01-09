import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";
import { ScrollView, TextInput } from 'react-native-gesture-handler';
           
export default function CursoDelete() {
 
    const navigation = useNavigation();
    const [txtCurso, setCurso]=useState('')
    return (

        <ScrollView centerContent={true} style={styles.viewbody}>
                    
           <View>
               
            <Text>  ID del curso     </Text>
                 <TextInput
                     style={styles.input}
                     placeholder="Escribe el id del curso a eliminar"
                     onChangeText={car => setCurso(car)}
                 />
                 
                 <Button
                    title="Eliminar Curso"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() =>  {

                        fetch(`http://192.168.100.2:3000/cursos/${txtCurso}`, {
                            method: 'DELETE'
                        
                        }).then(() => {
                            alert('Curso eliminado')
                            navigation.navigate('cursos')
                        })                                                      

                     } }                                      
                />

                 <Text style={styles.textTitle}>Datos de los cursos</Text>
                     <Text>CARRERA: {txtCurso}</Text>
                    
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