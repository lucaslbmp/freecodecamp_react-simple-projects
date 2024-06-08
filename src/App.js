import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordion';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
import QrCodeGenerator from './components/qr-code-generator';
import LightDarkMode from './components/light-dark-switcher';
import ScrollIndicator from './components/scroll-indicator';
import Tab from './components/tab';
import { useState } from 'react';
import GithubFinder from './components/github-finder';
import SearchAutocomplete from './components/search-autocomplete';
import TicTacToe from './components/tic-tac-toe';
import FeatureFlagsGlobalState from './components/feature-flag/context';
import FeatureFlags from './components/feature-flag';
import TestUseFetchHook from './components/use-fetch/test';
import TestUseOutsideClickHook from './components/use-outside-click/test';
import TestUseWindowResize from './components/use-window-resize/test';

function App() {
  const [currTab, setCurrTab] = useState(undefined);

  return (
    <div className="App">
      {/* accordian */}
      {/* <Accordian /> */}

      {/* random color */}
      {/* <RandomColor /> */}

      {/* star rating */}
      {/* <StarRating /> */}

      {/* image slider */}
      {/* <ImageSlider url={'picsum.photos/v2/list'} limit={'10'}/> */}

    {/* load more data */}
    {/* <LoadMoreData /> */}

    {/* tree-view */}
    {/* <TreeView menus={menus}/> */}

    {/* qr code generator */}
    {/* <QrCodeGenerator /> */}

    {/* light-dark-mode */}
    {/* <LightDarkMode /> */}

    {/* scroll indicator */}
    {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}

    {/* tab system */}
    {/* <Tab tabs={[
      {
        label: "Tab 1",
        content: 
        <div>
          <p>My tab 1 content</p>  
          <button onClick={() => setCurrTab(1)}>Change to tab 2</button> 
        </div>
        
      },
      {
        label: "Tab 2",
        content: <p>My tab 2 content</p>  
      },
      {
        label: "Tab 3",
        content: <div>
          <p>My tab 3 content</p>
          <button onClick={() => setCurrTab(0)}>Change to tab 1</button>    
        </div>
        
      }
    ]}
    onChange={index => setCurrTab(index)} 
    currentTab={currTab}
    /> */}

    {/* github finder */}
    {/* <GithubFinder /> */}

    {/* search autocomplete */}
    {/* <SearchAutocomplete /> */}

    {/* tic tac toe */}
    {/* <TicTacToe /> */}

    {/* feature flags */}
    {/* <FeatureFlagsGlobalState>
      <FeatureFlags />
    </FeatureFlagsGlobalState> */}

    {/* fetch data */}
    {/* <TestUseFetchHook /> */}

    {/* click outside hook */}
    {/* <TestUseOutsideClickHook /> */}

    {/* window resize */}
    <TestUseWindowResize />

    </div>
  );
}

export default App;
