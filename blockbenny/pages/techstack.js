import { useEffect, useState } from "react";
import enUS from "../locales/en-US.json";
import dynamic from "next/dynamic";

export default function TechStack() {
  const Charts = dynamic(() => import("react-apexcharts"), { ssr: false });

  const [options, setOptions] = useState({
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        minWidth: 0,
        maxWidth: 300,
      },
    },
    xaxis: {
      labels: {
        formatter: function (value) {
          var label = "Undefined";
          switch (value) {
            case 1:
              label = "Basics";
              break;
            case 2:
              label = "Intermediate";
              break;
            case 3:
              label = "Advanced";
              break;
            case 4:
              label = "Pro";
              break;
            case 5:
              label = "God";
              break;
          }
          return label;
        },
      },
    },
    grid: {
      show: true,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    colors: ["#FFFFFF"],
    fill: {
      colors: ["#FF00B8"],
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      colors: ["#FFFFFF"],
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    responsive: [
      {
        breakpoint: 1000,
        options: {
          xaxis: {
            labels: {
              formatter: function (value) {
                var label = "Undefined";
                switch (value) {
                  case 1:
                    label = "20%";
                    break;
                  case 2:
                    label = "40%";
                    break;
                  case 3:
                    label = "60%";
                    break;
                  case 4:
                    label = "80%";
                    break;
                  case 5:
                    label = "100%";
                    break;
                }
                return label;
              },
            },
          },
        },
      },
    ],
  });

  const [series, setSeries] = useState([
    {
      data: enUS.techStack.languages.values,
    },
  ]);

  function ChangeChartSeries(values, elId) {
    setSeries([
      {
        data: values,
      },
    ]);

    document.getElementById("languageTitle").classList.remove("text-textPink", "font-playB");
    document.getElementById("frameworksTitle").classList.remove("text-textPink", "font-playB");
    document.getElementById("toolsTitle").classList.remove("text-textPink", "font-playB");
    document.getElementById("softSkillsTitle").classList.remove("text-textPink", "font-playB");

    document.getElementById(elId).classList.add("text-textPink", "font-playB");
  }

  return (
    <>
      <section id="techstack" className="z-20 px-8 lg:px-32 min-h-screen">
        <div className="text-center lg:flex lg:justify-between pt-24 lg:pt-44 4k:pt-64 fullHd:pt-48 fullHd:pl-64 fullHd:pr-64 pb-12">
          <button
            id="languageTitle"
            className="w-full text-2xl  p-4 rounded  text-textPink font-playB"
            onClick={() => {
              ChangeChartSeries(enUS.techStack.languages.values, "languageTitle");
            }}
          >
            {enUS.techStack.languages.title}
          </button>
          <button
            id="frameworksTitle"
            className="w-full text-2xl  p-4  rounded "
            onClick={() => {
              ChangeChartSeries(enUS.techStack.frameworks.values, "frameworksTitle");
            }}
          >
            {enUS.techStack.frameworks.title}
          </button>
          <button
            id="toolsTitle"
            className="w-full text-2xl p-4 rounded "
            onClick={() => {
              ChangeChartSeries(enUS.techStack.tools.values, "toolsTitle");
            }}
          >
            {enUS.techStack.tools.title}
          </button>
          <button
            id="softSkillsTitle"
            className="w-full text-2xl p-4 rounded"
            onClick={() => {
              ChangeChartSeries(enUS.techStack.softSkills.values, "softSkillsTitle");
            }}
          >
            {enUS.techStack.softSkills.title}
          </button>
        </div>
        <Charts id="chart" options={options} series={series} type="bar" height="40%" className="z-30 -mt-10 lg:-mt-5 lg:pr-32 lg:pl-24 fullHd:pr-80 fullHd:pl-64 relative lg:pt-10" />
      </section>
    </>
  );
}
