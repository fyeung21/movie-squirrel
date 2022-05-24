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
        <option value="popular">popular</option>
        <option value="now-playing">now playing</option>
        <option value="upcoming">upcoming</option>
        <option value="top-rated">top rated</option>
    </select>
  )
}

export default SortNav