import React from "react";
//
import { useCharacter } from "../hooks/useCharacter";
//
import "./Character.css";

export default function Character({ id }) {
  const { error, loading, data } = useCharacter(5);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <div className="Character">
      <img src={data.character.image} width={750} height={750} alt="" />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="Character-episode">
          {data.character.episod.map((episode, index) => {
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
