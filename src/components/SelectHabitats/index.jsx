import { useContext } from "react";
import { ContextGlobal } from "../Context";
import {styled} from "styled-components";

const Select=styled.select`
height: 40px;
border-radius: 5px;
outline: none;
border: 1px solid rgba(0,0,0,0.2);
box-shadow:  0px 4px 8px rgba(0,0,0,0.1);`

const Option=styled.option`
    height: 30px;
    font-size: 16px;
`

const Label=styled.label`
    font-size: 16px;
    font-weight: bold;
    color: #2d8708;
`
const SelectHabitats = (props) => {
    const { habitats } = useContext(ContextGlobal);

    const actualizarValor = (e) => {
        console.log(e.target.value);
        // Verificar que el valor no sea "Seleccione" antes de actualizar
        if (e.target.value !== "") {
            props.setValor(JSON.parse(e.target.value));
        } else {
            props.setValor(null); // o un valor predeterminado
        }
    };

    return (
        <>
            <Label>{props.titulo}</Label>
            <Select value={props.valor ? JSON.stringify(props.valor) : ""} onChange={actualizarValor}>
                <Option value="">Seleccione</Option>
                {habitats.map((habitat) => {
                    return (
                        <Option key={habitat.id} value={JSON.stringify(habitat)}>
                            {habitat.nombre_habitat}
                        </Option>
                    );
                })}
            </Select>
        </>
    );
};

export default SelectHabitats;
