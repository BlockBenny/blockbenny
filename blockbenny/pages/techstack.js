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
        minWidth: 300,
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

    document
      .getElementById("languageTitle")
      .classList.remove("text-textPink", "font-playB");
    document
      .getElementById("frameworksTitle")
      .classList.remove("text-textPink", "font-playB");
    document
      .getElementById("toolsTitle")
      .classList.remove("text-textPink", "font-playB");
    document
      .getElementById("softSkillsTitle")
      .classList.remove("text-textPink", "font-playB");

    document.getElementById(elId).classList.add("text-textPink", "font-playB");
  }

  return (
    <>
      <section id="techstack" className="z-20 px-32 min-h-screen">
        <div className="flex justify-between pt-64 pl-64 pr-64 pb-12">
          <button
            id="languageTitle"
            className="text-2xl  p-4 rounded  text-textPink font-playB"
            onClick={() => {
              ChangeChartSeries(
                enUS.techStack.languages.values,
                "languageTitle"
              );
            }}
          >
            {enUS.techStack.languages.title}
          </button>
          <button
            id="frameworksTitle"
            className="text-2xl  p-4  rounded "
            onClick={() => {
              ChangeChartSeries(
                enUS.techStack.frameworks.values,
                "frameworksTitle"
              );
            }}
          >
            {enUS.techStack.frameworks.title}
          </button>
          <button
            id="toolsTitle"
            className="text-2xl p-4 rounded "
            onClick={() => {
              ChangeChartSeries(enUS.techStack.tools.values, "toolsTitle");
            }}
          >
            {enUS.techStack.tools.title}
          </button>
          <button
            id="softSkillsTitle"
            className="text-2xl p-4 rounded"
            onClick={() => {
              ChangeChartSeries(
                enUS.techStack.softSkills.values,
                "softSkillsTitle"
              );
            }}
          >
            {enUS.techStack.softSkills.title}
          </button>
        </div>
        <Charts
          id="chart"
          options={options}
          series={series}
          type="bar"
          height="40%"
          className="z-30 pr-64 pl-10 relative pt-10"
        />
      </section>
    </>
  );
}
