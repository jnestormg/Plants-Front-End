import { useState } from "react"
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

const BuscarLuz = () => {

    const [valor, setValor] = useState("");

    const { buscarLuz } = useContext(ContextGlobal);

    const updateDate = (e) => {
        setValor(e.target.value)
        console.log(valor);
    }

    const buscandoColor = (e) => {
        e.preventDefault();
        buscarLuz(valor);

    }

    return (
        <>
            <form onSubmit={buscandoColor}>
                <ContenedorBusqueda>
                    <Select value={valor} onChange={updateDate}>
                        <option value="">Seleccione</option>
                        <option value="Sol total">Sol</option>
                        <option value="Sombra parcial">Sombra</option>
                    </Select>
                    <Botton>Buscar</Botton>

                </ContenedorBusqueda>
            </form>
        </>
    )
}

export default BuscarLuz