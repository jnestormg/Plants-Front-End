import { createContext, useEffect, useState } from "react";


const ContextGlobal = createContext();

const Context = ({ children }) => {

    const [planta, setPlanta] = useState([]);

    const [RequerimientoAgua, setRequerimientoAgua]=useState([])

    const [RequerimientoLuz, setRequerimientoLuz]=useState([])

    const [suelo, setSuelo]=useState([])

    const [habitats, setHabitats]=useState([])

    const [familias, setFamilias]=useState([])

    const [flores, setFlores]=useState([])


  //  const url = "https://plants-production-6c0e.up.railway.app/api/v1/plantas";
    /*const url = "http://localhost:8080/api/v1/plantas";
    const urlRequerimientosAgua="http://localhost:8080/requerimientos-agua";
    const urlRequerimientosLuz="http://localhost:8080/requerimiento-luz";
    const urlSuelo="http://localhost:8080/suelo";
    const urlHabitats="http://localhost:8080/habitats";
    const urlFamilias="http://localhost:8080/familias";
    const urlFlores="http://localhost:8080/flores";*/

    const url = "https://plants-zn1b.onrender.com/api/v1/plantas";
    const urlRequerimientosAgua="https://plants-zn1b.onrender.com/requerimientos-agua";
    const urlRequerimientosLuz="https://plants-zn1b.onrender.com/requerimiento-luz";
    const urlSuelo="https://plants-zn1b.onrender.com/suelo";
    const urlHabitats="https://plants-zn1b.onrender.com/habitats";
    const urlFamilias="https://plants-zn1b.onrender.com/familias";
    const urlFlores="https://plants-zn1b.onrender.com/flores";



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

    useEffect(()=>{
        fetch(urlRequerimientosAgua).then(respo=>respo.json()).then(dattos=>{setRequerimientoAgua(dattos)})

    },[])

    useEffect(()=>{
        fetch(urlRequerimientosLuz).then(respo=>respo.json()).then(dattos=>{setRequerimientoLuz(dattos)})

    },[])

    useEffect(()=>{
        fetch(urlSuelo).then(respo=>respo.json()).then(dattos=>{setSuelo(dattos)})

    },[])

    useEffect(()=>{
        fetch(urlHabitats).then(respo=>respo.json()).then(dattos=>{setHabitats(dattos)})

    },[])

    useEffect(()=>{
        fetch(urlFamilias).then(response=>response.json()).then(data=>{setFamilias(data)})
    },[])

    useEffect(()=>{
        fetch(urlFlores).then(response=>response.json()).then(data=>{setFlores(data)})
    },[])


    

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

    const buscarColor = (color)=>{
        try{
            if(color.length !=0){
            fetch(`https://plants-zn1b.onrender.com/api/v1/plantas/color/${color}`)
            .then(response=>response.json())
            .then(data=>{setPlanta(data)})
            }else{
                alert("No se ha seleccionado ningún color")
                fetch(`https://plants-zn1b.onrender.com/api/v1/plantas`)
                .then(response=>response.json())
                .then(data=>{setPlanta(data)})
            }
        }catch(error){
            console.log(error);
            
        }
    }

    const buscarLuz = (luz)=>{
        try{
            if(luz.length !=0){
            fetch(`https://plants-zn1b.onrender.com/api/v1/plantas/luz/${luz}`)
            .then(response=>response.json())
            .then(data=>{setPlanta(data)})
            }else{
                alert("No se ha seleccionado ningún color")
                fetch(`https://plants-zn1b.onrender.com/api/v1/plantas`)
                .then(response=>response.json())
                .then(data=>{setPlanta(data)})
            }
        }catch(error){
            console.log(error);
            
        }
    }

    const buscar = (nombre) => {
        try {
            if (nombre != null) {
                fetch(`https://plants-zn1b.onrender.com/api/v1/planta/name/${nombre}`).
                    then(response => {
                        if (!response.ok) {
                            console.log(response.statusText);
                        }
                        else {
                            return response.json()
                        }
                    }).
                    then(data => {
                        if (data.length > 0) {
                            return setPlanta(data)
                        }
                        else { alert("No existe la planta: " + nombre) }
                    }).
                    catch(error => console.error('Hubo un problema: ' + error))
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ContextGlobal.Provider value={{ planta, 
        setPlanta, guardar, borrar,
         buscar, mostrarTodas, RequerimientoAgua,
         RequerimientoLuz, buscarColor,
         suelo, habitats, buscarLuz,
         familias, flores }}>
            {children}
        </ContextGlobal.Provider>
    )
}

export { ContextGlobal, Context }