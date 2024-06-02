import { useEffect, useState } from "react";
import "./styles.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=50&skip=${count * 20}`
      );
      const data = await response.json();
      if (data && data.products && data.products.length)
        setProducts((prevProducts) => [...prevProducts, ...data.products]);
      setLoading(false);
      console.log(products.length, data.total)
      if(products.length >= data.total)
        setDisableButton(true);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  function handleLoadMorePosts() {
    setCount((c) => c + 1);
  }

  return (
    <div className="product-page-container">
      <div className="product-container">
        {products &&
          products.length &&
          products.map((p, index) => {
            return (
              <div className="product" key={`product-${index}`}>
                <div className="product-thumb">
                  <img src={p.thumbnail} alt="" />
                </div>
                <strong>{p.title}</strong>
                <p>{p.brand}</p>
                <p>{`\$${p.price}`}</p>
              </div>
            );
          })}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={handleLoadMorePosts}>
          Load more products
        </button>
      </div>
    </div>
  );
}
