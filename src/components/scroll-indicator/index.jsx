import { useEffect, useRef, useState } from "react";
import "./styles.css";
import ScrollBar from "./ScrollBar";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(url) {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (err) {
      setErrorMessage(err);
      setLoading(false);
    }
  }

  function handleScroll(e) {
    // scrollTop -> number of pixels that an element's content is scrolled vertically
    // scrollHeight -> height of an element's content, including content not visible on the screen due to overflow
    // clientHeight ->  inner height of an element in pixels
    setScrollPercentage(e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight));
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return (
    <div style={{ position: "relative" }}>
      <ScrollBar percentage={scrollPercentage * 100} />
      <div
        className="scrollable-product-list"
        //ref={containerRef}
        onScroll={handleScroll}
      >
        {data?.products &&
          data.products.length &&
          !loading &&
          data.products.map((item) => <p>{item.title}</p>)}
      </div>
    </div>
  );
}
