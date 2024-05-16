import axios from "axios";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ContentHeader from '../../componentes/webPage/ContentHeader.js';
import Footer from '../../componentes/webPage/Footer.js';
import NavBar from '../../componentes/webPage/NavBar.js';
import SidebarContainer from '../../componentes/webPage/SidebarContainer.js';
import './CompCliente.css';


//const URL = 'http://localhost:4000/api/clientes/';
const URL = "https://desplieguenube.onrender.com/api/clientes/";

const ComponenteClienteMostar = () => {
    const [clientes, setClientes] = useState([]);
    useEffect(() => {
        getClientes()
    }, [])

    //mostrar
    const getClientes = async () => {
        const datos = await axios.get(URL);
        setClientes(datos.data);
    }
    //eliminar
    const eliminarCliente = async (id) => {
        await axios.delete(`${URL}${id}`);
        getClientes();
        //eslint-disable-next-line
    }
    return (
        <div className="wrapper">
            <NavBar></NavBar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={"Dashboard: Clientes" }
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Dashboard"}
                    ruta1={"/home"}
                />

                <section className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Link to='agregar' className="btn btn-info mt-2 mb2">
                                Agregar</Link>
                                <table className="table">
                                    <thead className="tablethebg">
                                        <tr className="tablehead">
                                            <th scope="col">Nombres</th>
                                            <th scope="col">Apellidos</th>
                                            <th scope="col">Documento</th>
                                            <th scope="col">Correo</th>
                                            <th scope="col">Telefono</th>
                                            <th scope="col">Direccion</th>
                                            <th scope="col">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {clientes.map((cliente, index) => (
                                            <tr key={index}>
                                                <td>{cliente.nombres}</td>
                                                <td>{cliente.apellidos}</td>
                                                <td>{cliente.documento}</td>
                                                <td>{cliente.correo}</td>
                                                <td>{cliente.telefono}</td>
                                                <td>{cliente.direccion}</td>
                                                <td className="acciones">
                                                    <Link to={`editar/${cliente._id}`} className="btn btn-info mt-2 mb2">
                                                        <i className="fa-regular fa-pen-to-square"></i>
                                                    Editar</Link>
                                                    <button onClick={() => eliminarCliente(cliente._id)} className="btn btn-danger mt-2 mb2"> 
                                                   Eliminar</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Footer></Footer>
        </div>
    )
}
export default ComponenteClienteMostar;