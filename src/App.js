import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordion';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';

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
    <TreeView menus={menus}/>

    </div>
  );
}

export default App;
