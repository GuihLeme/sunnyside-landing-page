import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --red: hsl(7, 99%, 70%);
    --yellow:  hsl(51, 100%, 49%);
    --cyan-900: hsl(167, 40%, 24%); //text
    --cyan-500: hsl(168, 34%, 41%); // footer
    --blue-500: hsl(198, 62%, 26%); //text photo
    --blue-900: hsl(212, 27%, 19%);
    --gray-900: hsl(213, 9%, 39%);
    --gray-500: hsl(232, 10%, 55%);
    --gray-100: hsl(210, 4%, 67%);
    --white: hsl(0, 0%, 100%);
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    /* font-family: 'Fraunces', serif; */
    font-family: 'Barlow', sans-serif;
    font-size: 1.125rem;
  }

  h1 {
    font-family: 'Fraunces', serif;
  }
`

export default GlobalStyle;
