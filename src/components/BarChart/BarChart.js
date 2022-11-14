import React from 'react';
// import {Chart} from 'chart.js'
import { Pie, Bar } from 'react-chartjs-2';
import {useState, useEffect} from "react";
import {Chart as Chartjs} from "chart.js/auto"

const BarChart = (chartData) => {
   
  return (
    <div>
        <Bar
        height={200}
        width={50}
        options={{
          maintainAspectRatio: false,
          scales: {
            xAxes:[
                {
                    barThickness:12,
                    categorySpacing: 0
                }
            ]
          }
        }}
        data={{
          labels: [`Unresolved`, `Pending`,`Resolved`],
          datasets: [
            {
              label: "# of Tickets",
              data: [12, 15, 8, 3, 6],
              backgroundColor: [
                `red`,`teal`,`green`,`yellow`
              ]
            }
          ]
        }}
        />
    </div>
    
  )
}

export default BarChart