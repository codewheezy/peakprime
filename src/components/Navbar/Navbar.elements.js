import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';
import { FaMagento } from 'react-icons/fa';

export const Nav = styled.nav`
    background: #3B2F63;
    background-image: radial-gradient(ellipse at 0% bottom, rgba(118,72,160,0.7) 0%, rgba(118,72,160,0) 60%),radial-gradient(ellipse at 90% bottom, #523f8c 0%, rgba(82,63,140,0) 40%);
    background-repeat: no-repeat;
    background-size: 100% 1000px;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
`
export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;

    $(Container)
`
export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`
export const NavIcon = styled(FaMagento)`
    margin-right: 0.5rem;
`
export const MobileIcon = styled.div`
    display: none;

    @media (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        // z-index: 9999;
        top: 80px;
        left: ${({click}) => (click ? 0 : '-100%')};
        ocpacity: 1;
        transition: all 0.5s ease;
        background: #3B2F63;
        background-image: radial-gradient(ellipse at 0% bottom, rgba(118,72,160,0.7) 0%, rgba(118,72,160,0) 60%),radial-gradient(ellipse at 90% bottom, #523f8c 0%, rgba(82,63,140,0) 40%);
    }
`
export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;

    &:hover {
        border-bottom: 2px solid #fff;
    }

    @media screen and (max-width: 960px) {
        width: 100%;

        &:hover {
            border: none;
        }
    } 
`
export const NavItemBtn = styled.li`
    @media screen and (max-width: 960px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
    }
`
export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    font-weight: 700;

    @media screen and (max-width: 960px) {
        text-align: center;
        padding:2rem;
        width: 100%;
        display: table;
        
        &:hover {
            color: #4b59f7;
            transition: all 0.3s ease;
        }
    }
`
export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
`;