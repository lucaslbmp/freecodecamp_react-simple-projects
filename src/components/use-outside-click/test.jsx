import { useRef, useState } from "react";
import useOutsideClick from ".";

export default function TestUseOutsideClickHook() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
 useOutsideClick(ref, () => setShowContent(false))

  return (
    <div style={{color: '#000', width: '50%', margin: 'auto'}}>
      {showContent ? (
        <div ref={ref}>
            <h1>This is a content</h1>
            <p>Please click outside of this to close it. It wont close if you click inside the content.</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show content</button>
      )}
    </div>
  );
}
