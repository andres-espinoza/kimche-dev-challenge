import React from "react";
import { Card, HeaderCard, Emoji, EmojiAdust, CountryName, CountryDetails, CountryItems } from "../../styledComponents/Card";


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
    console.log(phoneCode);
    return (
        <Card>
            <HeaderCard>
                <Emoji>
                    <EmojiAdust>
                        {emoji}
                    </EmojiAdust>
                </Emoji>
                <CountryName>{name === nativeName ? name : `${name} - ${nativeName}`}</CountryName>
            </HeaderCard>
            <ul>
                <CountryItems>
                    <CountryDetails>
                        Capital: { capital ? <CountryDetails countryData={true}>{capital}</CountryDetails>
                        : 'No capital found'}
                    </CountryDetails>
                </CountryItems>


                {phoneCode && phoneCode.includes(',') ?
                <CountryItems>
                    Phone Codes: {phoneCode.match(regexSeparateByComma).map(phoneCod => 
                        <CountryDetails countryData={true} key={phoneCod}>{'+'+phoneCod}</CountryDetails>
                        )}
                </CountryItems>
                : <CountryItems>
                    Phone Code: {phoneCode ? <CountryDetails countryData={true}>{'+'+phoneCode}</CountryDetails> : 'No phone code found'}
                </CountryItems>
                }

                {currencies && currencies.includes(',') ?
                <CountryItems>
                    Currencies: {currencies.match(regexSeparateByComma).map(curr => 
                        <CountryDetails countryData={true} key={curr}>{curr}</CountryDetails>
                        )}
                </CountryItems>
                : <CountryItems>
                    Currency: {currencies ? <CountryDetails countryData={true}>{currencies}</CountryDetails> : 'No currency found'}
                </CountryItems>
                }

                {languages && languages.length > 1 ?
                <CountryItems>
                    Languages: {languages.map(({name}, idx, arr) =>
                        idx === arr.length-1 ?
                        <CountryDetails countryData={true} key={name}>{name}</CountryDetails>
                        : <CountryDetails countryData={true} key={name}>{name},</CountryDetails>
                        )}
                </CountryItems>
                : <CountryItems>
                    Language: {languages[0] ? <CountryDetails countryData={true}>{languages[0].name}</CountryDetails> : 'No language found'}
                </CountryItems>
                }

                <CountryItems>
                    <CountryDetails>
                        Continent: {<CountryDetails countryData={true}>{continentName}</CountryDetails>}
                    </CountryDetails>
                </CountryItems>

            </ul>
        </Card>
    )

}

export default CountryCard;