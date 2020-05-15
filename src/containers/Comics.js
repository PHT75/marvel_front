import React, { useState, useEffect } from "react";
import axios from "axios";

const Comics = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://marvel-pht-app.herokuapp.com/comics"
      );
      console.log(response.data.data.results[0].title);
      setData(response.data.data);
      setIsloading(false);
    };

    fetchData();
  }, []);

  return isLoading ? (
    <div className="chargement">Chargement...</div>
  ) : (
    data.results.map((comic) => {
      return (
        <div className="comics-container">
          <div className="comics-card">
            <img
              src={comic.thumbnail.path + "." + comic.thumbnail.extension}
              alt={comic.name}
            />
            <div className="charac-text">
              {" "}
              <h2 key={comic.id}>{comic.title}</h2>
              <p>{comic.description}</p>
            </div>
          </div>
        </div>
      );
    })
  );
};

export default Comics;
