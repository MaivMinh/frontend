import React from 'react';
import { useLocation } from 'react-router-dom';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import { queryMovies } from '../apis/movie';
const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};


const SearchPage = () => {
    const query = useQuery();
    const searchTerm = query.get('query');
    const search = (query) => {
        navigate(`/search?query=${query}`);
      };

    const [movies, setMovies] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        queryMovies(searchTerm).then((data) => {
            setMovies(data?.results || []);
            setLoading(false);
        });
    }
    , [searchTerm]);    

    return (
        <div>
            <SearchBar input={searchTerm} search={search}/>
            
            <div style={containerStyles}>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>

            <Pagination currentPage={1} totalPages={2} />
        </div>
    );
};

const containerStyles = {
    display: 'flex',
    flexWrap: 'wrap', // Wrap items to the next row if needed
    gap: '16px', // Gap between items
    paddingLeft: '16px', // Left padding
    justifyContent: 'flex-start', // Center items horizontally
    maxWidth: '1200px', // Optional: Limit the maximum width of the container
    margin: '0 auto', // Center the container itself in the page
};


export default SearchPage;