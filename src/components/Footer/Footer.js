import React from 'react';
import {
  FooterContainer,
  FooterWrapper,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialList,
  SocialListLi,
  SocialImg,
  SocialIconLink,
  SubmitBtn
} from './Footer.elements';
import FacebookImg from '../../assets/images/facebook.png';
import InstagramImg from '../../assets/images/instagram.png';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About</FooterLinkTitle>
              <FooterLink to='/sign-up'>How it works</FooterLink>
              <FooterLink to='/'>Testimonials</FooterLink>
              <FooterLink to='/'>Careers</FooterLink>
              <FooterLink to='/'>Investors</FooterLink>
              <FooterLink to='/'>Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact</FooterLinkTitle>
              <FooterLink to='/'>Contact</FooterLink>
              <FooterLink to='/'>Support</FooterLink>
              <FooterLink to='/'>Destinations</FooterLink>
              <FooterLink to='/'>Sponsorships</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to='/'>Submit Video</FooterLink>
              <FooterLink to='/'>Ambassadors</FooterLink>
              <FooterLink to='/'>Agency</FooterLink>
              <FooterLink to='/'>Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to='/'>Instagram</FooterLink>
              <FooterLink to='/'>Facebook</FooterLink>
              {/* <FooterLink to='/'>Youtube</FooterLink> */}
              {/* <FooterLink to='/'>Twitter</FooterLink> */}
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <FooterSubscription>
          <FooterSubHeading>Subscribe to our monthly newsletter</FooterSubHeading>
          <FooterSubText>You email address:</FooterSubText>
          <Form>
            <FormInput name='email' type='email' />
            <SubmitBtn type="submit" value="Ok" />
          </Form>
          <SocialList>
            <SocialListLi>
              <SocialIconLink>
                <SocialImg src={FacebookImg} alt="facebook" />
                <SocialImg src={InstagramImg} alt="instagram" />
              </SocialIconLink>
            </SocialListLi>
          </SocialList>
        </FooterSubscription>
      </FooterWrapper>
      <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>
              <SocialIcon />
              PEAKPRIME
            </SocialLogo>
            <WebsiteRights>All rights reserved by Peakprime. Copyright © 2021</WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;