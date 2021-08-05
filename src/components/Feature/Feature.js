import React from 'react';
import { 
    FeatureSec,
    FeatureWrapper,
    FeatureHeading,
    FeatureContainer,
    FeatureCard,
    FeatureCardInfo,
    FeatureCardPlan,
    FeatureCardIcon,
    FeatureDisc,
    FeatureImage
 } from './Feature.elements';

 import WebImg1 from '../../assets/images/development.png';
 import WebImg2 from '../../assets/images/People.png'
 import WebImg3 from '../../assets/images/ux-design.png'


const Feature = () => {
    return (
        <FeatureSec>
            <FeatureWrapper>
                <FeatureHeading>What we do</FeatureHeading>
                <FeatureContainer>
                    <FeatureCard to="">
                        <FeatureCardInfo>
                            <FeatureCardIcon>
                                <FeatureImage src={WebImg1} />
                            </FeatureCardIcon>
                            <FeatureCardPlan>Development & IT</FeatureCardPlan>
                            <FeatureDisc>We will help you build custom web and mobile app that will bring your idea's into reality.</FeatureDisc>
                        </FeatureCardInfo>
                    </FeatureCard>

                    <FeatureCard to="">
                        <FeatureCardInfo>
                            <FeatureCardIcon>
                            <FeatureImage src={WebImg2} />
                            </FeatureCardIcon>
                            <FeatureCardPlan>Design & Creative</FeatureCardPlan>
                            <FeatureDisc>We will help you design, build and strategise your business to have to whole new feel and love towards your business.</FeatureDisc>
                        </FeatureCardInfo>
                    </FeatureCard>

                    <FeatureCard to="">
                        <FeatureCardInfo>
                            <FeatureCardIcon>
                                <FeatureImage src={WebImg3} />
                            </FeatureCardIcon>
                            <FeatureCardPlan>Sales & Marketing</FeatureCardPlan>
                            <FeatureDisc>We will help you build custom web and mobile app that will bring your idea's into reality.</FeatureDisc>
                        </FeatureCardInfo>
                    </FeatureCard>
                </FeatureContainer>
            </FeatureWrapper>
        </FeatureSec>
    );
}

export default Feature;