// src/pages/TodaysSales.js
import React, { useState, useEffect } from 'react';
import SalesChart from '../components/SalesChart';
import SalesTable from '../components/SalesTable';

const TodaysSales = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Mock API call to fetch today's sales data
    const fetchData = async () => {
      const response = await fetch('/api/todays-sales');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Today's Sales</h1>
      {data ? (
        <>
          <SalesChart data={data} type="product" title="Sales by Product" />
          <SalesChart data={data} type="category" title="Sales by Category" />
          <SalesTable data={data} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TodaysSales;
