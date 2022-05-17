import React from "react";
import { Card } from "../../styledComponents/Card";


const CountryCard = ({
    capital, 
    emoji, 
    name, 
    nativeName, 
    phoneCode, 
    currencies, 
    languages, 
    continentName}) => {

    const regexSeparateByComma = new RegExp('\\w+[,]?','g');

    return (
        <Card>
            <div>
                <span>{emoji}</span>
                <h4>{name === nativeName ? name : `${name} (${nativeName})`}</h4>
            </div>
            <ul>
                <li>Capital: <span>{capital}</span></li>

                <li>Phone Code: <span>{'+'+phoneCode}</span></li>

                {currencies && currencies.includes(',') ?
                <li>
                    Currencies: {currencies.match(regexSeparateByComma).map(curr => 
                        <span key={curr}>{curr}</span>
                        )}
                </li>
                : <li>Currency: {currencies ? currencies : 'No currency found'}</li>
                }

                <li>{continentName}</li>

            </ul>
        </Card>
    )

}

export default CountryCard;