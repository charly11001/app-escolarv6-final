import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Carreras from "../screens/Carrera/Carrera";
import CarrerasAdd from "../screens/Carrera/CarreraAdd";

import CarrerasList from "../screens/Carrera/CarreraList";
import CarrerasDelete from "../screens/Carrera/CarreraDelete";
import CarrerasActualizar from "../screens/Carrera/CarreraActualizar";


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
        name="carreras-delete"
        component={CarrerasDelete}
        options={{ title: "Eliminar Carreras" }}
      />
   


   <Stack.Screen
        name="carreras-update"
        component={CarrerasActualizar}
        options={{ title: "Actualizar Carreras" }}
      />

   

    </Stack.Navigator>
  );
}
