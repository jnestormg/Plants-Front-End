import styled from "styled-components"

const PrincipalContenedor=styled.main`
    margin-top: 60px;
    padding:20px;

    @media (min-width: 320px) and (max-width:480px){
    padding: 40px;
   }

`
const Main=({children})=>{
    return(
        <PrincipalContenedor id="main">
            {children}
        </PrincipalContenedor>
    )
}

export default Main