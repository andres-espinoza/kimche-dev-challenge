import styled from "styled-components";

export const Button = styled('button')`

    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: #fff;
    padding: 0.6em 0.9em;
    border: 2px solid transparent;
    border-radius: 5px;
    background-color: #4aa9e8;
    transition: all 0.4s ease-in;
    cursor: pointer;


    &:hover {

        transition: all 0.4s ease-in;
        background-color: #fff;
        color: #000;
        border-color: #4aa9e8;
    }
`