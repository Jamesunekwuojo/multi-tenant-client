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
        <div className="search-filter">
            <input
                type="text"
                placeholder="Search tenants..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <select value={filter} onChange={handleFilter}>
                <option value="">All</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
            </select>
        </div>
    );
};

export default SearchFilter;