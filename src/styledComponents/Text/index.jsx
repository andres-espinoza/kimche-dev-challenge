import styled from "styled-components";

export const Paragraph = styled('p')`
    
    font-family: 'Source Code Pro', monospace;
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({main}) => main ? '#fff' : '#000'};
    width: ${({main}) => main ? '60%' : '100%'};

    @media (max-width: 600px) {
        width: 100%;
        text-align: ${({main}) => main ? 'center' : 'start'};
    }
`  
