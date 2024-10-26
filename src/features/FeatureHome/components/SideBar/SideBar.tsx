import { useEffect, useState } from "react";
import st from "./SideBar.module.css";
import { tagsList } from "../../utils/constants";
import { Platform, SortBy, Tag } from "../../utils/types";
import { fetchFilterGamesThunk, setFilter } from "../../slice";
import { useDispatch } from "../../../../app/store/store";
import { useSearchParams } from "react-router-dom";

const SideBar: React.FC = () => {
  const dispatch = useDispatch();
  const [platform, setPlatform] = useState<Platform>("all");
  const [categories, setCategories] = useState<Record<Tag, boolean>>(
    tagsList.reduce(
      (acc, tag) => ({ ...acc, [tag]: false }),
      {} as Record<Tag, boolean>
    )
  );
  const [sortBy, setSortBy] = useState<SortBy>("relevance");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const platformParam = searchParams.get("platform") || "all";
    const tagsParam = searchParams.get("tags") || "";
    const sortByParam = searchParams.get("sortBy") || "relevance";

    setPlatform(platformParam as Platform);
    setSortBy(sortByParam as SortBy);

    const tags = tagsParam.split(".").reduce((acc, tag) => {
      if (tag) acc[tag as Tag] = true;
      return acc;
    }, {} as Record<Tag, boolean>);

    setCategories((prev) => ({ ...prev, ...tags }));
    dispatch(
      setFilter({
        platform: platformParam as Platform,
        tags: Object.keys(tags),
        sortBy: sortByParam as SortBy,
      })
    );
  }, [searchParams, dispatch]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCategories((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleFilterChange = () => {
    const selectedCategories = Object.keys(categories).filter(
      (key) => categories[key as Tag]
    );
    dispatch(setFilter({ platform, tags: selectedCategories, sortBy }));
    setSearchParams({ platform, tags: selectedCategories.join("."), sortBy });
    dispatch(
      fetchFilterGamesThunk({ platform, tags: selectedCategories, sortBy })
    );
  };

  return (
    <aside className={st.asideBar}>
      <h2 className={st.asideTitle}>Filter Games</h2>

      <div className={st.filterSection}>
        <label>Platform:</label>
        {["all", "pc", "browser"].map((plat) => (
          <div key={plat}>
            <label>
              <input
                type="radio"
                name="platform"
                value={plat}
                checked={platform === plat}
                onChange={() => setPlatform(plat as Platform)}
              />
              {plat.charAt(0).toUpperCase() + plat.slice(1)}
            </label>
          </div>
        ))}
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
                  checked={!!categories[tag]}
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
        {["relevance", "release-date", "alphabetical"].map((sort) => (
          <div key={sort}>
            <label>
              <input
                type="radio"
                name="sortBy"
                value={sort}
                checked={sortBy === sort}
                onChange={() => setSortBy(sort as SortBy)}
              />
              {sort.charAt(0).toUpperCase() + sort.slice(1).replace("-", " ")}
            </label>
          </div>
        ))}
      </div>

      <button className={st.applyButton} onClick={handleFilterChange}>
        Apply Filters
      </button>
    </aside>
  );
};

export default SideBar;
