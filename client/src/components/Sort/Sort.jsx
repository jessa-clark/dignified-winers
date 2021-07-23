import { sort } from "../../utils/sort";
import "./Sort.css";

const Sort = (props) => {
  const { wineList, setWineList } = props;
  const handleChange = (e) => {
    setWineList(sort(wineList, e.target.value));
  };

  return (
    <aside className="sort-dropdown">
      <select name="sort" id="sort" onChange={handleChange}>
        <option value="">Sort By</option>
        <option value="alphabetical">Alphabetical</option>
        <option value="year">Year</option>
        <option value="date-added">Date Added</option>
      </select>
    </aside>
  );
};

export default Sort;
