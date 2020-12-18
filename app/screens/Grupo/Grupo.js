import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native"

export default function Grupo() {
  const navigation = useNavigation();
  return (
    <View style={styles.viewBtn}>
      {/* source={{ uri: 'https://source.unsplash.com/daily' }} */}
      {/* source={require('../../../assets/groups_people1.png')} */}
      {/* source={{ uri: 'https://source.unsplash.com/featured/?{student}' }} */}
      {/* source={{ uri: 'https://source.unsplash.com/featured/?group' }} */}
      <Image
        style={styles.photo}
        source={require('../../../assets/groups_people1.png')}

      />
      <Button
        title="Agregar grupo"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("grupos-add")}
      />

      <Button
        title="Detalle del grupo"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("grupos-det")}
      />

      <Button
        title="Lista del grupo"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("grupos-list")}
      />

      <Button
        title="Lista del grupo por carrera"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("grupos-carr")}
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

