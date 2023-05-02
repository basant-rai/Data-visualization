
function App() {
  const width = 900;
  const height = 500;
  const centerX = width / 2;
  const centerY = height / 2;
  const strokeWidth = 10;

  const eyeOffSetX = 100;
  const eyeOffSetY = 110;
  const eyeRadius = 40




  return (
    <div>

      <svg width={width} height={height}>
        <circle
          cx={centerX}
          cy={centerY}
          r={height / 2 - strokeWidth / 2}
          fill="pink"
          stroke="black"
          stroke-width={strokeWidth}
        >
        </circle>

        <circle
          cx={centerX - eyeOffSetX}
          cy={centerY - eyeOffSetY}
          r={eyeRadius}
          fill="black"
          stroke="black"
        />

        <circle
          cx={centerX + eyeOffSetX}
          cy={centerY - eyeOffSetY}
          r={eyeRadius}
          fill="black"
          stroke="black"
        />
      </svg>
    </div>
  );
}

export default App;
