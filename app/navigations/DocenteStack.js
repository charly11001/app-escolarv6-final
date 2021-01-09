import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Docentes from "../screens/Docente/Docente";
import DocentesAdd from "../screens/Docente/DocenteAdd";

import DocentesList from "../screens/Docente/DocenteList";
import DocentesDelete from "../screens/Docente/DocenteDelete";
import DocentesActualizar from "../screens/Docente/DocenteActualizar";


const Stack = createStackNavigator();

export default function AlumnosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="docentes"
        component={Docentes}
        options={{ title: "Docentes" }}
      />
      <Stack.Screen
        name="docentes-add"
        component={DocentesAdd}
        options={{ title: "Agregar Docentes" }}
      />
 
      <Stack.Screen
        name="docentes-list"
        component={DocentesList}
        options={{ title: "Lista de Docentes" }}
      />
   
      <Stack.Screen
        name="docentes-delete"
        component={DocentesDelete}
        options={{ title: "Eliminar Docentes" }}
      />
   


   <Stack.Screen
        name="docentes-update"
        component={DocentesActualizar}
        options={{ title: "Actualizar Docentes" }}
      />

   

    </Stack.Navigator>
  );
}
