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
`

export const Title = styled.h2`
    font-family: 'Open Sans', sans-serif;
    font-size: 32px;
    font-weight: 700;
    font-style: normal;
    width: 320px;
    margin-bottom: 20px;
    line-height: 45px;
    color: #ffffff;
`

export const TitleHighlight = styled.span`
    color: #e4105d;
`

export const TextContent = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    width: 420px;
    margin-bottom: 20px;
    line-height: 22px;
    color: #ffffff;
`