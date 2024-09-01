import { useState } from "react"
import SelectFlores from "../SelectFlores"
import { useContext } from "react";
import { ContextGlobal } from "../Context";
import styled from "styled-components";

const Select = styled.select`
  height: 35px;
  border-radius: 4px;
  outline: none;
`

const Botton = styled.button`
    height: 35px;
    margin-left: 5px;
    background: #04b604;
    border-radius: 5px;
    color: white;
    border: none;
`

const ContenedorBusqueda = styled.div`
    display: flex;
    flex-direction: row;
`

const BuscarColor = () => {

    const [valor, setValor] = useState("");

    const { buscarColor } = useContext(ContextGlobal);

    const updateDate = (e) => {
        setValor(e.target.value)
        console.log(valor);
    }

    const buscandoColor = (e) => {
        e.preventDefault();
        buscarColor(valor);

    }

    return (
        <>
            <form onSubmit={buscandoColor}>
                <ContenedorBusqueda>
                    <Select value={valor} onChange={updateDate}>
                        <option value="">Seleccione</option>
                        <option value="Blanco">Blanco</option>
                        <option value="Rojo">Rojo</option>
                        <option value="Rosa">Rosa</option>
                        <option value="Morado">Morado</option>
                        <option value="Violeta">Violeta</option>
                        <option value="Verde">Verde</option>
                        <option value="Naranja">Naranja</option>
                        <option value="Negro">Negro</option>
                        <option value="Multicolor">Multicolor</option>

                    </Select>
                    <Botton>Buscar</Botton>

                </ContenedorBusqueda>
            </form>
        </>
    )
}

export default BuscarColor