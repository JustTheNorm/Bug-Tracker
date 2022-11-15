import React from 'react';
// import {Chart} from 'chart.js'
import { Pie, Bar, Line } from 'react-chartjs-2';
import {useState, useEffect} from "react";
import {Chart as Chartjs} from "chart.js/auto"
import "./LineChart.module.css"

const LineChart = (chartData) => {
   
  return (
    <div className='linechart'>
        <Line
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
          labels: [`04/22`, `08/22`, `09/22`,`10/22`, `11/22`, ],
          datasets: [
            {
              label: "# of Tickets", 
              data: [1, 6, 15, 22, 55, 55],
              borderColor: `#06283D`,
              backgroundColor: [
                `#47B5FF`,`#256D85`, `#06283D`, `cyan`
              ]
            },
            {
                label: 'Resolved',
                data: [5,8,5, 17 ,36],
                borderColor: 'cyan',
                backgroundColor: 'cyan',
            },
            {
                label: 'Pending',
                data: [15,8,36, 14 ,3],
                borderColor: 'maroon',
                backgroundColor: 'maroon',
            },
            {
                label: 'Unresolved',
                data: [45,25,25, 29 ,8],
                borderColor: '#256D85',
                backgroundColor: '#256D85',
            }
          ]
        }}
        />
    </div>
    
  )
}

export default LineChart