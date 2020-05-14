// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Character = () => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsloading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get("http://localhost:3000/");
//       console.log(response.data.data.results[0].name);
//       setData(response.data.data);
//       setIsloading(false);
//     };

//     fetchData();
//   }, []);

//   return isLoading ? (
//     <span>Chargement...</span>
//   ) : (
//     data.results.map((character) => {
//       return (
//         <div className="">
//           <div className="">
//             <img
//               src={
//                 character.thumbnail.path + "." + character.thumbnail.extension
//               }
//               alt={character.name}
//             />
//             <div className="">
//               <h2 key={character.id}>{character.name}</h2>
//               <p>{character.description}</p>
//             </div>
//           </div>
//         </div>
//       );
//     })
//   );
// };

// export default Character;
