import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AboutContanier = styled.div`
    display: flex;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 50px;
    background-color: #f7fafc;
`
export const AboutWrapper = styled.div`
    padding: 3rem 0;
`
export const AboutHeading = styled.h1`
    font-family: 'Gentona Bold';
    font-size: 46px;
    color: #4a5668;
    line-height: 1.1;
    font-weight: 800;
    margin-bottom: 16px;
`
export const AboutTextContainer = styled.div`
    margin-bottom: 5em;
`
export const AboutText = styled.p`
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 1em;
    font-weight: 300;
    text-align: left;
    color: #4a5568;
`
export const AboutLink = styled(Link)`
    color: #6e5baa;
    font-family: 'Gentona Bold';
    text-decoration: none;
`