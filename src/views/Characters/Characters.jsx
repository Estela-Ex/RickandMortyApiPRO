import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Characters() {
  const [resultFetch, setResultFetch] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function functionFetch() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      const resultFetch = await response.json();
      setResultFetch(resultFetch.results);
    }
    functionFetch();
  }, [page]);

  function paginar(pagina) {
    setPage(page + pagina);
  }

  return (
      <>
    <div className="container">
        {resultFetch?.map((item) => {
          return (
            <div className="sin-estilo li-flex" key={item.id}>
              <Link to={`/characters/${item.id}`}>
                <img src={item.image} />
              </Link>
              <h3>{item.name}</h3>
              <h3>{item.status}</h3>
            </div>
          );
        })}
          </div>
        <div className="container ">
          <button
            className="miboton"
            onClick={() => {
              if (page > 1) paginar(-1);
            }}
          >
            Previus
          </button>
          <h3 className="color">Página {page} de 42</h3>
          <button
            className="miboton"
            onClick={() => {
              if (page < 42) paginar(1);
            }}
          >
            Next
          </button>
        </div>
      </>
  );
}


