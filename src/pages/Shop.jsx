import ProductCard from "../components/ProductCard";

const Shop = () => {
  const products = [
    {
      name: "SAVON CANNEBERGE & CITRON",
      url: "savon-canneberge-citron",
      source: "",
      price: 0,
      description: "",
      category: "soaps",
    },
    {
      name: "SAVON CAFÉ & ROMARIN",
      url: "savon-cafe-romarin",
      source: "",
      price: 0,
      description: "",
      category: "soaps",
    },
    {
      name: "SAVON CHANVRE & THÉ VERT",
      url: "savon-chanvre-the-vert",
      source: "",
      price: 0,
      description: "",
      category: "soaps",
    },
    {
      name: "SHAMPOING ORTIE & PRÊLE",
      url: "shampoing-ortie-prele",
      source: "",
      price: 0,
      description: "",
      category: "shampoos",
    },
    {
      name: "SHAMPOING CALENDULE",
      url: "shampoing-calendule",
      source: "",
      price: 0,
      description: "",
      category: "shampoos",
    },
    {
      name: "SHAMPOING CHAGA & ARGILE",
      url: "shampoing-chage-argile",
      source: "",
      price: 0,
      description: "",
      category: "shampoos",
    },
  ];
  return (
    <ul>
      {products.map((product, index) => (
        <li>
          <ProductCard key={index} product={product} />
        </li>
      ))}
    </ul>
  );
};

export default Shop;
