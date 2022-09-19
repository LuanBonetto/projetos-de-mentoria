import {createGlobalStyle} from 'styled-components'

export const GlobalStyled = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        text-decoration: none;
    }

    body {
        color: #fff;
        background-color: #000;
        font-family: 'Montserrat', sans-serif;
    }
`