import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import moment from 'moment';

// [33, 53, 85, 41, 44, 65, 80],

export function ChartTwo({getAllTrackData}) {
    const [chartValue, setChartValue] = useState({})
    const chartFuc = () => {
        var ctx = document.getElementById('price_Chart1').getContext('2d');

        var gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, 'rgba(255, 38, 38, 0.1)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jun 2021', 'Jun 2021', 'Jun 2021', 'Oct 2021', 'Feb 2022'],
                datasets: [{
                    backgroundColor: gradient,
                    label: 'Numbers',
                    fill: true,
                    data: chartValue.chartVal,
                    // data: [33, 53, 85, 41, 44, 65, 80],
                    fill: true,
                    borderColor: "#FF0000",
                    lineTension: 0.5,
                    pointRadius: 2,
                    pointBackgroundColor: "#FF0000",
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
                                    FontSize: 50
                                };
                            },
                            labelTextColor: function (context) {
                                return '#FE3D3D'


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
                            color: "#330000",
                            borderColor: "#610000",  // <-- this line is answer to initial question
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
                            color: "#330000",
                            borderColor: '#610000'  // <-- this line is answer to initial question
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
           getAllTrackData[0].supply_history.map((e,i) => {
              arrayDate.push(moment(e.date).format('MMM DD, yyy'))
              arrayVal.push(e.TotalSupply / 1e9)
           }) 
           setChartValue({
               chartDate: arrayDate,
               chartVal: arrayVal,
           })
        }
      }, [getAllTrackData])

    useEffect(() => {
      if(chartValue) {
        setTimeout(() =>  chartFuc(), 1000)
      } 
    }, [chartValue])
    return <canvas id="price_Chart1"></canvas>
    // return <Line options={options} data={data} />;
}
export default ChartTwo;