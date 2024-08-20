import styled from "styled-components"

const Input = styled.input`
    width: 100%;
    /*height: ${(props) => (props.type == "checkbox" ? '15px' : '45px')};*/
    height: 45px;
    border-radius: 5px;
    border:1px solid rgba(0,0,0,0.2) ;
    margin-bottom: 10px;
    box-shadow:0px 4px 8px rgba(0,0,0,0.1) ;
    padding: 0px 10px;
    &:focus{
        outline: none;
    }
`
const Label = styled.label`
    font-size: 16px;
    font-weight: bold;
    color: #2d8708;
`
const CampoNumber = (props) => {

    const actualizarValor = (e) => {
        console.log(e.target.value);
        props.setValor(e.target.value);
    }

    return (
        <>

            <Label>{props.titulo}</Label>

            <Input
                type="number"
                placeholder={props.placeholder}
                value={props.valor}
                onChange={actualizarValor}
                required={props.required}
                min="1.0"
                max="400.0"
                step="0.5"
            >

            </Input>

        </>

    )
}

export default CampoNumber