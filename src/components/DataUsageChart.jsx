import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';


const DataUsageChart = ({ data }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.map((item) => item.tenantId),
                    datasets: [{
                        label: 'Data Usage',
                        data: data.map((item) => item.size),
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                    }],
                },
            });
        }
    }, [data]);

    return <canvas ref={chartRef} />;
};

export default DataUsageChart;