import React, { useState, useEffect } from 'react';
import {useLazyQuery } from "@apollo/client";
import {FIND_COUNTRY} from '../../GraphQl/queries';
import { CountryCard } from '../index';
import { SubTitle, CathegoryTitle } from '../../styledComponents/Titles';
import { Paragraph} from '../../styledComponents/Text';
import { Button } from '../../styledComponents/Button';
import { Input } from '../../styledComponents/Input';
import {HiOutlineSearch} from 'react-icons/hi';
import { 
    InputContainer, 
    MainContent, 
    SearchContainer, 
    GroupByContainer, 
    CardsContainer,
    CathegoryContainer,
    CountriesCards
} from '../../styledComponents/Containers';

const SearchBar = ({data}) => {

    // Local state to save our input value
    const [keyword, setKeyword] = useState('');
    const regexNonLetters = new RegExp('[^a-zA-Z\\s]', 'g');
    const handleChange = e => {
        setKeyword(e.target.value.replace(regexNonLetters, ""))
    };

    //Constants to use in the groupBy State
    const byContinent = 'continents';
    const byLanguage = 'languages';

    //Local state to store the data of the countries to display on screen later
    const [displayCountries, setDisplayCountries] = useState({
        display: [],
        groupBy: null,
        titles: null,
    });

    //Hooks to get and store the data by query, using the country code
    const [getCountry, countryData] = useLazyQuery(FIND_COUNTRY);

    //Regex for search countries starting with...
    let typingInput = "^" + keyword.toLowerCase();
    let dynamicRegex = new RegExp(typingInput, "i");
    
    // building an array of country codes using the regex to fetch the data
    //--> ["CL", "CN"] --> Fetch data
    const gettingCountriesByTheirCode = () => {
        let countryCodes = []
        for(let country of data?.countries) {
            if(dynamicRegex.test(country.name)) {
                countryCodes.push(country.code)
            }
        }
        console.log(countryCodes);
        !!countryCodes.length && getCountry({variables: {arrayCodes: countryCodes}})
        
    };

    const groupingByContinent = () => {

        if(!keyword) {
            setDisplayCountries({
                ...displayCountries,
                display: []
            })
            return
        }

        setDisplayCountries({
            ...displayCountries,
            groupBy: byContinent
        })
        gettingCountriesByTheirCode()
    };

    const groupingByLanguage = () => {

        if(!keyword) {
            setDisplayCountries({
                ...displayCountries,
                display: []
            })
            return
        }

        setDisplayCountries({
            ...displayCountries,
            groupBy: byLanguage
        })
        gettingCountriesByTheirCode()
    };

    useEffect(() => {
        if(countryData.data) {
            let data = [];
            let allTitles = [];
            let uniqueTitles;

            for(let country of countryData.data.countries)  {
                data.push(country)
                if(displayCountries.groupBy === byContinent) {
                    allTitles.push(country.continent.name)
                }
                else if (displayCountries.groupBy === byLanguage) {
                    for(let language of country.languages) {
                        allTitles.push(language.name)
                    }
                } 
            }

            uniqueTitles = [...new Set(allTitles)]
            setDisplayCountries({
                ...displayCountries,
                display: data,
                titles: uniqueTitles
            })
        }
    },[countryData, displayCountries.groupBy]);

    return (

        <>
            <MainContent>
                <SearchContainer>
                    <Paragraph>
                        If you type a single or a couple letters, it will search for all the countries name beginning with it.
                    </Paragraph>
                    <InputContainer>
                        <HiOutlineSearch style={{"width": "1.3rem", "height": "auto"}}/>
                        <Input type="text" onChange={handleChange} value={keyword} placeholder="Search for countries"/>
                    </InputContainer>
                    <GroupByContainer>
                        <SubTitle> Group by:</SubTitle>
                        <Button onClick={groupingByContinent}>Continent</Button>
                        <Button onClick={groupingByLanguage}>Language</Button>
                    </GroupByContainer>
                </SearchContainer>

                <CardsContainer>
                    {
                        !!displayCountries.display.length
                        ? displayCountries.titles.map((title, idx) =>
                            <CathegoryContainer>
                                <CathegoryTitle key={idx}>{title}</CathegoryTitle>
                                <CountriesCards>
                                    {displayCountries.display.map(country =>
                                        country.continent.name === title
                                        || country.languages.some(lang => lang.name === title)
                                        ?
                                            <CountryCard
                                            // key={country.name}
                                            capital={country.capital}
                                            emoji={country.emoji}
                                            name={country.name}
                                            nativeName={country.native}
                                            phoneCode={country.phone}
                                            currencies={country.currency}
                                            languages={country.languages}
                                            continentName={country.continent.name}
                                            />
                                        : null
                                    )}
                                </CountriesCards> 
                            </CathegoryContainer> 
                        )
                        : null
                    }
                </CardsContainer>

            </MainContent>
        </>
    )


};

export default SearchBar;