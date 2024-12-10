import React from "react";

const SearchBar = ({input = "", search}) => {

    const handleClick = () => {
        const searchInput = document.getElementById("search-input");
        if (!searchInput.value) return;
        search(searchInput.value);
    }


    return (
        <div className=" py-2 text-center text-white">
            <div className="max-w-lg mx-auto flex">
                <input
                    id="search-input"
                    type="text"
                    defaultValue={input}
                    placeholder="Search for a movie, tv show, person..."
                    className="flex-grow px-4 py-2 rounded-l-md text-black border-black border-r-0 border-2"
                />
                <button onClick={handleClick} className="bg-cyan-400 text-white px-6 py-2 rounded-r-md hover:text-black transition-all">
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
