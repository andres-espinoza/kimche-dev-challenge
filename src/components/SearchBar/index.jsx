import React, { useState, useEffect } from 'react';
import {useLazyQuery } from "@apollo/client";
import FIND_COUNTRY from '../../GraphQl/query';
import { ContinentCard } from '../index';

const SearchBar = ({data}) => {

    // Local state to save our input value
    const [keyword, setKeyword] = useState('')

    const handleChange = e => {
        setKeyword(e.target.value)
    }

    //Constants to use in the groupBy State
    const byContinent = 'continent'
    const byLanguage = 'language'

    //Local state to store the data of the countries to display on screen later
    const [displayCountries, setDisplayCountries] = useState({
        display: [],
        groupBy: null,
        continents: null,
        languages: null,
    })

    //Hooks to get and store the data by query, using the country code
    const [getCountry, countryData] = useLazyQuery(FIND_COUNTRY)

    //Regex for search countries starting with...
    let typingInput = "^" + keyword
    let dynamicRegex = new RegExp(typingInput, "i")
    

    // building an array of country codes using the regex to fetch the data
    // Only if the data doesnt exist in the local state
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
        
    }


    const GroupingByContinent = () => {

        setDisplayCountries({
            ...displayCountries,
            groupBy: byContinent
        })
        gettingCountriesByTheirCode()
    }

    const GroupingByLanguage = () => {

        setDisplayCountries({
            ...displayCountries,
            groupBy: byLanguage
        })
        gettingCountriesByTheirCode()
    }



    


    useEffect(() => {
        if(countryData.data && displayCountries.groupBy === byContinent) {
            let data = []
            let allContinents = []
            let uniqueContinents = []
            for(let country of countryData.data.countries)  {
                data.push(country)
                allContinents.push(country.continent.name)
            }

            uniqueContinents = [...new Set(allContinents)]
            setDisplayCountries({
                ...displayCountries,
                display: data,
                continents: uniqueContinents
            })
        }
    },[countryData])
    

    if(displayCountries.display) console.log(displayCountries.display, displayCountries.groupBy, displayCountries.continents);
    



    return (
        <main>
            <h1>
                Country Search
            </h1>
            <p>
                Some random text
            </p>


            <input type="text" onChange={handleChange} value={keyword} placeholder="Search for your Country"/>
            <h3> Group By: </h3>
            <button onClick={GroupingByContinent}>Continent</button>
            <button onClick={() => {}}>Language</button> 
            <div>
                {
                    !!displayCountries.display.length
                    ? displayCountries.continents.map(continent =>
                        <>
                            <h2 key={continent}>{continent}</h2>
                            {displayCountries.display.map(country => 
                                country.continent.name === continent ?
                                <ContinentCard
                                key={country.name} 
                                capital={country.capital}
                                emoji={country.emoji}
                                name={country.name}
                                nativeName={country.native}
                                phoneCode={country.phone}
                                currencies={country.currency}
                                
                                />
                                : null
                            )}    
                        </> 
                    )
                    : null
                }
            </div>

        </main>
    )


}

export default SearchBar;


//1. Create an array of country codes and then fetch the data
// But Im going to ask first if the data is alrready in the local state

//tengo un gran objeto, con data de muchos países
// 