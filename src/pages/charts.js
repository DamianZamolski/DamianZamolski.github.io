import React, { useEffect, useRef } from 'react'
import { Chart } from 'chart.js'
import Page from '../components/page/page'

export default () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    new Chart(canvasRef.current.getContext('2d'), {
      maintainAspectRatio: false,
      responsive: true,
      type: 'line',
      data: {
        //Bring in data
        labels: ['Jan', 'Feb', 'March'],
        datasets: [
          {
            label: 'Sales',
            data: [86, 67, 91],
          },
        ],
      },
      options: {
        //Customize chart options
      },
    })
  }, [canvasRef.current])

  return (
    <Page title='Charts'>
      <div>
        <canvas ref={canvasRef} />
      </div>
    </Page>
  )
}
