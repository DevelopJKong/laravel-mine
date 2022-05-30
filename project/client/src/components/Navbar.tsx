import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.div`
    width:100%;
    height:70px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    display:flex;
    align-items:center;
`;

const Logo = styled.h1`
    flex:1;
    font-size:24px;
    margin-left:5px;
`;

const List = styled.ul`
    display:flex;
    justify-content:flex-end;
    flex:4;
`;

const ListItem = styled.li`
    margin-right:25px;
`;


function Navbar() {
    return (
        <Container>
            <Logo>Cafe Small House</Logo>
            <List>
                <ListItem>
                    <Link to="/login">Login</Link>
                </ListItem>
                <ListItem>
                    <Link to="/register">Register</Link>
                </ListItem>
                <ListItem>
                    <Link to="/about">About me</Link>
                </ListItem>
                <ListItem>
                    <Link to="/contact">Contact me</Link>
                </ListItem>
            </List>
        </Container>
    );
}

export default Navbar;
