import './styles.css'

export default function ScrollToSection() {
  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "grey",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "orange",
      },
    },
  ];

  return (
    <div>
      <h1 style={{color: 'black'}}>Scroll to a particular section</h1>
      {/* <button>Click to scroll</button> */}
      <div className='buttons'>
        <a href="#section-1">Section 1</a>
        <a href="#section-2">Section 2</a>
        <a href="#section-3">Section 3</a>
        <a href="#section-4">Section 4</a>
        <a href="#section-5">Section 5</a>
      </div>
      {data.map((section, index) => (
        <div style={section.style} id={`section-${index+1}`}>
          <h1>{section.label}</h1>
        </div>
      ))}
    </div>
  );
}
