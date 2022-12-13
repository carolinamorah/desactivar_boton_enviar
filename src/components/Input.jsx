import React from "react";

function Input({ username, setUsername, password, setPassword }) {
    return (
        <>
            <h3 className="mb-5 text-center">Desafío estado de componentes y eventos</h3>
            <section>
                <div className="form-group mb-3">
                    <label>Nombre</label>
                    <input id="username" type='text' value={username} className="form-control" placeholder="Ingresa tu nombre de usuario" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group mb-3">
                    <label>Password</label>
                    <input id="password" type='password' value={password} className="form-control" placeholder="Ingresa tu contraseña" onChange={(e) => setPassword(e.target.value)} />
                </div>
            </section>
        </>
    );
}
export default Input;