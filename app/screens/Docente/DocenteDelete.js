import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";
import { ScrollView, TextInput } from 'react-native-gesture-handler';
           
export default function DocenteDelete() {
 
    const navigation = useNavigation();
    const [txtDocente, setDocente]=useState('')
    return (

        <ScrollView centerContent={true} style={styles.viewbody}>
                    
           <View>
               
            <Text>  ID del docente    </Text>
                 <TextInput
                     style={styles.input}
                     placeholder="Escribe el id del docente a eliminar"
                     onChangeText={car => setDocente(car)}
                 />
                 
                 <Button
                    title="Eliminar Docente"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() =>  {

                        fetch(`http://192.168.100.2:3000/docentes/${txtDocente}`, {
                            method: 'DELETE'
                        
                        }).then(() => {
                            alert('Docente eliminado')
                            navigation.navigate('docentes')
                        })                                                      

                     } }                                      
                />

                 <Text style={styles.textTitle}>Datos de los docentes</Text>
                     <Text>DOCENTE: {txtDocente}</Text>
                    
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