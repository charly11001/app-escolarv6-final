import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Cursos from "../screens/Curso/Curso";
import CursosAdd from "../screens/Curso/CursoAdd";

import CursosList from "../screens/Curso/CursoList";
import CursosDelete from "../screens/Curso/CursoDelete";
import CursosActualizar from "../screens/Curso/CursoActualizar";


const Stack = createStackNavigator();

export default function AlumnosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="cursos"
        component={Cursos}
        options={{ title: "Cursos" }}
      />
      <Stack.Screen
        name="cursos-add"
        component={CursosAdd}
        options={{ title: "Agregar Cursos" }}
      />
 
      <Stack.Screen
        name="cursos-list"
        component={CursosList}
        options={{ title: "Lista de Cursos" }}
      />
   
      <Stack.Screen
        name="cursos-delete"
        component={CursosDelete}
        options={{ title: "Eliminar Cursos" }}
      />
   


   <Stack.Screen
        name="cursos-update"
        component={CursosActualizar}
        options={{ title: "Actualizar Cursos" }}
      />

   

    </Stack.Navigator>
  );
}
