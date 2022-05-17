import styled from "styled-components";

export const Header = styled('header')`
    background-color: #000;
    padding: 4rem;
    display: flex;
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
    position: relative;
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

export const CardsContainer = styled('section')`
    width: 80vw;
    margin: 3rem 0;
`

export const CathegoryContainer = styled('section')`
    margin-bottom: 3rem;
`
export const CountriesCards = styled('div')`
    display: flex;
    flex-flow: row wrap;
    gap: 2rem;
`
