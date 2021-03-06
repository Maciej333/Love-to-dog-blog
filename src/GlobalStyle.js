import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;