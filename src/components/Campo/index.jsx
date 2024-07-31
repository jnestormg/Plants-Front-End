import styled from "styled-components"

const Input=styled.input`
    width: 100%;
    height: 50px;
    border-radius: 4px 10px 4px 10px;
    border: 1px solid rgba(0,0,0,0.3);
    margin-bottom: 10px;
    box-shadow:0px 4px 8px rgba(0,0,0,0.1) ;
    &:focus{
        outline: none;
    }
`

const Label=styled.label`
    font-size: 16px;
    font-weight: bold;
    color: #2d8708;
`

const Campo =(props)=>{

    const actualizarValor=(e)=>{
        console.log(e.target.value);
        props.setValor(e.target.value);
    }

    return(
        <>

        <Label>{props.titulo}</Label>

        <Input
         placeholder={props.placeholder} 
         value={props.valor} 
         onChange={actualizarValor} >
         </Input>
         
        </>
        
    )
}

export default Campo