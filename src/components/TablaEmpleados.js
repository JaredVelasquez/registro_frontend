import React, {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';
import FilasTabla from './FilasTabla';
import axios from 'axios';

const TablaEmpleados = () =>{
    const [empleados,setEmpleados] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:4000/empleados')
        .then(response => {
            console.log(response)
            setEmpleados(response.data)
        }).catch(console.log)
    }, []
    )

        return (
            <React.Fragment>
                <Table striped bordered variant="dark" className="employe">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>codigo</th>
                        <th>Nombre</th>
                        <th>Fecha de nacimiento</th>
                        <th>Estado civil</th>
                        <th>Activo</th>
                        <th>Actualizar</th>
                        <th>Borrar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <FilasTabla  empleados={empleados}/>
                    </tbody>
                </Table>
            </React.Fragment>
        );

}

export default TablaEmpleados;