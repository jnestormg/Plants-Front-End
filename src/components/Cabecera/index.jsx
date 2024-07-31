import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
    width: 100%;
    height: 60px;
    background: black;
    position: fixed;
    top: 0;
    color: white;
    padding: 10px;
    z-index: 1000;
`;

const Nav = styled.nav``;

const Ul = styled.ul`
    display: flex;
    justify-content: left;
    gap: 20px;
    list-style: none;
    padding: 0;
    margin: 0;
    
`;

const Li = styled.li`
@media (min-width: 320px) and (max-width:600px) {
    &:last-child{
    position: absolute;
    right: 0;
    margin-right: 40px;
    } 
}

`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white; 
    font-size: 25px;
    font-family: "Arsenal SC", sans-serif;

    &:hover{
        color: #39b008;
    }
    
`;



const Cabecera = () => {
    return (
        <Header>
            <Nav>
                <Ul>
                    <Li>
                        <StyledLink to="/">Home</StyledLink>
                    </Li>
                    <Li>
                        <StyledLink to="/formulario">Agregar planta</StyledLink>
                    </Li>
                    
                </Ul>
            </Nav>
        </Header>
    );
};

export default Cabecera;
