import { useState, useRef } from 'react'
import { Line } from '@ant-design/charts'

const Chart = () => {
  const [data, setData] = useState([
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 3 },
    { year: '1995', value: 4.9 },
  ])

  const ref = useRef<any>()

  return (
    <Line
      data={data}
      height={600}
      xField="year"
      yField="value"
      ref={ref}
      smooth
      tooltip={false}
    />
  )
}

export default Chart