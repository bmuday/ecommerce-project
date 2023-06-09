const Filter = ({ products }) => {
  const categories = products.map((product) => product.category);
  const uniqueCategories = categories.filter(
    (value, index, self) => self.indexOf(value) === index
  );
  console.log("categories", categories);
  console.log("filteredCategories", uniqueCategories);
  return (
    <div id="filter">
      {/* Price */}
      <div>
        <label htmlFor="price">Price</label>
        <input id="price" type="range" min={0} max={100} />
      </div>
      {/* Category */}
      <div>
        <label htmlFor="categories">Category</label>
        <select id="categories">
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
