import styled from "styled-components"

const PrincipalContenedor=styled.main`
margin-top: 60px;
padding:20px;

`

const Main=({children})=>{
    return(
        <PrincipalContenedor>
            {children}
        </PrincipalContenedor>
    )
}

export default Main