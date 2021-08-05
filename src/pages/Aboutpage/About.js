import React from 'react';
import { 
    AboutContanier,
    AboutWrapper,
    AboutHeading,
    AboutTextContainer,
    AboutText,
    AboutLink
} from './About.elements';

const About = () => {
    return(
        <AboutContanier>
            <AboutWrapper>
                <AboutHeading>The Peakprime Journey</AboutHeading>
                    <AboutTextContainer>
                        <AboutText>We’re Outfunnel and we’re building a <AboutLink to="">revenue marketing</AboutLink> tool.</AboutText>
                        <AboutText>Why build another marketing tool? <AboutLink to="">There are many reasons</AboutLink>, but the main one is that setting up marketing campaigns that really support the sales team is still a hassle, despite all the tech out there.</AboutText>
                        <AboutText>With Outfunnel, you can automate your email marketing, unify your sales and marketing data, prioritize your hottest leads, and get insights to optimize your marketing ROI.</AboutText>
                        <AboutText>Our team members are experienced marketers, sales operators and developers from companies like Pipedrive, The Next Web, Amazon, Lingvist, Bang&Olufsen and Skype.</AboutText>
                        <AboutText>We are backed by <AboutLink to="">Founders, Paua Ventures</AboutLink> and a fine group of angel investors. We’re based in Tallinn, Estonia from where we’re serving businesses around the world.</AboutText>
                    </AboutTextContainer>
            </AboutWrapper>
        </AboutContanier>
    );
}

export default About;