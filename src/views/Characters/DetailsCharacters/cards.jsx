export default function Cards({ resultFetch }) {
  return (
    <div className="card-container">
      <div className="card-container-border">
        <img className="card-image" src={resultFetch.image} />
        <div className="card-info">
          <h3 className="miBoton">Status:{resultFetch.status}</h3>
          <h3 className="miBoton">Specie:{resultFetch.species}</h3>
          <h3 className="miBoton">Gender: {resultFetch.gender}</h3>
        </div>
      </div>
    </div>
  );
}
