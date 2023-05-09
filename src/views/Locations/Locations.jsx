import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


export default function Locations() {
  const [resultsFetch, setResultsFetch] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function functionFetch() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/location/?page=${page}`
      );
      const data = await response.json();
      setResultsFetch(data.results);
    }
    functionFetch()
  },[page])

  function paginar(pagina) {
    setPage(page + pagina)
  }

  return (
    <>
      <div>
        <h2>Location:</h2>
        <div className="locations-container">
          {resultsFetch?.map((item) => {
            return (
              <div className="sin-estilo li-flex link-container" key={item.id}>
                <Link to={`/locations/${item.id}`}>
                  <h3> {item.name}</h3>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="container button">
          <button
            className="miboton"
            onClick={() => {
              if (page > 1) paginar(-1);
            }}
          >
            Previus
          </button>
          <h3 className="color">Página {page} de 7</h3>
          <button
            className="miboton"
            onClick={() => {
              if (page < 7) paginar(1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
