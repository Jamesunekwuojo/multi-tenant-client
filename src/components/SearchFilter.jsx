import React, { useState } from 'react';

const SearchFilter = ({ onSearch, onFilter }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    const handleFilter = (e) => {
        setFilter(e.target.value);
        onFilter(e.target.value);
    };

    return (
        <div className="w-full flex justify-center items-center gap-2 py-4">
            <form >
            <input
                type="text"
                placeholder="Search tenants..."
                value={searchTerm}
                onChange={handleSearch}
                className="px-4 py-2 border rounded"
            />
            
            <button className='p-4'>Seacrh</button>

            </form>
           
        
        </div>
    );
};

export default SearchFilter;
