import { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [city, setCity] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(city);
    }
    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input
                type="text"
                placeholder="Enter country name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
}