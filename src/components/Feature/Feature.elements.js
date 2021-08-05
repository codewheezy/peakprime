import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FeatureSec = styled.div`
  color: #fff;
  padding: 100px 0 160px;
  background-color: #f7fafc;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
      margin: 0 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
  }
`;

export const FeatureHeading = styled.h1`
  color: #4a5568;
  font-size: 48px;
  font-family: 'Gentona Bold';
  margin-bottom: 24px;
`;

export const FeatureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 960px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
  }
`;

export const FeatureCard = styled(Link)`
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
  border: 1px solid #cbd5e0;
  border-radius: .25rem;
  text-decoration: none;
  background: #edf2f7;
  width:25%;

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    // transform: scale(1.06);
    transition: all .2s ease;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`

export const FeatureCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  align-items: center;
  color: #4a5568;
  height: 350px;
`;

export const FeatureCardIcon = styled.div`
  margin: 24px 0;
  display: flex;
  justify-content: center;
  width: 100%;

`
export const FeatureImage = styled.img``

export const FeatureCardPlan = styled.h3`
  margin-bottom: 1rem;
  font-size: 24px;
  text-align: center;
`;

export const FeatureDisc = styled.p`
  font-size: 16px;
  text-align: center;
//   margin-bottom: 2rem;
`
