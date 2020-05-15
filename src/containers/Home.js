import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://marvel-pht-app.herokuapp.com/");
      console.log(response.data.data);
      setData(response.data.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return isLoading ? (
    <div className="chargement">Chargement...</div>
  ) : (
    data.results.map((character, index) => {
      return (
        <Link className="link" key={index} to={`/character/${character.id}`}>
          <div className="charac-container">
            <div className="charac-card">
              <img
                src={
                  character.thumbnail.path + "." + character.thumbnail.extension
                }
                alt={character.name}
              />
              <div className="charac-text">
                <h2 key={character.id}>{character.name}</h2>
                <p>{character.description}</p>
              </div>
            </div>
          </div>
        </Link>
      );
    })
  );
};

// composant search à faire
// utiliser la route pour les détails des characters
// utiliser le

export default Home;
