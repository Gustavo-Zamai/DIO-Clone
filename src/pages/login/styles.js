import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 126px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 118px;
`

export const Wrapper = styled.div`
    max-width: 300px;
`

export const Column = styled.div`
    flex: 1;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const Title = styled.h2`
    font-family: 'Open Sans', sans-serif;
    font-size: 32px;
    font-weight: 700;
    font-style: normal;
    width: 565px;
    margin-bottom: 20px;
    line-height: 45px;
    color: #ffffff;
`


export const TitleLogin = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 32px;
    font-weight: 700;
    font-style: normal;
    width: 320px;
    margin-bottom: 20px;
    line-height: 45px;
`

export const SubtitleLogin = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    width: 320px;
    margin-bottom: 35px;
    line-height: 45px;    
`

export const ForgotText = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 700;
    font-style: normal;
    line-height: 19px; 
    color: #e5e044;   
`

export const CreateText = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 700;
    font-style: normal;
    line-height: 19px; 
    color: #23DD7A;   
`