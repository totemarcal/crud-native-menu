import * as React from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native';


function HomeScreen({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor="#61dafb"
          />
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Tela Principal</Text>
          </View>
          </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ECF0F1'
    }})
    
  export default HomeScreen
  