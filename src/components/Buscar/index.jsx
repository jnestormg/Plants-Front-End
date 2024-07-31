import styled from "styled-components"
import { FaSearch } from "react-icons/fa";

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
    padding: 5px 10px;
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

const Buscador = () => {
    return (
        <>
            <ContainerBuscador>
                <Buscar>
                    <InputBuscar placeholder="Buscar..." />
                    <BotonBuscar>
                        <FaSearch />
                    </BotonBuscar>
                </Buscar>
            </ContainerBuscador>
        </>

    )
}

export default Buscador