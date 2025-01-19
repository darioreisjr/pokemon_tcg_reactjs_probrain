import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { LuListFilter } from "react-icons/lu";

import './styles.css'

interface SearchFiltersProps {
    onSearch: (query: string) => void;
    onSort: (value: string) => void;
    onTypeFilter: (type: string) => void;
}

export default function SearchFilters({ onSearch, onSort, onTypeFilter }: SearchFiltersProps) {
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);

    const types = [
        'All',
        'Colorless',
        'Darkness',
        'Dragon',
        'Fairy',
        'Fighting',
        'Fire',
        'Grass',
        'Lightning',
        'Metal',
        'Psychic',
        'Water',
    ];

    const sortOptions = [
        { value: 'name-asc', label: 'Nome (A-Z)' },
        { value: 'name-desc', label: 'Nome (Z-A)' },
        { value: 'number-asc', label: 'Number (Low to High)' },
        { value: 'number-desc', label: 'Number (High to Low)' },
    ];

    return (
        <div className='container'>
            <div className='container-box'>
                <div className='container-search' >
                    <div className="container-search-box">
                        <CiSearch className='icon-search' size={20} />
                        <input
                            type="text"
                            placeholder="Pesquise um pokemon"
                            className='search-input'
                            onChange={(e) => onSearch(e.target.value)}
                        />
                    </div>
                </div>


                <div className='container-filters'>

                    <button
                        onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                        className='filters-button'
                    >
                        <LuListFilter size={20} />
                        Filtrar por:
                    </button>

                    <div>

                        <select
                            className='container-filters-select'
                            onChange={(e) => onSort(e.target.value)}
                        >
                            {sortOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>

                        <select
                            className="container-filters-select"
                            onChange={(e) => onTypeFilter(e.target.value)}
                        >
                            {types.map((type) => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

            </div>
        </div>
    );
}