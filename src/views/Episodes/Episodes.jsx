import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Episodes() {
  const [resultsFetch, setResultFetch] = useState(null);
  const [page, setPage] = useState(1);

  async function functionFetch() {
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode?page=${page}`
    );
    const data = await response.json();
    setResultFetch(data.results);
  }
  useEffect(() => {
    functionFetch();
    //eslint-disable-next-line
  }, [page]);

  function paginar(pagina) {
    setPage(page + pagina);
  }
  return (
    <>
      <div className="locations-container card">
        {resultsFetch?.map((item) => {
          return (
            <div className="sin-estilo li-flex link-container " key={item.id}>
              <Link to={`/episodes/${item.id}`}>
                <h3 className="morty">Episode: {item.name}</h3>
                <h3 className="morty">Created: {item.created}</h3>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="container-button">
        <button
          className="miboton"
          onClick={() => {
            if (page > 1) paginar(-1);
          }}
        >
          Previus
        </button>
        <h3 className="color">Página {page} de 3</h3>
        <button
          className="miboton"
          onClick={() => {
            if (page < 3) paginar(1);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}
