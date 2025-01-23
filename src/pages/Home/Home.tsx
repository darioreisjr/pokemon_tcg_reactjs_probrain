import { useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';

import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleExploreCards = () => {
    navigate('/cards');
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">
          Bem-vindo ao Pokémon TCG Explorer
        </h1>
        <p className="home-description">
          Explore a incrível coleção de cards do Pokémon Trading Card Game.
          Descubra cards raros, monte seu deck e mergulhe no universo Pokémon!
        </p>
        <button
          className="button home-button"
          onClick={handleExploreCards}
        >
          <CiSearch size={24} />
          Explorar Cards
        </button>
      </div>
    </div>
  );
};

export default Home;
