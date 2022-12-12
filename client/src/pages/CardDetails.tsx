import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { useParams } from 'react-router-dom';
import { GET_CHARACTER_ID } from '../queries';
import { gql, useQuery } from '@apollo/client';
import Loading from './Loading';
import styled from "styled-components"


const StyledCardPage = styled.div`
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
`

const { Meta } = Card;

interface CharacterItemPageParams {
  id: string;
}

const CardDetails: React.FC = () => { 
  const {characterId} = useParams();
  const [character, setCharacter] = useState({});

  const { loading, error, data} = useQuery(GET_CHARACTER_ID, {
    variables: 
    {id: characterId}
  })

  if (loading) return <><Loading/></>
  if (error) return <p>Error {error.message}</p>


  return (
    <StyledCardPage className='card-page'>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={data.character.image} />}> 
        <Meta title={data.character.name} description={data.character.species} />
      </Card>
    </StyledCardPage>
    
  )
};

export default CardDetails;