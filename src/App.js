
import { useCallback, useEffect, useMemo, useState } from "react";
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((json) => setData(json.users));
  }, []);

  const handleInputChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, data]);

  return (
    <div className="App">
      <h1>User Names</h1>
      <input
        className="input"
        type="text"
        id="arama"
        value={searchTerm}
        placeholder="Search users with their first name"
        onChange={(e) => handleInputChange(e)}
      />
      {filteredData.map((item) => {
        return <div className="items"> {item.firstName} </div>;
      })}
    </div>
  );
}

export default App;



