import styled from 'styled-components';
import { FormInput, SubmitBtn } from '../../components/Footer/Footer.elements';

export const ContactWrap = styled.div`
    padding: 3rem 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-warp: wrap;
`
export const GetInTouchWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;
`
export const GetInTouchHeading = styled.h2`
    font-family: 'Gentona Bold';
    color: #4a5668;
    font-size: 46px;
    font-weight: 800;
    margin-bottom: 16px;
`
export const GetInTouchText = styled.p`
    width: 70%;
    font-size: 18px;
    color: #4a5568;
    line-height: 23px;
`
export const QuickLinkWrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4rem 0;
`
export const QuickLinkIconWrap = styled.div`
    display: flex;
    margin-bottom: 2em;
`
export const QuickLinkIcon = styled.img`
    width: 100%;
    max-width: 30px;
    margin-right: 20px;
`
export const QuickLinkIcon2 = styled.img`
    width: 100%;
    max-width: 36px;
    margin-right: 14px;
`
export const QuickLinkText1 = styled.span`
    font-size: 18px;
    margin-top: 2px;
`
export const QuickLinkText2 = styled.span`
    font-size: 18px;

    &:last-child {
        margin-top: 7px;
    }
`
export const ContactFromWrap = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    width: 55%;
`
export const ContactFrom = styled.form`
    width: 450px;
    box-shadow: 3px 3px 5px 6px #ccc;
    height: 470px;
    padding: 2.5rem;
    margin-top: 8%;
`
export const ContactFromTitle = styled(GetInTouchHeading)`
    font-size: 2em;
    margin-bottom: 30px;
`
export const ContactFromInput = styled(FormInput)`
    border: 1px solid #6e5baa;
    box-shadow: none;
    margin-bottom: 20px;
`
export const TextAreaInput = styled.textarea`
    height: 120px;
    border: 1px solid #6e5baa;
    width: 100%;
    resize: none;
    margin-bottom: 20px;
    padding: 10px;
    font-size: 16px;

    &:focus {
        outline: none;
        border:1px solid #6e5baa;
        box-shadow: 0 0 4px rgb(110 91 170 / 50%);
    }
`
export const ContactBtn = styled(SubmitBtn)`
    position: relative;
    height: 35px;
    margin: 0;
    right: 0;
    width: 100%;
`