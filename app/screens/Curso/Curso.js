import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native"

export default function Curso() {
  const navigation = useNavigation();
  return (
    <View style={styles.viewBtn}>

<Image
        style={styles.photo}
        source={require('./../../../assets/Cursos2.jpg')} 

      />
      <Button
        title="Agregar curso"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("cursos-add")}
      />
      
      <Button
        title="Borrar curso"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("cursos-delete" )}
      />

      <Button
        title="Modificar curso"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("cursos-update" )}
      />

      <Button
        title="Lista de cursos"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("cursos-list")}
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
    height: 240,
    width: 240,
    marginBottom: 20,
    marginTop: 20
  }
});

