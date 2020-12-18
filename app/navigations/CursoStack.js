import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Cursos from "../screens/Curso/Curso";
import CursosAdd from "../screens/Curso/CursoAdd";
import CursosDet from "../screens/Curso/CursoDet";
import CursosList from "../screens/Curso/CursoList";




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
        name="cursos-det"
        component={CursosDet}
        options={{ title: "Detalle de los cursos" }}
      />
      <Stack.Screen
        name="cursos-list"
        component={CursosList}
        options={{ title: "Lista de Cursos" }}
      />
      
      
      
    
    
    
    
    </Stack.Navigator>
  );
}
