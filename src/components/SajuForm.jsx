import { useState } from 'react';

function SajuForm({ onSubmit }) {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [hour, setHour] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(parseInt(year), parseInt(month), parseInt(day), parseInt(hour));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="년도 (예: 1990)"
        required
      />
      <input
        type="number"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        placeholder="월 (1-12)"
        min="1"
        max="12"
        required
      />
      <input
        type="number"
        value={day}
        onChange={(e) => setDay(e.target.value)}
        placeholder="일 (1-31)"
        min="1"
        max="31"
        required
      />
      <input
        type="number"
        value={hour}
        onChange={(e) => setHour(e.target.value)}
        placeholder="시간 (0-23)"
        min="0"
        max="23"
        required
      />
      <button type="submit">사주 계산</button>
    </form>
  );
}

export default SajuForm;