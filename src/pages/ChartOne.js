import React, { useEffect, useState } from 'react';

import moment from 'moment';
import Chart from 'chart.js/auto';


export function ChartOne({getAllTrackData}) {
    const [chartValue, setChartValue] = useState({})
    const chartFuc = () => {
        var ctx = document.getElementById('priceChart').getContext('2d');

        var gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, 'rgba(141, 255, 38,0.149)');
        gradient.addColorStop(1, 'rgba(141, 255, 38,0)');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jun 2021', 'Aug 2021', 'Oct 2021', 'Oct 2021', 'Feb 2022'],
                datasets: [{
                    backgroundColor: gradient,
                    label: 'Numbers',
                    fill: true,
                    data: chartValue.chartVal,
                    fill: true,
                    borderColor: "#8DFF26",
                    lineTension: 0.5,
                    pointRadius: 2,
                    pointBackgroundColor: "#8DFF26",
                    pointHoverRadius: 10,
                    Cursore: "pointer",
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                    },
                    title: {
                        display: false,
                        text: 'Chart.js Line Chart',
                    },
                    tooltip: {
                        backgroundColor: "transparent",

                        callbacks: {
                            labelColor: function (context) {
                                return {
                                    borderColor: 'none',
                                    backgroundColor: 'none',
                                    borderWidth: 0,
                                    borderDash: [2, 2],
                                    borderRadius: 0,
                                    FontWeight: 500,
                                    display: "none",
                                };
                            },
                            labelTextColor: function (context) {
                                return '#8DFF26'

                            }
                        }
                    }

                },

                scales: {
                    x: {  // <-- axis is not array anymore, unlike before in v2.x: '[{'
                        beginAtZero: true,
                        ticks: {
                            precision: 0,
                            display: true,
                            fontSize: 16,
                            color: "#313F63",
                            FontWeight: 400,
                            FontFamily: "Space Grotesk",
                            beginAtZero: false,
                            min: 1000
                        },
                        grid: {
                            color: "#0B2300",
                            borderColor: "#1F6100",  // <-- this line is answer to initial question
                        }

                    },
                    y: {  // <-- axis is not array anymore, unlike before in v2.x: '[{'
                        beginAtZero: true,
                        ticks: {
                            precision: 0,
                            display: true,
                            fontSize: 16,
                            color: "#313F63",
                            FontWeight: 400,
                            FontFamily: "Space Grotesk",
                            beginAtZero: true,
                        },
                        grid: {
                            color: "#0B2300",
                            borderColor: '#1F6100'  // <-- this line is answer to initial question
                        },

                    },
                },
            }
        });
    }
    useEffect(() => {
      let arrayDate = []
      let arrayVal = []
      if(getAllTrackData) {
         getAllTrackData[0].price_history.map((e,i) => {
            arrayDate.push(moment(e.date).format('MMM DD, yyy'))
            arrayVal.push(e.priceTarget)
         }) 
         setChartValue({
             chartDate: arrayDate,
             chartVal: arrayVal,
         })
      }
    }, [getAllTrackData])

    useEffect(() => {
        chartFuc()
    }, [])
    // console.log('chartValue', chartValue)
    return <canvas id="priceChart"></canvas>
    // return <Line options={options} data={data} />;
}
export default ChartOne;