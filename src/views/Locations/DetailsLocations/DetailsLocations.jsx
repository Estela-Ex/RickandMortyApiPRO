import { useState,useEffect } from "react";
import {Link, useParams} from 'react-router-dom'
export default function DetailsLocations() {
  const [resultLocation, setResultLocation] = useState({});
  const [image, setImage] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function functionFetch() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/location/${id}`
      );
      const data = await response.json();
      setResultLocation(data);
      const residentData = await Promise.all(
        data.residents.map(async (characterUrl) => {
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
      <div className="info-container">
        <h3 className="morty">Type: {resultLocation.type}</h3>
        <h3 className="morty">Dimension: {resultLocation.dimension}</h3>
        <h3 className="morty">Created: {resultLocation.created}</h3>
      </div>
      <h3 className="morty">Characters: </h3>
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