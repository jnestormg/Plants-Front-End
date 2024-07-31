import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

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
&:last-child{
    position: absolute;
    right: 0;
    margin-right: 40px;
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

const Buscar = styled.div`
position: relative;
`
const InputBuscar = styled.input`
    height: 40px;
    width: 200px;
    outline: none;
    border-radius: 10px;
    border: none;
    padding: 5px 10px;
`
const BotonBuscar = styled.button`
position: absolute;
right: 0;
width: 40px;
height: 40px;
background: #39b008;
border-radius: 10px;
border: none;
color: white;
&:active{
    background: blue;
}
`

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
                    <Li>
                        <Buscar>
                            <InputBuscar placeholder="Buscar..." />
                            <BotonBuscar>
                                <FaSearch />
                            </BotonBuscar>
                        </Buscar>
                    </Li>
                </Ul>
            </Nav>
        </Header>
    );
};

export default Cabecera;
