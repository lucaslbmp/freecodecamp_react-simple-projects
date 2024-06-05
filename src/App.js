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

function App() {
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
    <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/>

    </div>
  );
}

export default App;
