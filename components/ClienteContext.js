import React, { useState } from 'react';


const ClienteContext = React.createContext([{}, () => {}]);

const ClienteProvider = (props) => {
    const clienteIni = {
        name: "",
        age: "",
        salary: "",
      toggleName: (property, value) => {
        setCliente(
          {...cliente,[property]: value}
        );
      }
    }
    const [cliente, setCliente] = useState(clienteIni);
    return (
      <ClienteContext.Provider value={[cliente, setCliente]}>
        {props.children}
      </ClienteContext.Provider>
    )
  }

  export {ClienteProvider, ClienteContext}