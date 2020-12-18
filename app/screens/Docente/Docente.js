import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native"

export default function docente() {
  const navigation = useNavigation();
  return (
    <View style={styles.viewBtn}>
      {/* source={{ uri: 'https://source.unsplash.com/daily' }} */}
      {/* source={require('../../../assets/groups_people1.png')} */}
      {/* source={{ uri: 'https://source.unsplash.com/featured/?{student}' }} */}
      {/* source={{ uri: 'https://source.unsplash.com/featured/?group' }} */}
      <Image
        style={styles.photo}
        source={require('./../../../assets/Docente.jpg')} 

      />
      <Button
        title="Agregar docente"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("docentes-add")}
      />

      <Button
        title="Detalle del docente"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("docentes-det")}
      />

      <Button
        title="Lista de docentes"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("docentes-list")}
      />

      <Button
        title="Lista de docentes por carrera"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("docentes-carr")}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  textTitle: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  photo: {
    height: 140,
    width: 140,
    marginBottom: 20,
    marginTop: 20
  },
  viewBtn: {
    flex: 6,
    alignItems: "center"
  },
  btnStyle: {
    backgroundColor: "#800600"
  },
  btnContainer: {
    width: "70%",
    marginBottom: 10
  },
});

