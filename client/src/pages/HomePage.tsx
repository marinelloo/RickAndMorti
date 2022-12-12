import React, { useState } from 'react'
import { useQuery } from '@apollo/client';
import { Col, Divider, Row, Space } from 'antd';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import CharacterCard from '../components/Card/CharacterCard';
import { GET_ALL_CHARACTERS } from '../queries';
import { Link } from 'react-router-dom';
import Loading from './Loading';
const style: React.CSSProperties = { padding: '8px 0' };


const HomePage: React.FC = () => {
  let [currentPage, setCurrentPage] = useState(1);
  const [characterId, setcharacterId] = useState('');

  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrentPage(page)
  }

  const { loading, error, data} = useQuery(GET_ALL_CHARACTERS, {
    variables: 
    {page: currentPage}
  })

  if (loading) return <><Loading/></>
  if (error) return <p>Error {error.message}</p>

  return (
    <Space direction="vertical" align="center">
        <h1>Rick and Morty API</h1>
        <Row  justify="center" align="stretch" >
          {data?.characters?.results.map((character: any) => 
          <Col className="gutter-row" xs={12} sm={10} md={8} lg={6} xl={5}>
              <div style={style}>
                <Link to={`/character/${character.id}`}>
                    <CharacterCard character={character} key={character.id}/>
                </Link>
                  
              </div>
          </Col>
          )}
        </Row>
        <Pagination current={currentPage} onChange={onChange} total={826} showSizeChanger={false} />
    </Space>
  )
}

export default HomePage