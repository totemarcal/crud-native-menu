
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import AddCliente from './AddCliente'
import DeleteCliente from './DeleteCliente'
import EditarCliente from './EditarCliente'
import ClienteService from "../../services/ClienteService";

function ListCliente({}) {

  const [isAddClienteModalOpen, setIsAddClienteModalOpen] = useState(false)
  const [isDeleteClienteModalOpen, setIsDeleteClienteModalOpen] = useState(false)
  const [isEditarClienteModalOpen, setIsEditarClienteModalOpen] = useState(false)
  const [clientes, setClientes] = useState([])
  const [selectedCliente, setSelectedCliente] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")


  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    setErrorMessage("")
    ClienteService.getAll()
                  .then(res => {
                    setClientes(res.data)
                  })
                  .catch(err => {
                    setErrorMessage("Erro ao concectar com a API.")
                  })
  }

  const toggleAddCliente = () => {
    setIsAddClienteModalOpen(!isAddClienteModalOpen)
  }

  const addCliente = (data) => {
    setClientes([data, ...clientes])
  }

  const updateCliente = (data) => {
    console.log(data)
    setClientes(clientes.map(cli => cli.id == data.id ? data : cli) )
  }

  const deleteCliente = name => {
    setClientes(clientes.filter(cli => cli.name !== name))
  }

  const toggleDeleteClienteModal = () => {
    setIsDeleteClienteModalOpen(!isDeleteClienteModalOpen)
  }
  
  const toggleEditarClienteModal = () => {
    setIsEditarClienteModalOpen(!isEditarClienteModalOpen)
  }

  return(
    <ScrollView>
      <View style={styles.container}>
          <Text style={styles.title}>Lista de Clientes: </Text>

          <TouchableOpacity
            onPress={toggleAddCliente}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Add Cliente</Text>
            </TouchableOpacity>          
            {clientes.map((data, index) => 
              <View style={styles.clienteListContainer}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.listItem}>Idade: {data.age}</Text>
                <Text style={styles.listItem}>CPF: {data.cpf}</Text>

                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      toggleEditarClienteModal();
                      setSelectedCliente(data)
                    }}
                    style={{ ...styles.button, marginVertical: 0 }}>
                    <Text style={styles.buttonText}>Editar</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      toggleDeleteClienteModal();
                      setSelectedCliente(data)
                    }}
                    style={{ ...styles.button, marginVertical: 0, marginLeft: 10, backgroundColor: "tomato" }}>
                    <Text style={styles.buttonText}>Delete</Text>
                  </TouchableOpacity>
                </View>

              </View>
            )}        
          {
            errorMessage !== "" ? <Text style={styles.name}>{errorMessage}</Text> : null
          }
          {isAddClienteModalOpen ? <AddCliente 
            isOpen={isAddClienteModalOpen}
            closeModal={toggleAddCliente}
            addCliente={addCliente}
          /> : null}

          {isEditarClienteModalOpen ? <EditarCliente
            isOpen={isEditarClienteModalOpen}
            closeModal={toggleEditarClienteModal}
            selectedCliente={selectedCliente}
            updateCliente={updateCliente}
          /> : null}

          {isDeleteClienteModalOpen ? <DeleteCliente
            isOpen={isDeleteClienteModalOpen}
            closeModal={toggleDeleteClienteModal}
            selectedCliente={selectedCliente}
            deleteCliente={deleteCliente}
          /> : null}



      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    width: '100%'
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
    title:{
      fontWeight: "bold",
      fontSize: 20,
      marginBottom: 20
    },
    name: {
      fontWeight: "bold",
      fontSize: 16
    },
    listItem: {
      fontSize: 16
    },
    clienteListContainer: {
      marginBottom: 25,
      elevation: 4,
      backgroundColor: "white",
      padding: 10,
      borderRadius: 6,
      borderTopWidth: 1,
      borderColor: "rgba(0,0,0,0.1)",
      width: '100%'
    },
  });

  export default ListCliente
  