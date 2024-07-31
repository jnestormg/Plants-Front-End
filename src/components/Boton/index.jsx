import styled from "styled-components"

const Button=styled.button`
    height: 50px;
    background: #39b008;
    color: aliceblue;
    font-size: 20px;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 4px;
    padding: 10px;
    font-family: "Arsenal SC", sans-serif;

    &:hover{
        background: #2d8708;
    }
`

const Boton=(props)=>{
    return(
        <Button>{props.val}</Button>
    )
}

export default Boton