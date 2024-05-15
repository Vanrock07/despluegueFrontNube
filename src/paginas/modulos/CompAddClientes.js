import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContentHeader from '../../componentes/webPage/ContentHeader.js';
import Footer from '../../componentes/webPage/Footer.js';
import NavBar from '../../componentes/webPage/NavBar.js';
import SidebarContainer from '../../componentes/webPage/SidebarContainer.js';
import './CompCliente.css';


const URL = "http://localhost:4000/api/clientes/";

const CompAddClientes = () => {

    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [documento, setDocumento] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');

    const navigate = useNavigate();

    //guardar datos
    const guardarCliente = async (event) => {
        event.preventDefault();
        await axios.post(URL, {
            nombres: nombres,
            apellidos: apellidos,
            documento: documento,
            correo: correo,
            telefono: telefono,
            direccion: direccion
        })
        navigate('/clientes')
    }
    return (
        <div className="wrapper">
            <NavBar></NavBar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={"Dashboard: Clientes"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Dashboard"}
                    ruta1={"/home"}
                />

                <section className="content">
                    <div className = "formulario">
                        <h3 className ="titulo">Agregar cliente</h3>
                        <form onSubmit={guardarCliente}>

                            <div className="mb-3">
                                <label className="form-label">Nombres</label>
                                <input value={nombres} type="text" className="form-control"
                                    onChange={(event) => setNombres(event.target.value)} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Apellidos</label>
                                <input value={apellidos} type="text" className="form-control"
                                    onChange={(event) => setApellidos(event.target.value)} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Documento</label>
                                <input value={documento} type="number" className="form-control"
                                    onChange={(event) => setDocumento(event.target.value)} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Correo</label>
                                <input value={correo} type="text" className="form-control"
                                    onChange={(event) => setCorreo(event.target.value)} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Telefono</label>
                                <input value={telefono} type="number" className="form-control"
                                    onChange={(event) => setTelefono(event.target.value)} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Direccion</label>
                                <input value={direccion} type="text" className="form-control"
                                    onChange={(event) => setDireccion(event.target.value)} />
                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary">Guardar</button>
                            </div>
                        </form>
                    </div>

                </section>

            </div>
            <Footer></Footer>
        </div>


    )
}
export default CompAddClientes;