import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function DetailsEpisodes() {
  const [resultEpisodes, setResultEpisodes] = useState({});
  const [image, setImage] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function functionFetch() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/episode/${id}`
      );
      const data = await response.json();
      setResultEpisodes(data);
      const residentData = await Promise.all(
        data.characters.map(async (characterUrl) => {
          const res = await fetch(characterUrl);
          return await res.json();
        })
      );
      setImage(residentData);
    }
    functionFetch();
  }, [id]);
     return (
       <>
         <div>
           <div className="info-container">
             <h3 className="morty">Name: {resultEpisodes.name}</h3>
             <h3 className="morty">Air_date: {resultEpisodes.air_date}</h3>
             <h3 className="morty">Episode: {resultEpisodes.episode}</h3>
             <h3 className="morty">Created: {resultEpisodes.created} </h3>
           </div>
           <h3 className="morty">Character: </h3>
         </div>
         <div className="container">
           {image?.map((item) => {
             return (
               <Link to={`/characters/${item.id}`} key={item.id}>
                 <img src={item.image} />
               </Link>
             );
           })}
         </div>
       </>
     );
}
