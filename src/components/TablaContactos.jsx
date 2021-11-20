import React from "react";

const TablaContactos = ({ contactos = [], dispatch }) => {
 
    const handleDelete = (id)=>{
        const deleteAction= {
            type: 'delete',
            payload: id
        }
        dispatch(deleteAction)
    }
    
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>NUMERO</th>
                    <th>EMAIL</th>
                    <th>ACCION</th>
                </tr>
            </thead>
            <tbody>
                {contactos.map(contacto => {
                    const finalId = contacto.id.split('-')
                    return (
                        <tr key={contacto.id}>
                            <th>{finalId[0]}</th>
                            <td>{contacto.nombre} </td>
                            <td>{contacto.numero} </td>
                            <td>{contacto.email} </td>

                            <button onClick={()=> handleDelete(contacto.id)}
                                type="button"
                                className="btn btn-danger  bg-danger"
                            >Eliminar</button>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default TablaContactos;
