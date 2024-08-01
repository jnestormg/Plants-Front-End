import { createContext, useEffect, useState } from "react";


const ContextGlobal = createContext();

const Context = ({ children }) => {

    const [planta, setPlanta] = useState([]);

    const url = "https://plants-production-6c0e.up.railway.app/api/v1/plantas";

    useEffect(() => {
        fetch(url).
            then(response => response.json()).
            then(data => {
                setPlanta(data)
            })
    }, [])

    const mostrarTodas = () => {
        fetch(url).then(response => response.json()).then(dat => { setPlanta(dat) })
    }

    const guardar = (datos) => {
        fetch(url,
            {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(datos)
            }
        ).then(response => response.json());
    }

    const borrar = async (id) => {
        try {
            const repuesta = await fetch(`${url}/${id}`,
                {
                    method: "DELETE",
                })
            window.location.reload()
        }
        catch (error) { console.log(error); }
    }

    const buscar = (nombre) => {
        try {
            if (nombre != null) {
                fetch(`${url}/nombre/${nombre}`).
                    then(response => response.json()).
                    then(data => { setPlanta(data) })

            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ContextGlobal.Provider value={{ planta, setPlanta, guardar, borrar, buscar, mostrarTodas }}>
            {children}
        </ContextGlobal.Provider>
    )
}

export { ContextGlobal, Context }