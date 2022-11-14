import React from 'react';
// import {Chart} from 'chart.js'
import { Pie, Bar } from 'react-chartjs-2';
import {useState, useEffect} from "react";
import {Chart as Chartjs} from "chart.js/auto"

const PieCharts = (chartData) => {
   
  return (
    <div>
        <Pie
        height={200}
        width={200}
        options={{
          maintainAspectRatio: false
        }}
        data={{
          labels: [`Unresolved`, `Pending`,`Resolved`],
          datasets: [
            {
              label: "# of Tickets",
              data: [12, 15, 8,1],
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

export default PieCharts