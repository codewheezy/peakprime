import React from 'react';
import { AboutContanier } from '../Aboutpage/About.elements';
import { 
    ContactWrap, 
    GetInTouchWrap, 
    GetInTouchHeading,
    GetInTouchText,
    QuickLinkIconWrap,
    QuickLinkWrap,
    QuickLinkIcon,
    QuickLinkIcon2,
    QuickLinkText1,
    QuickLinkText2,
    ContactFromWrap,
    ContactFrom,
    TextAreaInput,
    ContactFromTitle,
    ContactFromInput,
    ContactBtn } from './Contact.elements';

import Imessage from '../../assets/images/imessage.png';
import Phone from '../../assets/images/phone.png';
import PlaceMarker from '../../assets/images/place-marker.png';

const Contact = () => {
    return(
        <AboutContanier>
            <ContactWrap>
                <GetInTouchWrap>
                    <GetInTouchHeading>Get In Touch</GetInTouchHeading>
                    <GetInTouchText>Got a question or query? We’d love to chat with you about it! You can say hi and get in touch with our carelines teams using the details below.</GetInTouchText>
                    <QuickLinkWrap>
                        <QuickLinkIconWrap>
                            <QuickLinkIcon src={Imessage} />
                            <QuickLinkText1>peakprime@gmail.com</QuickLinkText1>
                        </QuickLinkIconWrap>
                        <QuickLinkIconWrap>
                            <QuickLinkIcon src={Phone} />
                            <QuickLinkText1>+919611478337</QuickLinkText1>
                        </QuickLinkIconWrap>
                        <QuickLinkIconWrap>
                            <QuickLinkIcon2 src={PlaceMarker} />
                            <QuickLinkText2>Valgevase 13, 10414 Tallinn, Estonia</QuickLinkText2>
                        </QuickLinkIconWrap>
                    </QuickLinkWrap>
                </GetInTouchWrap>
                <ContactFromWrap>
                    <ContactFrom>
                        <ContactFromTitle>Say something</ContactFromTitle>
                            <ContactFromInput type="text" placeholder="Fullname" />
                            <ContactFromInput type="text" placeholder="Email" />
                            <TextAreaInput />
                            <ContactBtn type="submit" value="Send" />
                    </ContactFrom>
                </ContactFromWrap>
            </ContactWrap>
        </AboutContanier>
    )
}

export default Contact;