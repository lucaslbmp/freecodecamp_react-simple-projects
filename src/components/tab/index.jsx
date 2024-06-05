import { useEffect, useState } from "react";
import P from "prop-types";
import "./styles.css";

export default function Tab({ tabs, onChange, currentTab }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleClickTab(index) {
    setCurrentTabIndex(index);
    onChange(index)
  }

  useEffect(() => {
    if(currentTab !== undefined) setCurrentTabIndex(currentTab)
  }, [currentTab])

  return (
    <div className="tab-container">
      <div className="tab-headers">
        {tabs.map((tab, index) => (
          <span
            className={
              "tab-header " + (index === currentTabIndex ? "tab-active" : "")
            }
            key={tab.label}
            onClick={() => handleClickTab(index)}
          >
            {tab.label}
          </span>
        ))}
      </div>
      <div className="tab-content">{tabs[currentTabIndex].content}</div>
    </div>
  );
}

Tab.defaultProps = {
    onChange: index => {},
    currTab: 0
}

Tab.propTypes = {
  tabs: P.shape({
    label: P.string.isRequired,
    content: P.node.isRequired,
  }),
  onChange: P.func,
  currTab: P.number
};
