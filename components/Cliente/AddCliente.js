
import React, {useState} from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, AsyncStorage } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const AddCliente = (props) => {
  const initialClienteState = {
    name: "",
    age: "",
    cpf: ""
  }

  const [cliente, setCliente] = useState(initialClienteState)
  const { isOpen, closeModal } = props

  const handleChange = (value, name) => {
    setCliente( {...cliente, [name]: value})
  }

  const addCliente = async () => {
    props.addCliente(cliente) 
    props.closeModal();

  }

  return(
    <Modal
        visible={isOpen}
        onRequestClose={closeModal}
        animationType="slide"
    >
        <View style={styles.container}>
          <Text style={styles.title}>Add novo Cliente </Text>
          <TextInput
            placeholder="Digite o nome: "
            style={styles.textBox}
            onChangeText={(text) => handleChange(text, "name")}
          />

          <TextInput
            placeholder="Digite o idade: "
            style={styles.textBox}
            onChangeText={(text) => handleChange(text, "age")}
            keyboardType="numeric"
          />

          <TextInput
            placeholder="Digite o cpf: "
            style={styles.textBox}
            onChangeText={(text) => handleChange(text, "cpf")}
            keyboardType="numeric"
          />

          <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={addCliente}
            style={{...styles.button, marginVertical: 0}}
            >
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={closeModal}
            style={{...styles.button, marginVertical: 0, marginLeft: 10, backgroundColor: "tomato"}}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>

        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
      container: {
        padding: 15
    },
    title:{
      fontWeight: "bold",
      fontSize: 20,
      marginBottom: 20
    },
    textBox: {
      borderWidth: 1,
      borderRadius: 6,
      borderColor: "rgba(0,0,0,0.3)",
      marginBottom: 15,
      fontSize: 18,
      padding: 10
    },
    buttonContainer: {
      marginTop: 10,
      flexDirection: "row",
      alignItems: "center"
    },
    button: {
      borderRadius: 5,
      marginVertical: 20,
      alignSelf: 'flex-start',
      backgroundColor: "gray",
    },
    buttonText: {
        color: "white",
        paddingVertical: 6,
        paddingHorizontal: 10,
        fontSize: 16
    },
  });

  export default AddCliente
  