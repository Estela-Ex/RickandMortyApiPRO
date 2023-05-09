import img from '../../../assets/render0001.png'

export default function DetailsHome() {
    return (
      <div className='home-container'>
        <h1>Bienvenidos a la api de Rick and Morty</h1>
        <img className="home-img"src={img} />;
      </div>
    );
}