import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(currentId) {
    setSelected(selected === currentId ? null : currentId);
  }

  function handleMultipleSelection(selectedId) {
    setMultiple((multiple) => {
      return multiple.includes(selectedId)
        ? multiple.filter((x) => x !== selectedId)
        : [...multiple, selectedId];
    });
  }

  function toggleMultiSelection() {
    setEnableMultiSelection((state) => !state);
  }

  return (
    <div className="wrapper">
      <button
        className={`${enableMultiSelection ? "active" : ""}`}
        onClick={toggleMultiSelection}
      >
        Enable multi selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              onClick={() =>
                enableMultiSelection
                  ? handleMultipleSelection(dataItem.id)
                  : handleSingleSelection(dataItem.id)
              }
              className="item"
            >
              <div className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>

              {(!enableMultiSelection && selected === dataItem.id) ||
              (enableMultiSelection && multiple.includes(dataItem.id)) ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
