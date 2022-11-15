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
            responsive: true,
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
          labels: [`Unresolved`, `Pending`,`Resolved`, `Uncompleted`, `ticket volume`],
          datasets: [
            {
              label: "# of Tickets",
              data: [12, 15, 8, 3, 45],
              backgroundColor: [
                `#DFF6FF`,`#47B5FF`,`#256D85`, `#06283D`, `cyan`
              ]
            }
          ]
        }}
        />
    </div>
    
  )
}

export default BarChart