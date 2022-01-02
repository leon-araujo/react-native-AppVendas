import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src//Home";
import Produto from "./src/Produto"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={Home}
        options={{
          title: "Loja do Leonardo Moura",
          headerStyle: {
            backgroundColor: "#11538C",
          },
          headerTintColor: "#F0F1F2",
          headerTitleAlign: "center"
        }}
        />
        <Stack.Screen name="Produto" component={Produto}
        options={{
          title: "Loja do Leonardo Moura",
          headerStyle: {
            backgroundColor: "#11538C",
          },
          headerTintColor: "#F0F1F2",
          headerTitleAlign: "center"
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}