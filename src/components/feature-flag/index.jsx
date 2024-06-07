import { useContext, useEffect, useState } from "react";
import LightDarkMode from "../light-dark-switcher";
import TicTacToe from "../tic-tac-toe";
import RandomColor from "../random-color";
import Accordian from "../accordion";
import TreeView from "../tree-view";
import Tab from "../tab";
import { FeatureFlagsContext } from "./context";
import menus from "../tree-view/data";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    { key: "showLightAndDarkMode", component: <LightDarkMode /> },
    { key: "showTicTacToeBoard", component: <TicTacToe /> },
    { key: "showRandomColorGenerator", component: <RandomColor /> },
    { key: "showAccordian", component: <Accordian /> },
    { key: "showTreeView", component: <TreeView menus={menus}/> },
    { key: "showTabs", component: <Tab tabs={[]} currentTab={0}/> },
  ];

  return (
    <div style={{color: '#000'}}>
      <h1>Feature flags</h1>
      {loading && <div>Loading ...</div>}
      {enabledFlags && !loading && (
        <div className="features-container">
          {componentsToRender?.map(
            ({key, component}) => {
                console.log([key])
                return enabledFlags[key] && component
            }
          )}
        </div>
      )}
    </div>
  );
}
