import { createContext, useEffect, useState } from "react";


const ContextGlobal = createContext();

const Context = ({ children }) => {

    const [planta, setPlanta] = useState([]);

    useEffect(() => {
        fetch("https://plants-production-6c0e.up.railway.app/api/v1/plantas").
            then(response => response.json()).
            then(data => {
                setPlanta(data)
            })
    }, [])

    const actualizar = (datos) => {
        fetch("https://plants-production-6c0e.up.railway.app/api/v1/plantas",
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
            const repuesta = await fetch(`https://plants-production-6c0e.up.railway.app/api/v1/plantas/${id}`,
                {
                    method: "DELETE",
                })
                window.location.reload()
        }
        catch (error) { console.log(error); }
    }

    return (
        <ContextGlobal.Provider value={{ planta, setPlanta, actualizar, borrar }}>
            {children}
        </ContextGlobal.Provider>
    )
}

export { ContextGlobal, Context }