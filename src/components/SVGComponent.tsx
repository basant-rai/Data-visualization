import { arc } from 'd3'

function App() {

  const width = 900;
  const height = 500;
  const centerX = width / 2;
  const centerY = height / 2;
  const strokeWidth = 10;

  const eyeOffSetX = 100;
  const eyeOffSetY = 110;
  const eyeRadius = 40;

  const mouthWidth = 20;
  const mouthRadius = 140

  const mouthArc: any = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI * 3 / 2);

  arc()

  return (
    <div>

      <svg width={width} height={height}>
        <g transform={`translate(${centerX},${centerY})`}>
          <circle
            // cx={centerX}
            // cy={centerY}
            r={centerY - strokeWidth / 2}
            fill="pink"
            stroke="black"
            stroke-width={strokeWidth}
          >
          </circle>

          <circle
            cx={-eyeOffSetX}
            cy={-eyeOffSetY}
            r={eyeRadius}
            fill="black"
            stroke="black"
          />

          <circle
            cx={eyeOffSetX}
            cy={-eyeOffSetY}
            r={eyeRadius}
            fill="black"
            stroke="black"
          />
          <path d={mouthArc()} />
        </g>
      </svg>
    </div>
  );
}

export default App;
