import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Docentes from "../screens/Docente/Docente";
import DocentesAdd from "../screens/Docente/DocenteAdd";
import DocentesDet from "../screens/Docente/DocenteDet";
import DocentesList from "../screens/Docente/DocenteList";




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
        name="docentes-det"
        component={DocentesDet}
        options={{ title: "Detalle de los docentes" }}
      />
      <Stack.Screen
        name="docentes-list"
        component={DocentesList}
        options={{ title: "Lista de Docentes" }}
      />
      
      
      
    
    
    
    
    </Stack.Navigator>
  );
}
