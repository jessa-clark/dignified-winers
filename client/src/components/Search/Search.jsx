import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./Search.css";

const Search = (props) => {
  const { wines, setWineList } = props;
  const [input, setInput] = useState("");

  useEffect(() => {
    setWineList(wines);
  }, [setWineList, wines]);

  const handleChange = (e) => {
    setInput(e.target.value);
    setWineList(
      [...wines].filter((wine) =>
        wine.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="search-area">
      <input
        type="text"
        placeholder="Search wines..."
        value={input}
        onChange={handleChange}
      />
      <button>
        <AiOutlineSearch size="50px" />
      </button>
    </div>
  );
};

export default Search;
