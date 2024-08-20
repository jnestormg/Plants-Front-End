import styled from "styled-components";


const Radio = styled.input``

const Label = styled.label``

const Container = styled.div`
display: inline;
`

const RadioButton = (props) => {

    const actualizarValor = (e) => {
        props.setValor(e.target.value)
        console.log(e.target.value);
        
    }

    return (
        <>
            <Label>
                <Container>
                    <Radio
                        type="radio"
                        checked={props.checked}
                        name={props.nombre}
                        value={props.valor}
                        onChange={actualizarValor}
                    />
                </Container>
                {props.opcion}
            </Label>
        </>
    )
}

export default RadioButton