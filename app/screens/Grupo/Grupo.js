import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native"

export default function Grupo() {
  const navigation = useNavigation();
  return (
    <View style={styles.viewBtn}>

      <Image
        style={styles.photo}
        source={{ uri: 'https://source.unsplash.com/featured/?{student}' }}
      />
      <Button
        title="Agregar grupo"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("grupos-add")}
      />
      <Button
        title="Lista de Grupos"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("grupos-list")}
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
    backgroundColor: "#00a680"
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

