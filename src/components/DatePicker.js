// src/components/DatePicker.js
import React from 'react';

const DatePicker = ({ label, selectedDate, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default DatePicker;
