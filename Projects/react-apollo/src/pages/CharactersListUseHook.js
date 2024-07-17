import React from "react";
import { Link } from "react-router-dom";
//
import './CharacterList.css';
import {useCharacters} from '../hooks/useCharacters';


export default function CharactersList() {
  const { error, loading, data } = useCharacters();

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error</div>;
  }
  return (
    <div className="CharacterList">
      {data.characters.results.map((character, index) => {
        return (
          <Link key={index} to={`/${character.id}`}>
            <img src={character.image} alt="" />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}
