import * as React from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ListCliente from './components/Cliente/ListCliente'
import ListFuncionarios from './components/Funcionarios/ListFuncionarios'
import HomeScreen from './components/HomeScreen'

const options = {
    headerLeft: () => (
      <TouchableOpacity onPress={navigation.openDrawer}>
        <Text style={{margin: 8}}>Esquerdo</Text>
      </TouchableOpacity>
    )
  };

const Drawer = createDrawerNavigator();

export default function App() {
  return (  
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen options={options} name="Home" component={HomeScreen} />
        <Drawer.Screen options={options} name="Cliente" component={ListCliente} />
        <Drawer.Screen options={options} name="Funcionarios" component={ListFuncionarios} />
      </Drawer.Navigator>
    </NavigationContainer>
    
  );
}
