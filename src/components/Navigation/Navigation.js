import { Nav, StyledNav } from '../Navigation/Navigation.styled';

export const Navigation = () => {
    return (
        <Nav>
            <StyledNav to="/">Главная</StyledNav>
            <StyledNav to="/movies">Фильмы</StyledNav>
        </Nav>
    )
};

