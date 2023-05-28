import { createGlobalStyle } from 'styled-components'
import { fontFamily } from '../styles/font'
import { primaryColor } from '../styles/theme'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Short+Stack&display=swap');


    * {
        -ms-overflow-style: none;
        scrollbar-width: none;
        font-family: 'Short Stack', cursive;
    }
    
    *::-webkit-scrollbar { 
        display: none;
    }

    html {
        height: 100%;
    }

    body {
        height: 100%;
        font-family: ${fontFamily};
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: ${primaryColor};
    }
`

export default GlobalStyle