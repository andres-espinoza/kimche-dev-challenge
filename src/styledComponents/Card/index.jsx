import styled from "styled-components";

export const Card = styled('div')`
    padding: 2rem;
    width: 25vw;
    transition: all 0.2s ease-in;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, 
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    cursor: pointer;
    

    &:hover {
        transition: all 0.3s ease-in;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, 
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    }
`

