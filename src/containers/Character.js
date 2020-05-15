import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const Character = () => {
  const { id } = useParams();
  //   console.log(id);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3000/character/${id}`);

      setData(response.data);
      console.log(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  return isLoading ? (
    <div className="chargement">Chargement...</div>
  ) : (
    "Hello world"
    // data.results.map((character) => {
    //   return
    //   (
    //     <div className="">
    //       <div className="">
    //         <img
    //           src={
    //             character.thumbnail.path + "." + character.thumbnail.extension
    //           }
    //           alt={character.name}
    //         />
    //         <div className="">
    //           <h2 key={character.id}>{character.name}</h2>
    //           <p>{character.description}</p>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // })
  );
};

export default Character;
