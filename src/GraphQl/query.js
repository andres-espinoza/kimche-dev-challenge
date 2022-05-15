import { gql } from "@apollo/client"

const FIND_COUNTRY = gql`
query findCountryByCode ($arrayCodes: [String]) {
        countries(filter: {
            code: { in: $arrayCodes }
        }) {
                name
                native
                phone
                capital
                currency
                emoji
                emojiU
                languages {
                    name
                    native
                  }
                continent {
                    name
                  }
            }
        }
`

export default FIND_COUNTRY