import styled, { css } from "styled-components";

export const PagenationStyle = styled.div`
    padding: 20px 0;
    ${(props: {center?: any}) => props.center && css`
        justify-self: center;
    `}
`