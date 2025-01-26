import React, { useState, useEffect } from 'react';
import Modal from '../../components/Modal/Modal';
import Card from '../../components/Card/Card';
import { IoFilter } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';
import { getCards, getRarities, getTypes } from '../../services/cardService';
import { MdOutlineCatchingPokemon } from 'react-icons/md';

import './Cards.css';

interface Pokemon {
  id: string;
  name: string;
  images: {
    small: string;
    large: string;
  };
  types?: string[];
  rarity?: string;
  attacks?: Array<{
    name: string;
    damage: string;
    cost: string[];
    text: string;
  }>;
}

const Cards = () => {
  const [cards, setCards] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCard, setSelectedCard] = useState<Pokemon | null>(null);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCards, setTotalCards] = useState(0);
  const [types, setTypes] = useState<string[]>([]);
  const [rarities, setRarities] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState('');
  const [selectedRarity, setSelectedRarity] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const [typesData, raritiesData] = await Promise.all([
          getTypes(),
          getRarities()
        ]);
        setTypes(typesData.data);
        setRarities(raritiesData.data);
      } catch (err) {
        console.error('Erro ao carregar filtros:', err);
      }
    };

    fetchFilters();
  }, []);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        let query = searchTerm ? `name:"*${searchTerm}*"` : '';

        if (selectedType) {
          query += query ? ` types:"${selectedType}"` : `types:"${selectedType}"`;
        }

        if (selectedRarity) {
          query += query ? ` rarity:"${selectedRarity}"` : `rarity:"${selectedRarity}"`;
        }

        const response = await getCards(page, 30, query);
        setCards(response.data);
        setTotalPages(Math.ceil(response.totalCount / 30));
        setTotalCards(response.totalCount);
      } catch (err) {
        setError('Erro ao carregar os cards. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, [page, searchTerm, selectedType, selectedRarity]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
  };

  const handleFilter = () => {
    setPage(1);
  };

  const clearFilters = () => {
    setSelectedType('');
    setSelectedRarity('');
    setPage(1);
  };

  return (
    <div className="card-container">
      <div className='card-header'>
        <div className="search-bar-container">
          <form onSubmit={handleSearch} className="search-bar">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Pesquisar um pokemon"
              className="search-input"
            />
            <button type="submit" className="search-button">
              <CiSearch size={20} />
            </button>
          </form>

          <div className="filter-toggle-container">
            <button
              className="filter-toggle"
              onClick={() => setShowFilters(!showFilters)}
            >
              <IoFilter size={20} />
              <p>Filtrar por:</p>
            </button>
          </div>

          <div className="filters-container">
            <div className="filters">
              <div className="filters-grid">
                <div>
                  <select
                    value={selectedType}
                    onChange={(e) => {
                      setSelectedType(e.target.value);
                      handleFilter();
                    }}
                  >
                    <option value="">Todos os tipos</option>
                    {types.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <select
                    value={selectedRarity}
                    onChange={(e) => {
                      setSelectedRarity(e.target.value);
                      handleFilter();
                    }}
                  >
                    <option value="">Todas as raridades</option>
                    {rarities.map((rarity) => (
                      <option key={rarity} value={rarity}>
                        {rarity}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button onClick={clearFilters} className="clear-filters">
                Limpar Filtros
              </button>
            </div>
          </div>
        </div>


        <div className="total-cards">
          <MdOutlineCatchingPokemon size={24} />
          <h2>Total: {totalCards} Pokémons</h2>
        </div>
      </div>

      {loading && <p>Carregando...</p>}
      {error && <p className="error-message">{error}</p>}

      <div className="card-grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onClick={() => setSelectedCard(card)}
          />
        ))}
      </div>

      <div className="pagination">
        <button
          className="button"
          onClick={() => {
            setPage(p => Math.max(1, p - 1));
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          disabled={page === 1}
        >
          Anterior
        </button>
        <span>Página {page} de {totalPages}</span>
        <button
          className="button"
          onClick={() => {
            setPage(p => Math.min(totalPages, p + 1));
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          disabled={page === totalPages}
        >
          Próxima
        </button>
      </div>


      <Modal isOpen={!!selectedCard} onClose={() => setSelectedCard(null)}>
        {selectedCard && (
          <div className="modal-container">
            <h2>{selectedCard.name}</h2>
            <img
              src={selectedCard.images.large}
              alt={selectedCard.name}
              className="modal-container-image"
            />
            {selectedCard.types && (
              <div className="types">
                <h3>Tipos:</h3>
                <div className="types-list">
                  {selectedCard.types.map(type => (
                    <span key={type} className="type-badge">{type}</span>
                  ))}
                </div>
              </div>
            )}
            {selectedCard.attacks && (
              <div className="attacks">
                <h3>Ataques:</h3>
                {selectedCard.attacks.map(attack => (
                  <div key={attack.name} className="attack">
                    <h4>{attack.name}</h4>
                    <p>Dano: {attack.damage}</p>
                    <p>{attack.text}</p>
                  </div>
                ))}
              </div>
            )}
            {selectedCard.rarity && (
              <p className="rarity"><strong>Raridade</strong> {selectedCard.rarity}</p>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Cards;
