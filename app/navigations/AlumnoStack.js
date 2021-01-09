import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Alumnos from "../screens/Alumno/Alumno";
import AlumnosAdd from "../screens/Alumno/AlumnoAdd";

import AlumnosList from "../screens/Alumno/AlumnoList";
import AlumnosDelete from "../screens/Alumno/AlumnoDelete";
import AlumnosActualizar from "../screens/Alumno/AlumnoActualizar";


const Stack = createStackNavigator();

export default function AlumnosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="alumnos"
        component={Alumnos}
        options={{ title: "Alumnos" }}
      />
      <Stack.Screen
        name="alumnos-add"
        component={AlumnosAdd}
        options={{ title: "Agregar Alumnos" }}
      />
 
      <Stack.Screen
        name="alumnos-list"
        component={AlumnosList}
        options={{ title: "Lista de Alumnos" }}
      />
   
      <Stack.Screen
        name="alumnos-delete"
        component={AlumnosDelete}
        options={{ title: "Eliminar Alumnos" }}
      />
   


   <Stack.Screen
        name="alumnos-update"
        component={AlumnosActualizar}
        options={{ title: "Actualizar Alumnos" }}
      />

   

    </Stack.Navigator>
  );
}
