const URL = 'https://countries.trevorblades.com/';

fetch(URL, {
    method: 'POST',
    headers: {
        'Content-type': 'aplication-json'
    },
    body: JSON.stringify({
        query: `query {
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
.then(data => console.log(data))