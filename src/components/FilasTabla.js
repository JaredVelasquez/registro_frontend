import React, {useContext} from 'react';
import {FormContext} from '../context/FormContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import axios from 'axios'

const FilasTabla = ({empleados}) =>{
    
    const {setDatos} = useContext(FormContext);

      const BorrarEmpleado =(empleado)=>{
            axios.delete('http://localhost:4000/empleados/' + empleado).then(response => {
                console.log(response)
            }).catch(console.log)
      }
    
    
        return (
            <React.Fragment>
                {empleados.map(p=>(
                    <tr key={p.empleadoId}>
                    <td>{p.empleadoId}</td>
                    <td>{p.codigo}</td>
                    <td>{p.nombre}</td>
                    <td>{p.fechaNacimiento}</td>
                    <td>{p.estadoCivil}</td>
                    <td>{p.estado}</td>
                    <td><Button variant="success" onClick = {()=>setDatos(p)}>Actualizar</Button></td>
                    <td><Button id="borrar" variant="danger" onClick={()=>BorrarEmpleado(p.empleadoId.toString())}>Borrar</Button></td>
                    </tr>  
                ))}
                
            </React.Fragment>
            
        );
        
    
}

export default FilasTabla;