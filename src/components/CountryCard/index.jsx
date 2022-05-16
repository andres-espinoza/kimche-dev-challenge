import React from "react";


const CountryCard = ({capital, emoji, name, nativeName, phoneCode, currencies, languages, continentName}) => {
// console.log(languages);
    return (
        <div>
            <div>
                <span>{emoji}</span>
                <h4>{name === nativeName ? name : `${name} - ${nativeName} (Native)`}</h4>
            </div>
            <ul>
                <li>Capital: <span>{capital}</span></li>

                <li>Phone Code: <span>{'+'+phoneCode}</span></li>

                {currencies.includes(',') ?
                <li>
                    Currencies: {currencies.split(',').map(curr => 
                        <span key={curr}>{curr}</span>
                        )}
                </li>
                : <li>Currency: {currencies}</li>
                }

                <li>{continentName}</li>

            </ul>
        </div>
    )

}

export default CountryCard;