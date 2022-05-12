import React, { useState, useEffect } from 'react';
import {Button} from '../index';

const SearchBar = () => {

    const [groupBy, setGroupBy] = useState('continent')
    const [keyword, setKeyword] = useState('')

    useEffect(() => {

        const URL = 'https://countries.trevorblades.com/';

        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({query: `
            query {
                    continents {
                    name
                    countries {
                        name
                    }
                    }
                }`
            })
        })
        .then(res => res.json())
        .then(data => console.log(data.data))

    },[])


    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = e => {
        setKeyword(e.target.value)
    }

    return (
        <main>
            <h1>
                Country Search
            </h1>
            <p>
                Some random text
            </p>

            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={keyword} placeholder="Search for your Country"/>
                <label> Group By: </label>
                <input type="submit" value="Continent"/>
                <input type="submit" value="Language"/>
            </form>

        </main>
    )


}

export default SearchBar;