import React, { useState } from "react";
//GraphQL
import { gql, useLazyQuery } from "@apollo/client";

const GET_CHARACTER_LOCATION = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

export default function Search() {
  const [name, setName] = useState("");
  const [getLocations, { loading, error, data, called }] = useLazyQuery(GET_CHARACTER_LOCATION, {
    variables: {
      name,
    },
  });

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getLocations()}>Search </button>
      {loading && <div>spinner...</div>}
      {error && <div>Error...</div>}
      {
        data && (
          <ul>
            {data.characters.results}
          </ul>
        )
      }
    </div>
  );
}
