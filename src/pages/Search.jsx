import React from 'react';
import { useLocation } from 'react-router-dom';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const movies = [
    {
        id: 1,
        title: 'The Shawshank Redemption',
        year: 1994,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pG49LvH6pcfw6oyhYX5iFEtaHS7.jpg',
    },
    {
        id: 2,
        title: 'The Godfather',
        year: 1972,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pG49LvH6pcfw6oyhYX5iFEtaHS7.jpg',
    },
    {
        id: 3,
        title: 'The Dark Knight',
        year: 2008,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pG49LvH6pcfw6oyhYX5iFEtaHS7.jpg',
    },
    {
        id: 4,
        title: 'The Dark Knight',
        year: 2008,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pG49LvH6pcfw6oyhYX5iFEtaHS7.jpg',
    },
    {
        id: 5,
        title: 'The Dark Knight',
        year: 2008,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pG49LvH6pcfw6oyhYX5iFEtaHS7.jpg',
    },
    {
        id: 5,
        title: 'The Dark Knight',
        year: 2008,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pG49LvH6pcfw6oyhYX5iFEtaHS7.jpg',
    },
];

const Search = () => {
    const query = useQuery();
    const searchTerm = query.get('query');
    const search = (query) => {
        navigate(`/search?query=${query}`);
      };
    return (
        <div>
            <SearchBar input={searchTerm} search={search}/>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 pl-4">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>

            <Pagination currentPage={1} totalPages={2} />
        </div>
    );
};

export default Search;