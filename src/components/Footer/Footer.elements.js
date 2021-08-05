import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  background-color: #f0f0f0;
  font-size: 16px;
  font-weight: 400;
  color: #666;
  box-shadow: 0 1px 1px 0 rgb(240 240 240 / 10%) inset;
  padding: 15px 0 0 0;
  display: flex;
  flex-direction: column;
`;
export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 2em 50px;

  @media screen and (max-width: 420px) {
    flex-direction: column;
    padding: 1.4em 20px;
    text-align: center;
  }
`;

export const FooterSubscription = styled.section`
  display: flex;
  width:32%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (max-width: 420px) { 
    margin-top: 38px;
    width: 100%;
    padding-top: 10px;
    border-top: 1px solid #d7d7d7;
  }
`;

export const FooterSubHeading = styled.h3`
  margin: 1.33em 0 1em;
  font-size: 16px;
  text-align: left;
  padding: 0;
  color:#6e5baa;
`;

export const FooterSubText = styled.span`
  font-size: 16px;
  line-height: 1.8em;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #d7d7d7;
  padding-bottom: 15px;
  width: 100%;

  @media screen and (max-width: 420px) {
    border-bottom: none;
  }
`;

export const FormInput = styled.input`
  padding: 0px 10px;
  height: 40px;
  width: 100%;
  border: 1px solid #d7d7d7;
  box-shadow: 0 0 4px rgb(110 91 170 / 0%);
  transition: all .2s ease;
  border-radius: 4px;
  overflow: visible;
  font-size: 16px;

  &::placeholder {
    color: #666;
  }

  &:focus {
    outline: none;
    border:1px solid #6e5baa;
    box-shadow: 0 0 4px rgb(110 91 170 / 50%);
  }

`;

export const SubmitBtn = styled.input`
  position: absolute;
  height: 30px;
  width: 40px;
  margin: 5px;
  background-color: #6e5baa;
  right: 4%;
  border: 1px solid transparent;
  border-radius: 3px;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  font-size: 16px;
  padding: 0;
  letter-spacing: .05em;

  @media screen and (max-width: 420px) {
    right: 5.5%;
  }
`

export const FooterLinksContainer = styled.div`
  width: 68%;
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 420px) {
    width: 100%;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 420px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 25%;
  padding-right: 2%;
  box-sizing: border-box;

  @media screen and (max-width: 420px) {
    padding: 0;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%
  }
`;

export const FooterLinkTitle = styled.h4`
  color: #211746;
  font-family: 'Gentona Bold';
  text-transform: uppercase;
  font-size: 14px;
  margin: 1.33em 0 1em;
`;

export const FooterLink = styled(Link)`
  color: #666;
  text-decoration: none;
  line-height: 1.8em;

  &:hover {
    color: #1a1a1a;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  background: rgba(255,255,255,0.4);
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 2em 50px;

  @media screen and (max-width: 420px) {
    flex-direction: column;
    justify-content: center;
    padding: 2em 20px;
  }
`;

export const SocialLogo = styled(Link)`
  color: #666;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const SocialIcon = styled(FaMagento)`
  margin-right: 10px;
`;

export const WebsiteRights = styled.small`
  color: #666;
  font-size: 16px;

  @media screen and (max-width: 420px) { 
    text-align: center;
    padding-top: 0.5em;
  }
`;
export const SocialList = styled.ul`
  list-style: none;
`;
export const SocialListLi = styled.li`
  display: inline-block;
  margin-right: 5px;
`;
export const SocialIconLink = styled.a`
  cursor: pointer;
`;
export const SocialImg = styled.img`
  width: 100%;
  max-width: 25px;
  height: 100%;
  max-height: 25px;
  margin-top: 10px;
  margin-right: 10px;
`;