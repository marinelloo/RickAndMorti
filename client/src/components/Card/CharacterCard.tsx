import * as React from 'react';
import { Badge, Card } from 'antd';


interface Character {
  id: number;
  name: string;
  species: string;
  type: string;
  image: string;
  created: string;
  gender: string
  status: string
}

interface CharacterCardProps {
  character: Character
}

const { Meta } = Card;


const CharacterCard: React.FC<CharacterCardProps> = ({character}) => {
        if (character.status === 'Alive') {
          return <Badge.Ribbon text={character.status} color="green" placement='start'>
              <Card
              hoverable
              size='small'
              style={{width: 240}}
              cover = {<img alt="example" src={character.image}/>}
              >
              <Meta title={character.name} description={character.species}/>
              </Card>
          </Badge.Ribbon>
        } else if (character.status === 'Dead') {
          return <Badge.Ribbon text={character.status} color="red" placement='start'>
              <Card
              hoverable
              size='small'
              style={{width: 240}}
              cover = {<img alt="example" src={character.image}/>}
              >
              <Meta title={character.name} description={character.species}/>
              </Card>
          </Badge.Ribbon>
        }
        return <Badge.Ribbon text={character.status} color="grey" placement='start'>
              <Card
              hoverable
              size='small'
              style={{width: 240}}
              cover = {<img alt="example" src={character.image}/>}
              >
              <Meta title={character.name} description={character.species}/>
              </Card>
          </Badge.Ribbon>
}

export default CharacterCard