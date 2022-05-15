import React from "react";
import "./App.css";
import { SearchBar } from "./components";
import { useQuery, gql } from "@apollo/client";




const App = () => {

  const countries = gql`
    query {
      countries {
        name
        code
      }
    }
  `
  const {data, loading} = useQuery(countries)


    return (
      <div>

        {loading 
          ? <p>cargando</p> 
          : <SearchBar data={data}/>
        }
      </div>
    )

  

}


export default App;
