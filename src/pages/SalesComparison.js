// src/pages/SalesComparison.js
import React, { useState, useEffect } from 'react';
import SalesChart from '../components/SalesChart';
import SalesTable from '../components/SalesTable';
import DatePicker from '../components/DatePicker';

const SalesComparison = () => {
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    if (date1 && date2) {
      // Mock API call to fetch sales comparison data between two dates
      const fetchData = async () => {
        const response = await fetch(`/api/comparison-sales?date1=${date1}&date2=${date2}`);
        const result = await response.json();
        setData(result);
      };

      fetchData();
    }
  }, [date1, date2]);

  return (
    <div>
      <h1>Sales Comparison</h1>
      <DatePicker label="Select Date 1" selectedDate={date1} onChange={setDate1} />
      <DatePicker label="Select Date 2" selectedDate={date2} onChange={setDate2} />
      {data ? (
        <>
          <SalesChart data={data} type="product" title="Product Sales Comparison" />
          <SalesChart data={data} type="category" title="Category Sales Comparison" />
          <SalesTable data={data} comparison />
        </>
      ) : (
        <p>Select dates to view comparison.</p>
      )}
    </div>
  );
};

export default SalesComparison;
