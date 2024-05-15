import axios from "axios";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import ContentHeader from '../../componentes/webPage/ContentHeader.js';
import Footer from '../../componentes/webPage/Footer.js';
import NavBar from '../../componentes/webPage/NavBar.js';
import SidebarContainer from '../../componentes/webPage/SidebarContainer.js';
import './CompCliente.css';


const URL = 'http://localhost:4000/api/proveedores/';

const CompEditProveedor = () => {

    const [empresa, setEmpresa] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    //funcion de modificar

    const EditProveedor = async (event) => {
        event.preventDefault();
        await axios.put(`${URL}${id}`, {
            empresa: empresa,
            correo: correo,
            telefono: telefono,
            direccion: direccion
        })
        navigate('/proveedores')
    }

    useEffect(() => {
        getProveedoresByID()
        //eslint-disable-next-line
    }, [])


    const getProveedoresByID = async () => {
        const resultado = await axios.get(`${URL}${id}`)
        setEmpresa(resultado.data.empresa);
        setCorreo(resultado.data.correo);
        setTelefono(resultado.data.telefono);
        setDireccion(resultado.data.direccion);
    }
    return (
        <div className="wrapper">
            <NavBar></NavBar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={"Dashboard: Proveedores"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Dashboard"}
                    ruta1={"/home"}
                />

                <section className="content">
                    <div>
                        
                        <form className="formulario" onSubmit={EditProveedor}>
                        <h3 className="titulo">Actualización de datos de Proveedores</h3>
                            <div className="mb-3">
                                <label className="form-label">Empresa</label>
                                <input value={empresa} type="text" className="form-control"
                                    onChange={(event) => setEmpresa(event.target.value)} />
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
                                <button type="submit" className="btn btn-primary">Actualizar</button>
                            </div>
                        </form>
                    </div>

                </section>

            </div>
            <Footer></Footer>
        </div>
    )
}
export default CompEditProveedor;




