import styled, {createGlobalStyle} from 'styled-components';
import Gentona from './assets/fonts/Gentona-Light.woff2';
import GentonaMedium from './assets/fonts/Gentona-Medium.woff2';
import GentonaBook from './assets/fonts/Gentona-Book.woff2';
import GentonaBold from './assets/fonts/Gentona-ExtraBold.woff2';


const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Gentona Bold';
        src: url(${GentonaBold}) format('woff2');
    }

    @font-face {
        font-family: 'Gentona Medium';
        src: url(${GentonaMedium}) format('woff2');
    }
        
    @font-face {
        font-family: 'Gentona Book';
        src: url(${GentonaBook}) format('woff2');
    }
        
    @font-face {
        font-family: 'Gentona';
        src: url(${Gentona}) format('woff2');
    }

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Gentona';
    }
`
export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 50px;

    @media screen and (max-width: 991px) {
        padding: 0 30px;
    }
`
export const Button = styled.button`
    border-radius: 3px;
    border: 1px solid transparent;
    background: ${({ primary }) => (primary ? '#FFFFFF' : '#79589F')};
    box-shadow: ${({ primary }) => (primary ? 'inset 0 0 0 1px rgb(121 88 159 / 60%)' : 'none')};
    white-space: nowrap;
    font-weight: 700;
    padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
    color: ${({ primary }) => (primary ? '#79589F' : '#FFFFFF')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        background: #fff;
        background-color: ${({ primary }) => (primary ? '#FFFFFF' : '#79589F')};
    }
  
    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;

export default GlobalStyle;