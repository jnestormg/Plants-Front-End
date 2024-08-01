import styled from "styled-components"
import { FaSearch } from "react-icons/fa";
import { useContext, useEffect, useRef } from "react";
import { ContextGlobal } from "../Context";
import { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const ContainerBuscador = styled.div`
    display: flex;
    justify-content: end;
`
const Buscar = styled.div`
    position: relative;
`
const InputBuscar = styled.input`
    height: 40px;
    width: 300px;
    outline: none;
    border-radius: 10px;
    border: 1px solid rgba(0,0,0,0.5);
    padding: 0px 30px;
    box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
`
const BotonBuscar = styled.button`
    position: absolute;
    right: 0;
    width: 40px;
    height: 40px;
    background: #39b008;
    border-radius: 10px;
    border: none;
    color: white;
    &:active{
        background: blue;
    }
`
const BotonLimpiar=styled(TiDeleteOutline)`
    color: rgba(0,0,0,0.4);
    font-size: 23px;
    position: absolute;
    left: 5;
    bottom: 10px;
    margin-left: 2px;
    &:hover{
        color: rgba(0,255,0,0.9);    
    }
`

const Buscador = () => {

    const { buscar, mostrarTodas } = useContext(ContextGlobal)
    const [dato, setDato] = useState("");

    const updateDate = (e) => {
        setDato(e.target.value)
    }

    useEffect(() => {
        if (dato.length === 0) {
            console.log("Esta vacio");
            mostrarTodas()
        }
    }, [dato])

    const buscandoPlanta = (e) => {
        e.preventDefault()
        if (dato.trim() === '') {
        }
        else {
            buscar(dato.toString().trim());
        }
    }

    const limpiarCampo=()=>{
        setDato('')
    }

    return (
        <>
            <ContainerBuscador>
                <form onSubmit={buscandoPlanta}>
                    <Buscar>
                        <Link onClick={limpiarCampo}><BotonLimpiar /></Link>
                        <InputBuscar placeholder="Buscar..." value={dato} onChange={updateDate} />
                        <BotonBuscar>
                            <FaSearch />
                        </BotonBuscar>
                    </Buscar>
                </form>
            </ContainerBuscador>
        </>

    )
}

export default Buscador