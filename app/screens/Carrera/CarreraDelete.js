import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";
import { ScrollView, TextInput } from 'react-native-gesture-handler';
           
export default function CarreraDelete() {
 
    const navigation = useNavigation();
    const [txtCarrera, setCarrera]=useState('')
    return (

        <ScrollView centerContent={true} style={styles.viewbody}>
                    
           <View>
               
            <Text>  ID de la Carrera     </Text>
                 <TextInput
                     style={styles.input}
                     placeholder="Escribe el id de la carrera a eliminar"
                     onChangeText={car => setCarrera(car)}
                 />
                 
                 <Button
                    title="Eliminar Carrera"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() =>  {

                        fetch(`http://192.168.100.2:3000/carreras/${txtCarrera}`, {
                            method: 'DELETE'
                        
                        }).then(() => {
                            alert('Carrera eliminada')
                            navigation.navigate('carreras')
                        })                                                      

                     } }                                      
                />

                 <Text style={styles.textTitle}>Datos de la Carrera</Text>
                     <Text>CARRERA: {txtCarrera}</Text>
                    
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