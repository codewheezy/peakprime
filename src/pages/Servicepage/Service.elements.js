import styled from 'styled-components';

export const SkillContanier = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    padding: 5% 0;
`
export const SkillBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    width: 65%;

    &:nth-child(even) {
        margin-left: 50%
    }
`
export const SkillTitle = styled.div`
    display: flex;
    align-items: center;
    color: #6e5baa;
    line-height: 1.49;
    font-size: 22.5px;
    font-family: 'Gentona Book';
`
export const SkillIcon = styled.img`
    margin-right:20px;
`
export const SkillDetails = styled.div`
    padding-top: 10px;
`
export const SkillDetailsHeaderWrap = styled.ul`
    list-style-type: none;
    font-family: 'Gentona';
    font-weight: 500;
    color: #4a5568;
`
export const SkillDetailsHeaderElement = styled.li`
    padding: 0 6px;
    line-height: 1;
    display: inline-block;
    border-left: 1px solid;

    &:first-child {
        border-left: none;
        padding-left: 0;
    }
`
export const SubTitle = styled.p`
    font-size: 16px;
    font-weight: 300;
    color: #4a5568;
    padding: .2em 0;
`
export const SubList = styled.ul`
    list-style-type: none;
    font-size: 14px;
    font-weight: 300;
    color: #4a5568;
    margin-left: 20px;
`
export const RightImg = styled.div`
    width: 30%;
    overflow: hidden;
`
export const ServiceAnimation = styled.div`
    width: 100%;
    height: 100%;
    max-width: 410px;
    max-height: 700px;
    margin-top: -100px;
    position: relative;
    display: flex;
`
