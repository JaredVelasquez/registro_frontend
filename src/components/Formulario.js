import React, {Fragment, useState, useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { FormContext } from "../context/FormContext.js";

const Formulario = () =>{

    const {datos,handleChange} = useContext(FormContext);



    
    const EnviarDatos = (event) =>{
        event.preventDefault()
            axios.post('http://localhost:4000/empleados', {
                codigo: datos.codigo,
                nombre: datos.nombre,
                fechaNacimiento: datos.fechaNacimiento,
                estadoCivil: datos.estadoCivil,
                estado: datos.estado
            }).then(response => {
                console.log(response)
            }).catch(error =>{ console.log(error.response)})
    }
    const Actualizar = (event) =>{
        event.preventDefault()
            axios.put('http://localhost:4000/empleados/' + datos.empleadoId, {
                codigo: datos.codigo,
                nombre: datos.nombre,
                fechaNacimiento: datos.fechaNacimiento,
                estadoCivil: datos.estadoCivil,
                estado: datos.estado
            }).then(response => {
                console.log(response)
            }).catch(error =>{ console.log(error.response)})
    }

    console.log(datos);
    return (
        <Fragment>
            
            <div className="formregister container" >
                
                <form onSubmit={EnviarDatos}>
                    <div className="col-md-3">
                        <input
                        placeholder="Codigo de RH"
                        className="form-control"
                        type="text"
                        name="codigo"
                        onChange={handleChange}
                        value={datos.codigo}
                        >
                        </input>

                    </div>
                    
                    <div className="col-md-3">
                        <input
                        placeholder="Nombre"
                        className="form-control"
                        type="text"
                        name="nombre"
                        onChange={handleChange}
                        value={datos.nombre}
                        >
                        </input>

                    </div>
                    <div className="col-md-3">
                        <input
                        placeholder="Fecha de nacimiento"
                        type="date"
                        className="form-control"
                        name="fechaNacimiento"
                        onChange={handleChange}
                        value={datos.fechaNacimiento}
                        >
                        </input>

                    </div>
                    <div className="col-md-3">
                            <input
                            placeholder="Estado civil"
                            className="form-control"
                            type="text"
                            name="estadoCivil"
                            onChange={handleChange}
                            value={datos.estadoCivil}
                            >
                            </input>

                        </div>
                        <div className="col-md-3">
                            <input
                            placeholder="Estado"
                            className="form-control"
                            type="text"
                            name="estado"
                            onChange={handleChange}
                            value={datos.estado}
                            >
                            </input>

                        </div>
                        <div className="registrar col-md-3" >
                            <button className="btn btn-primary" type="submit">Registrar Empleado</button>
                        </div>
                        <div className="registrar col-md-3" >
                            <button className="btn btn-primary" onClick={Actualizar}>Actualizar</button>
                        </div>
                </form>   
            </div>

        </Fragment>

    )

}

export default Formulario;