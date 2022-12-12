import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React, { useState } from 'react'
import { BrowserRouter, Link} from "react-router-dom";
import RootRoute from './routes/RootRoute';
import { Layout, Button } from 'antd';
import { createGlobalStyle } from 'styled-components';
const {Header} = Layout


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

export const App = () => {

  return (
    <>
    <ApolloProvider client= {client}>
          <BrowserRouter>
            <GlobalStyle/>
            <Layout>
              <Header>
                <Link to={'/sign-up'}>
                  <Button>Sign Up</Button>
                </Link>
              </Header>
              <RootRoute/>
            </Layout>
          </BrowserRouter>
      </ApolloProvider>
    </>  
  )
}