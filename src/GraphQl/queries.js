import { gql } from "@apollo/client"

export const FIND_COUNTRY = gql`
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
export const COUNTRIES_NAME_CODE = gql`
query {
  countries {
    name
    code
  }
}
`
