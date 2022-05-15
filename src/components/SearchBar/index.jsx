import React, { useState, useEffect } from 'react';
import {useLazyQuery } from "@apollo/client";
import FIND_COUNTRY from '../../GraphQl/query';

const SearchBar = ({data}) => {

    const [keyword, setKeyword] = useState('')
    const [displayCountries, setDisplayCountries] = useState(null)
    
    const [getCountry, countryData] = useLazyQuery(FIND_COUNTRY)
    let typingInput = "^" + keyword;
    let dynamicRegex = new RegExp(typingInput, "i")
    
    const groupByContinent = () => {
        let countryCodes = []
        for(let country of data?.countries) {
            if(dynamicRegex.test(country.name)) {
                countryCodes.push(country.code)
            }
        }
        getCountry({variables: {arrayCodes: countryCodes}})
    }

    const handleChange = e => {
        setKeyword(e.target.value)
    }

    useEffect(() => {
        if(countryData.data) {
            setDisplayCountries({
                ...countryData.data
            })
        }
    },[countryData])
    

    if(displayCountries) console.log(displayCountries);
    



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
            <button onClick={groupByContinent}>Continent</button>
            <button>Language</button> 


        </main>
    )


}

export default SearchBar;