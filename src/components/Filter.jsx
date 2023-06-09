const Filter = ({
  minRange,
  maxRange,
  changeMinRange,
  changeMaxRange,
  category,
  changeCategory,
  uniqueCategories,
}) => {
  return (
    <div id="filter">
      {/* Price */}
      <div>
        <label htmlFor="price">Price</label>
        <div id="priceFilter">
          <div id="inputsFilter">
            <input
              id="price"
              type="range"
              min={0}
              max={50}
              value={minRange}
              onChange={(e) => changeMinRange(parseInt(e.target.value))}
            />
            <input
              id="price"
              type="range"
              min={50}
              max={100}
              value={maxRange}
              onChange={(e) => changeMaxRange(parseInt(e.target.value))}
            />
          </div>
          <div id="rangesFilter">
            <span>{minRange}</span>
            <span>{maxRange}</span>
          </div>
        </div>
      </div>
      {/* Category */}
      <div id="categoriesFilter">
        <label htmlFor="categories">Category</label>
        <select
          id="categories"
          onChange={(e) => {
            changeCategory(e.target.value);
          }}
          value={category}
        >
          {uniqueCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
