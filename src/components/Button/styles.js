import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 11px;
    position: relative;
    color: #fff;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;

    ${({variant}) => variant !== 'primary' && css`
        min-width: 167px;
        height: 33px;
        background: #e41050;

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #e41050;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 20px;

        }
    `}

`

