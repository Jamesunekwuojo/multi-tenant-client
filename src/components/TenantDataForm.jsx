import  { useState } from 'react';

const TenantDataForm = ({ onSubmit, initialData }) => {
    const [data, setData] = useState(initialData?.data || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ data });
    };

    return (
        <form onSubmit={handleSubmit} className="tenant-data-form">
            <textarea
                placeholder="Enter data"
                value={data}
                onChange={(e) => setData(e.target.value)}
                required
            />
            <button type="submit">{initialData ? 'Update' : 'Create'} Data</button>
        </form>
    );
};

export default TenantDataForm;