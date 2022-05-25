import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const SortNav = () => {

    const [selectedValue, setSelectedValue] = useState('popular');

    const navigate = useNavigate();

    const handleOption = (e) => {
        setSelectedValue(e.target.value);
        navigate(`/sort/${e.target.value}`);
    }

  return (
    <select onChange={handleOption} value={selectedValue}>
        <option value="popular">Popular</option>
        <option value="now-playing">Now playing</option>
        <option value="upcoming">Upcoming</option>
        <option value="top-rated">Top rated</option>
    </select>
  )
}

export default SortNav