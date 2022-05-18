import styled from "styled-components";

export const Card = styled('div')`
    padding: 2rem;
    width: 25vw;
    transition: all 0.2s ease-in;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, 
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    cursor: pointer;
    
    
    @media (max-width: 1472px) {
        width: 35vw;
    }

    @media (max-width: 1039px) {
        width: 100vw;
    }

    &:hover {
        transition: all 0.3s ease-in;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, 
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    }
`

export const HeaderCard = styled('div')`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`

export const Emoji = styled('div')`
    width: 1.6rem;
    height: 1.6rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border: 1px solid #4aa9e8;
    margin-right: 10px;
`

export const EmojiAdust = styled('span')`
    position: absolute;
    bottom: 3px;
    color: #000;
    width: fit-content;
    text-align: center;
`

export const CountryName = styled('h4')`
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 1.2rem;
`
export const CountryDetails = styled('span')`
    font-weight: ${({countryData}) => countryData ? '500' : '400'};
`
export const CountryItems = styled('li')`
    margin-bottom: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
` 