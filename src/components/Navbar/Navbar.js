import styled from 'styled-components';
import Logo from '../../images/logo.png';
import { NavLinks } from "./NavLinks";

const Navbar = () => {
    return (
        <StyledNavbar>
            <img src={Logo} alt="logo" />
            <NavLinks isCenter="" isPadding="" />
        </StyledNavbar>
    );
}

const StyledNavbar = styled.nav`
    position: relative;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    padding-top: 20px;
    font-size: 1rem;

    & img {
        margin-left: 2%;
        width: auto;
        max-width: 100px;
        min-width: 25px;
    }

    @media screen and (min-width: 500px) {
        & {
            font-size: 1.5rem;
        }

        & img {
            max-width: 150px;
        }
    }
`;

export default Navbar;