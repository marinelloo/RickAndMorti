import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache, gql, ApolloProvider } from '@apollo/client'
import { App } from './App'


const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
     <App/>
)