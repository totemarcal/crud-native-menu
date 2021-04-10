import * as React from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ListCliente from './components/Cliente/ListCliente'
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
<<<<<<< HEAD
  return (
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="auto" />
    </View>
=======
  return (  
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen options={options} name="Home" component={HomeScreen} />
        <Drawer.Screen options={options} name="Cliente" component={ListCliente} />
      </Drawer.Navigator>
    </NavigationContainer>
    
>>>>>>> 81ec51f6cd7221d6f70b1b92fc141b3ac69e8d8c
  );
}
