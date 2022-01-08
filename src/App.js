import "./App.css"
import Home from "./Pages/Home"
import { ApolloClient,InMemoryCache,ApolloProvider,HttpLink } from '@apollo/client'

function App() {

    const client = new ApolloClient({
      cache:new InMemoryCache(),
      uri:"https://graphql-weather-api.herokuapp.com/"
    })
    return(
      {/*<div className = "App" >
       <div style={{display: 'flex',  justifyContent:'center', alignItems:'top', height: '100vh'}}>
    
            <Home justify="center" /> 


      </div>
      
        
        

        
        </div>*/},
      <ApolloProvider client={client}>
          <Home/>
      </ApolloProvider>
    ) 
}

export default App;