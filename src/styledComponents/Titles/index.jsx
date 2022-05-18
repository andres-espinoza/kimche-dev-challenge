import styled from "styled-components";

export const MainTitle = styled('h1')`

    font-family: 'GFS Didot', serif;
    font-weight: 400;
    font-size: 3rem;
    letter-spacing: 3px;
    color: #fff;
    width: min-content;
    margin-right: 8rem;
    text-align: center;

    @media (max-width: 750px) {
        margin-right: 0;
        margin-bottom: 2rem;
    }
`

export const SubTitle = styled('h2')`
    
    font-family: 'GFS Didot', serif;
    font-weight: 400;
    font-size: 2.2rem;

`

export const CathegoryTitle = styled('h3')`
    /* font-family: 'Montserrat', sans-serif; */
    font-family: 'GFS Didot', serif;
    font-weight: 400;
    font-size: 2rem;
    letter-spacing: 0.5px;
    margin-bottom: 2rem;
`