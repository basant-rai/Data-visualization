import { csv } from 'd3'
import React, { useEffect, useState } from 'react'

const url = 'https://gist.githubusercontent.com/basant-rai/5ec9a12277f6659955cecef8945f8171/raw/color.csv'

const ColorVisualization = () => {
  const [data, setData] = useState<any>(null)


  useEffect(() => {
    csv(url).then(setData);
  }, [])

  console.log(data)

  return (
    <div></div>
  )
}

export default ColorVisualization