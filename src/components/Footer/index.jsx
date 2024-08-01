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
    color: white;
    &:hover{
        color: green;
    }
`

const Footer=()=>{
    return(
        <>
        <PiePagina>
            <h5>Desarrollado por: <Liga href="mailto:nmeneses51@gmail.com">Néstor Meneses</Liga> </h5>
        </PiePagina>
        </>
    )
}

export default Footer