import React from "react";
// Graphql
import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;
export default function CharactersList() {
  const { error, loading, data } = useQuery(GET_CHARACTERS);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error</div>;
  }
  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => {
        return (
          <div>
            <img src={character.image} alt="" />
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
}
