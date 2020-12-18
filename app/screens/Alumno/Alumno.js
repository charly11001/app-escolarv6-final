import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native"

export default function Alumno() {
  const navigation = useNavigation();
  return (
    <View style={styles.viewBtn}>
      {/* source={require('./../../../assets/alumnos1.png')} */}
      {/* source={{ uri: 'https://picsum.photos/200/300' }} */}
      {/* source={{ uri: 'https://source.unsplash.com/daily' }} */}
      <Image
        style={styles.photo}

         source={require('./../../../assets/Alumnos.png')} 
        
        
       // source={{ uri: 'https://source.unsplash.com/featured/?{student}' }}
      
      
      
      />
      <Button
        title="Agregar alumno"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("alumnos-add")}
      />
      <Button
        title="Detalle de Alumno"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("alumnos-det")}
      />
      <Button
        title="Lista de Alumnos"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("alumnos-list")}
      />
      <Button
        title="Alumnos por grupo"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("alumnos-gpo")}
      />
      <Button
        title="Alumnos JSON"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("alumnos-json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  textTitle: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  listStyle: {
    marginTop: 0
  },
  btnStyle: {
    backgroundColor: "#800600"
  },
  btnContainer: {
    width: "70%",
    marginBottom: 10
  },
  viewBtn: {
    flex: 6,
    alignItems: "center"
  },
  photo: {
    height: 140,
    width: 140,
    marginBottom: 20,
    marginTop: 20
  }
});

