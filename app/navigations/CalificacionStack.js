import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Calificaciones from "../screens/Calificacion/Calificacion";
import CalificacionesAdd from "../screens/Calificacion/CalificacionAdd";
import CalificacionesDet from "../screens/Calificacion/CalificacionDet";
import CalificacionesList from "../screens/Calificacion/CalificacionList";




const Stack = createStackNavigator();

export default function AlumnosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="calificaciones"
        component={Calificaciones}
        options={{ title: "Calificaciones" }}
      />
      <Stack.Screen
        name="calificaciones-add"
        component={CalificacionesAdd}
        options={{ title: "Agregar Calificaciones" }}
      />
      <Stack.Screen
        name="calificaciones-det"
        component={CalificacionesDet}
        options={{ title: "Detalle de las Calificaciones" }}
      />
      <Stack.Screen
        name="calificaciones-list"
        component={CalificacionesList}
        options={{ title: "Lista de Calificaciones" }}
      />
      
      
      
    
    
    
    
    </Stack.Navigator>
  );
}
