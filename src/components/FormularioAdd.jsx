import React, { useState } from "react";
import {v4 as uuid} from "uuid"
const FormularioAdd = ({ dispatch }) => {
    const [data, setData] = useState({ nombre: "", numero: "", email: "" });

const {nombre, numero, email} = data

    const handleChange = (e) => {
      setData({
          ...data, [e.target.name]: e.target.value
      })
    };
//uuid
    const actionAdd = {
        type: "add",
        payload: {
            id: uuid(),
            nombre,
            numero,
            email,
        }
    };
    const handleAdd = () => {
        dispatch(actionAdd);
    };

    return (
        <>
            <div className="container">
                <label className="mx-1 d-grid gap-2">
                    Nombre:{""}{" "}
                    <input
                    value={nombre}
                       onChange={handleChange}
                        name="nombre"
                        type="text"
                        className="form-control"
                        autoComplete="off"
                    />
                </label>
                <label className="mx-1 d-grid gap-2">
                    Numero:{""}
                    <input
                     value={numero}
                        onChange={handleChange}
                        name="numero"
                        type="text"
                        className="form-control"
                        autoComplete="off"
                    />
                </label>
                <label className="mx-1 d-grid gap-2">
                    Email:{""}{" "}
                    <input
                     value={email}
                       onChange={handleChange}
                        name="email"
                        type="text"
                        className="form-control"
                        autoComplete="off"
                    />
                </label>
                <div className="mx-1 d-grid gap-2">
                    <button onClick={handleAdd} className="btn btn-success mt-2">
                        Agregar
                    </button>
                </div>
            </div>
        </>
    );
};

export default FormularioAdd;
