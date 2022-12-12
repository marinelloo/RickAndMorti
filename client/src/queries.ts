import { gql } from '@apollo/client'

const GET_ALL_CHARACTERS = gql`
  query Character($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        image
        status
        species
        location {
          name
        }
      }
  }
}`

const GET_CHARACTER_ID = gql`
  query CharacterPage($id: ID!) {
    character (id: $id) {
        name
        image
        species
    }
  }`

export { GET_ALL_CHARACTERS, GET_CHARACTER_ID }