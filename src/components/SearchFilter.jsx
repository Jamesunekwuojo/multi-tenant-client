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
            <input
                type="text"
                placeholder="Search tenants..."
                value={searchTerm}
                onChange={handleSearch}
                className="px-4 py-2 border rounded"
            />
            <select
                value={filter}
                onChange={handleFilter}
                className="px-4 py-2 border rounded"
            >
                <option value="">All</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
            </select>
        </div>
    );
};

export default SearchFilter;
