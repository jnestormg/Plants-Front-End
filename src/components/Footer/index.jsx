import styled from "styled-components"

const PiePagina=styled.footer`
    width: 100%;
    height: 60px;
    background: black;
    color: white;
    display: flex;
    justify-content: center;
   
`
const Liga=styled.a`
    text-decoration: none;
    color: #8bf1ff;
    &:hover{
        color: green;
    }
`

const Footer=()=>{
    return(
        <>
        <PiePagina>
            <h5>Desarrollado por: Néstor Meneses</h5>
            <h5>Correo: <Liga href="mailto:nmeneses51@gmail.com">nmeneses51@gmail.com</Liga> </h5>
        </PiePagina>
        </>
    )
}

export default Footer