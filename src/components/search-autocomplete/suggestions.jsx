import { useEffect, useState } from "react";

export default function Sugestions({ list, onClick, showSuggestions }) {
//   const [showSuggestions, setShowSuggestions] = useState(true);
  const [selected, setSelected] = useState("");

  function handleSuggestionClick(item){
    // setSelected(last => { 
    //     if(last !== item){
    //         setShowSuggestions(true);
    //         return item;
    //     } 
    //     else {
    //         setShowSuggestions(false);
    //         return last
    //     }
    // }
    // )
    // setShowSuggestions(false);
    onClick(item);
  }

  return (
    list &&
    list.length < 10 &&
    showSuggestions && (
      <ul className="suggestions-container">
        {list.map((item, index) => (
          <li key={`suggestion-${index}`} onClick={() => handleSuggestionClick(item)}>{item}</li>
        ))}
      </ul>
    )
  );
}
