import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Carreras from "../screens/Carrera/Carrera";
import CarrerasAdd from "../screens/Carrera/CarreraAdd";
import CarrerasDet from "../screens/Carrera/CarreraDet";
import CarrerasList from "../screens/Carrera/CarreraList";


const Stack = createStackNavigator();

export default function AlumnosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="carreras"
        component={Carreras}
        options={{ title: "Carreras" }}
      />
      <Stack.Screen
        name="carreras-add"
        component={CarrerasAdd}
        options={{ title: "Agregar Carreras" }}
      />
 
      <Stack.Screen
        name="carreras-list"
        component={CarrerasList}
        options={{ title: "Lista de Carreras" }}
      />
   

   <Stack.Screen
        name="carreras-det"
        component={CarrerasDet}
        options={{ title: "Detalle de Carreras" }}
      />

    </Stack.Navigator>
  );
}
