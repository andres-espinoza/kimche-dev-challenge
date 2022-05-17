import styled from "styled-components";

export const Header = styled('header')`
    background-color: #000;
    padding: 3rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
`

export const InputContainer = styled('div')`
    
    font-size: 1rem;
    border-radius: 5px;
    border: 2px solid #000;
    padding: 0.6em 1em;
    width: fit-content;
    display:flex;
    margin: 2rem 0;
`

export const MainContent = styled('main')`
    padding: 3rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SearchContainer = styled('section')`
    display: flex;
    flex-direction: column;
    width: 50vw;
    justify-content: center;
    align-items: center;

`
export const GroupByContainer = styled('section')`
    display: flex;
    width: 70%;
    justify-content: space-evenly;
    align-items: center;
`

