import { useRef } from "react";
import useFetch from "../use-fetch";

export default function ScrollToTopAndBottom() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );
  const bottomRef = useRef(null);

  function handleScrollToTop(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
  }

  function handleScrollToBottom(){
    bottomRef.current.scrollIntoView({behavior: "smooth"})
  }

  return (
    <div style={{ color: "#000" }}>
      <h1>Scroll to top/bottom</h1>
      <button onClick={handleScrollToBottom}>Scroll to bottom</button>
      {pending && <p>Loading ...</p>}
      {data?.products &&
        data?.products?.length &&
        !pending && (
          <ul>
            {data.products.map((p) => (
              <p key={p.id}>{p.title}</p>
            ))}
          </ul>
        )}
        <button onClick={handleScrollToTop}>Scroll to top</button>
        <div ref={bottomRef}>This is the bottom reference</div>
    </div>
  );
}
