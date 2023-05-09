import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import Cards from './cards'

export default function DetailsCharacters() {
  const [resultFetch, setResultsFetch] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function functionFetch() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
        );
        const data = await response.json();
      setResultsFetch(data)
      }
    functionFetch()
  }, [id]);
    return (
      <Cards resultFetch={resultFetch}/>
  )
}


