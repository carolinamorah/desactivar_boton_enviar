import React from "react";

function Input({setAbled}) {

    const validarEstado = value => {
        if(value === "252525")
            setAbled(true)
        else
            setAbled(false)
    }
    
    return (
        <>
            <h3 className="mb-5 text-center">Desafío estado de componentes y eventos</h3>
            <section>
                <div className="form-group mb-3">
                    <label>Nombre</label>
                    <input id="username" type='text' className="form-control" placeholder="Ingresa tu nombre de usuario" />
                </div>
                <div className="form-group mb-3">
                    <label>Password</label>
                    <input id="password" type='password' className="form-control" placeholder="Ingresa tu contraseña" onChange={(e) => validarEstado(e.target.value)} />
                </div>
            </section>
        </>
    );
}
export default Input;