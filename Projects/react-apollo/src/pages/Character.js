import React from "react";
import { useParams } from "react-router";
//
import { useCharacter } from "../hooks/useCharacter";
//
import "./Character.css";

export default function Character() {
  const {id} = useParams()
  const { error, loading, data } = useCharacter(id);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error</div>;
  }
      
  return (
    <div className="Character">
      <img src={data.character.image} width={175} height={175} alt="" />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="Character-episode">
          {data.character.episode.map((episode, index) => {
            return (
              <div key={index}>
                {episode.name} - <b>episode.episode</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
