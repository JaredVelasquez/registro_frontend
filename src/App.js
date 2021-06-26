import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';
import './assets/css/App.css';
import Formulario from './components/Formulario';
import TablaEmpleados from './components/TablaEmpleados';
import React, {useState} from 'react';
import {FormContext} from './context/FormContext';

function App() {
    const [datos,  setDatos] = useState({
      codigo: '',
      nombre: '',
      fechaNacimiento: new Date(),
      estadoCivil: '',
      estado: ''
  })
  
  const handleChange = ({ target }) => {
    setDatos({
      ...datos,
      [target.name]: target.value,
    });
  };
  console.log(datos);

  return (
    <div className="App">
      <header className="App-header">
        <Col>
          <FormContext.Provider value={{datos,setDatos,handleChange}}>

              <Row>
                <Formulario/>
              </Row>
              <Row>
                <TablaEmpleados/>

              </Row>
            </FormContext.Provider>
        </Col>
          

      </header>
      
    </div>
  );
}

export default App;
