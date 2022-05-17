import React from "react";
import { SearchBar, HeaderSite } from "./components";
import { useQuery } from "@apollo/client";
import { COUNTRIES_NAME_CODE } from "./GraphQl/queries";


const App = () => {

  const {data, loading} = useQuery(COUNTRIES_NAME_CODE)


    return (
      <div>
        <HeaderSite />
        {loading 
          ? <p>cargando</p> 
          : <SearchBar data={data}/>
        }
      </div>
    )
};

export default App;
