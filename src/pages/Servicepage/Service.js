import React from 'react';
import { AboutContanier } from '../Aboutpage/About.elements';
import { 
    SkillContanier, 
    SkillBox, 
    SkillTitle, 
    SkillIcon, 
    SkillDetails, 
    SkillDetailsHeaderWrap,
    SkillDetailsHeaderElement,
    SubTitle,
    SubList,
    RightImg,
    ServiceAnimation } from './Service.elements';
import People from '../../assets/images/People.png';
import BackEnd from '../../assets/images/backend-development.png';
import WebDevelopment from '../../assets/images/development.png'
import Outline from '../../assets/images/Outline.png';
import Smartphone from '../../assets/images/smartphone.png';
import MarketingIcon from '../../assets/images/ux-design.png';


const Service = () => {
    return(
        <AboutContanier>
            <SkillContanier>
                <SkillBox>
                    <SkillTitle>
                        <div>
                            <SkillIcon src={People} title="People" />
                        </div>
                        <div>Artificial <br/> Intelligence</div>
                    </SkillTitle>
                    <SkillDetails>
                        <SkillDetailsHeaderWrap>
                            <SkillDetailsHeaderElement>Pattern Recognition</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Natural Language Understanding</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Machine Learning</SkillDetailsHeaderElement>
                        </SkillDetailsHeaderWrap>
                        <SubTitle>— Machine Learning</SubTitle>
                        <SubList>
                            <SkillDetailsHeaderElement>Spark MLLib</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Tensorflow</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>H2O</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Theano</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Keras</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Scikit-learn</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Pytorch</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Octave/Matlab</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>LSTM’s Attention</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>RNNs</SkillDetailsHeaderElement>
                        </SubList>
                    </SkillDetails>
                </SkillBox>
                <SkillBox>
                    <SkillTitle>
                        <div>
                            <SkillIcon src={People} title="People" />
                        </div>
                        <div>Design <br/> Creative</div>
                    </SkillTitle>
                    <SkillDetails>
                        <SkillDetailsHeaderWrap>
                            <SkillDetailsHeaderElement>User Research</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>User Journey Mapping</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Persona Creation</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Design Strategy</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Heuristic Evaluation</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Branding</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Design Systems</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Wireframe & Prototyping</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Visual Design</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Information Architecture</SkillDetailsHeaderElement>
                        </SkillDetailsHeaderWrap>
                    </SkillDetails>
                </SkillBox>
                <SkillBox>
                    <SkillTitle>
                        <div>
                            <SkillIcon src={MarketingIcon} title="AI" />
                        </div>
                        <div>Sales &<br/> Marketing</div>
                    </SkillTitle>
                    <SkillDetails>
                        <SkillDetailsHeaderWrap>
                            <SkillDetailsHeaderElement>User Research</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>User Journey Mapping</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Persona Creation</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Design Strategy</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Heuristic Evaluation</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Branding</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Design Systems</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Wireframe & Prototyping</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Visual Design</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Information Architecture</SkillDetailsHeaderElement>
                        </SkillDetailsHeaderWrap>
                    </SkillDetails>
                </SkillBox>
                <SkillBox>
                    <SkillTitle>
                        <div>
                            <SkillIcon src={Smartphone} title="Smartphone" />
                        </div>
                        <div>Mobile <br/> Applications</div>
                    </SkillTitle>
                    <SkillDetails>
                        <SkillDetailsHeaderWrap>
                            <SkillDetailsHeaderElement>Android</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>iOS</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Flutter</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>React Native</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>NativeScript</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Ionic</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Cordova</SkillDetailsHeaderElement>
                        </SkillDetailsHeaderWrap>
                    </SkillDetails>
                </SkillBox>
                <SkillBox>
                    <SkillTitle>
                        <div>
                            <SkillIcon src={WebDevelopment} title="Web Development" />
                        </div>
                        <div>Web <br/> Applications</div>
                    </SkillTitle>
                    <SkillDetails>
                        <SkillDetailsHeaderWrap>
                            <SkillDetailsHeaderElement>Angular</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>React</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Vue Js</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>NgRx Store</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Redux</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>RxJs</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>HTML5</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>CSS3</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>SCSS</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Material UI</SkillDetailsHeaderElement>
                        </SkillDetailsHeaderWrap>
                    </SkillDetails>
                </SkillBox>
                <SkillBox>
                    <SkillTitle>
                        <div>
                            <SkillIcon src={BackEnd} title="BackEnd" />
                        </div>
                        <div>Backend <br/> Development</div>
                    </SkillTitle>
                    <SkillDetails>
                        <SkillDetailsHeaderWrap>
                            <SkillDetailsHeaderElement>Java / J2EE / Spring</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Django</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Flask</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Node Js</SkillDetailsHeaderElement>
                        </SkillDetailsHeaderWrap>
                        <SubTitle>— Database</SubTitle>
                        <SubList>
                            <SkillDetailsHeaderElement>MySql</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>SQL</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>MongoDB</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>RDS</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>DynamoDB</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>CouchDB</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>PostgreSQL</SkillDetailsHeaderElement>
                        </SubList>
                    </SkillDetails>
                </SkillBox>
                <SkillBox>
                    <SkillTitle>
                        <div>
                            <SkillIcon src={Outline} title="Outline" />
                        </div>
                        <div>QA & <br />Software Testing</div>
                    </SkillTitle>
                    <SkillDetails>
                        <SkillDetailsHeaderWrap>
                            <SkillDetailsHeaderElement>Manual</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Automation</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Load</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Stress</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Performance</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Security</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Smoke</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Localization</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Unit</SkillDetailsHeaderElement>
                            <SkillDetailsHeaderElement>Beta/Acceptance</SkillDetailsHeaderElement>
                        </SkillDetailsHeaderWrap>
                    </SkillDetails>
                </SkillBox>
            </SkillContanier>
            <RightImg>
                <ServiceAnimation>
                    
                </ServiceAnimation>
            </RightImg>
        </AboutContanier>
    );
}

export default Service;