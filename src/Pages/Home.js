import React,{useState} from 'react'
import {useLazyQuery} from '@apollo/client'
import {GET_WEATHER_QUERY} from "../graphql/Queries"
function Home() {
    const [citySearched,setCitySearched]=useState("")
    const [getWeather,{loading,data,error}]=useLazyQuery(GET_WEATHER_QUERY,{
        variables:{name:citySearched},
    });

    if (error) return <h1>Error  ...</h1>
    if (data){
        console.log(data);
    }

    return ( 
        <div className = "home" >
        <h1>Search for Weather</h1>
        <input type = "text"
        placeholder = "City Name..." onChange={(event)=>{setCitySearched(event.target.value)}} / >
        <button onClick={()=> getWeather()} >Search</button>

        <div className="weather">
            {data && (
               <>
               <h1>City : {data.getCityByName.name}</h1>
                <h1>Temperature : {data.getCityByName.weather.temperature.actual}</h1>
                <h1>Description : {data.getCityByName.weather.summary.description}</h1>
                <h1>Wind Speed : {data.getCityByName.weather.wind.speed}</h1>
                </>
                )}
           
        </div>
        
        </div>
    );
}

export default Home