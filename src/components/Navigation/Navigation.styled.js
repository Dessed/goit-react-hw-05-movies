import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
padding: 30px;
border-bottom: solid 2px black;
box-shadow: 0 3px 0 #8a909c;
`;

export const StyledNav = styled(NavLink)`
font-size: 32px;
margin-right: 30px;
color: black;

&.active {
    color: blue;
}
`;