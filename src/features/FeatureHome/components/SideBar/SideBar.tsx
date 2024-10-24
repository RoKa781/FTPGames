import { useState } from "react";
import st from "./SideBar.module.css";
import { tagsList } from "../../utils/constants";
import { SideBarProps, Tag } from "../../utils/types";

const SideBar: React.FC<SideBarProps> = ({ onFilterChange }) => {
  const [platform, setPlatform] = useState<string>("all");
  const [categories, setCategories] = useState<Record<Tag, boolean>>(
    tagsList.reduce(
      (acc, tag) => ({ ...acc, [tag]: false }),
      {} as Record<Tag, boolean>
    )
  );
  const [sortBy, setSortBy] = useState<string>("relevance");

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategories({
      ...categories,
      [e.target.name]: e.target.checked,
    });
  };

  const handleFilterChange = () => {
    const selectedCategories = Object.keys(categories)
      .filter((key) => categories[key as Tag])
      .map((key) => key as Tag);

    onFilterChange({ platform, categories: selectedCategories, sortBy });
  };

  return (
    <aside className={st.asideBar}>
      <h2 className={st.asideTitle}>Filter Games</h2>

      <div className={st.filterSection}>
        <label>Platform:</label>
        <div>
          <label>
            <input
              type="radio"
              name="platform"
              value="all"
              checked={platform === "all"}
              onChange={(e) => setPlatform(e.target.value)}
            />{" "}
            All
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="platform"
              value="pc"
              checked={platform === "pc"}
              onChange={(e) => setPlatform(e.target.value)}
            />{" "}
            PC
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="platform"
              value="browser"
              checked={platform === "browser"}
              onChange={(e) => setPlatform(e.target.value)}
            />{" "}
            Browser
          </label>
        </div>
      </div>

      <div className={st.filterSection}>
        <label>Category or Tags:</label>
        <div className={st.tagsContainer}>
          {tagsList.map((tag) => (
            <div key={tag} className={st.tagItem}>
              <label>
                <input
                  type="checkbox"
                  name={tag}
                  checked={categories[tag]}
                  onChange={handleCategoryChange}
                />
                <span className={st.tag}>{tag.replace(/-/g, " ")}</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className={st.filterSection}>
        <label>Sort By:</label>
        <div>
          <label>
            <input
              type="radio"
              name="sortBy"
              value="relevance"
              checked={sortBy === "relevance"}
              onChange={(e) => setSortBy(e.target.value)}
            />{" "}
            Relevance
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="sortBy"
              value="release-date"
              checked={sortBy === "release-date"}
              onChange={(e) => setSortBy(e.target.value)}
            />{" "}
            Release Date
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="sortBy"
              value="alphabetical"
              checked={sortBy === "alphabetical"}
              onChange={(e) => setSortBy(e.target.value)}
            />{" "}
            Alphabetical
          </label>
        </div>
      </div>

      <button className={st.applyButton} onClick={handleFilterChange}>
        Apply Filters
      </button>
    </aside>
  );
};

export default SideBar;

