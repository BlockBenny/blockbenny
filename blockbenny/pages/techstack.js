import ApexCharts from 'apexcharts'
import {useEffect} from "react";
import enUS from '../locales/en-US.json';

export default function TechStack() {
    useEffect(() => {
    var options = {
        chart: {
          type: 'bar',
          height: '40%',
          width: '100%',
          toolbar: {
            show: false
          }
        },
        grid: {
            show: true,
            xaxis: {
                lines: {
                show: true
                }
                },  
            yaxis: {
                lines: { 
                show: false
                }
                },   
            },
            states: {
            hover: {
                filter: {
                    type: 'none',
                }
            },
        },
        colors:['#FFFFFF'],
        fill: {
            colors: ['#FF00B8']
        },
        dataLabels: {
          style: {
            colors: ['#FFFFFF']
          }
        },
        markers: {
            colors: ['#FFFFFF']
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        series: [{
          data: enUS.techStack.languages.values
        }]
      }
      
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    
    chart.render();
    });

    return (
        <>
        <section id="techstack" className=" px-32 min-h-screen  ">
            <div className="flex justify-between pt-64 pl-64 pr-64 pb-12">
                <div className="cursor-pointer text-2xl text-textPink">{ enUS.techStack.languages.title }</div>
                <div className="cursor-pointer text-2xl">{ enUS.techStack.frameworks.title }</div>
                <div className="cursor-pointer text-2xl">Tools</div>
                <div className="cursor-pointer text-2xl">Soft Skills</div>
            </div>
            <div id="chart" className="pl-64 pr-80 pt-10"/>
        </section>
      </>
    )
  }