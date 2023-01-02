import ApexCharts from "apexcharts";
import { useEffect } from "react";
import enUS from "../locales/en-US.json";

export default function TechStack() {
  useEffect(() => {
    var options = {
      chart: {
        id: "techstackChart",
        type: "bar",
        height: "40%",
        width: "100%",
        toolbar: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          minWidth: 200,
          maxWidth: 200,
        },
      },
      xaxis: {
        labels: {
          formatter: function (value) {
            console.log(value);
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
      series: [
        {
          data: enUS.techStack.languages.values,
        },
      ],
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);

    chart.render();
  });

  function ChangeChartSeries(values, elId) {
    console.log("Change Chart Series");
    ApexCharts.exec("techstackChart", "updateSeries", [
      {
        data: values,
      },
    ]);
    console.log("Change Pink");

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
      <section id="techstack" className="z-10 px-32 min-h-screen">
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
        <div id="chart" className="z-50 relative pl-64 pr-80 pt-10" />
      </section>
    </>
  );
}
