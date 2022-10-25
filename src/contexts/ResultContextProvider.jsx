import React, { useContext } from "react";
import { useState, useContext, createContext } from "react";

const ResultContext = createContext()
const baseUrl = 'https://google-search3.p.rapidapi.com/v1'

export const ResultContextProvider = ({ children }) => {

    const [results, SetResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('elon musk');

    const getResults = async(type) => {
        setIsLoading(false);
        
        const response = await fetch(`${baseUrl}${type}`,{
            method:'GET',
            headers:{
                'x-user-agent' : 'desktop',
                'x-rapidapi-host' : 'google-search3.p.rapidapi.com',
                'x-rapidapi-key'  : process.env.REACT_APP_API_KEY,              
            }
        })

        const data = await response.json();

        if(type.includes('/news')) {
           SetResults( data.entries);
        }else if(type('/images')) {
           SetResults( data.image_results);
        }else{
           SetResults(data.results);
        }

        SetResults(data);
        setIsLoading(false);
    }
return(
    <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
        {children}
    </ResultContext.Provider>
)
}

export const useResultContext = () => useContext(ResultContext);
