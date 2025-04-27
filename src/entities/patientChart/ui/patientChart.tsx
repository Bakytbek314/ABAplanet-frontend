"use client";
import React, { useEffect, useState } from "react";
import { Chart } from "primereact/chart";

interface DevelopmentResult {
  id: number;
  patientId: number;
  specialistId: number;
  evaluationDate: string;
  progress: string;
  testResults: number;
  specialist: {
    specialization: string;
  };
}

interface PatientChartProps {
  developmentResults: DevelopmentResult[];
}

const PatientChart: React.FC<PatientChartProps> = ({ developmentResults }) => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue("--text-color-secondary");
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

    const groupedResults: { [key: string]: DevelopmentResult[] } = {};

    developmentResults && developmentResults.forEach((result) => {
      const specialization = result.specialist.specialization;
      if (!groupedResults[specialization]) {
        groupedResults[specialization] = [];
      }
      groupedResults[specialization].push(result);
    });

    Object.values(groupedResults).forEach((results) => {
      results.sort(
        (a, b) => new Date(a.evaluationDate).getTime() - new Date(b.evaluationDate).getTime()
      );
    });

    const allDatesSet = new Set(
      developmentResults && developmentResults.map((result) => {
        const date = new Date(result.evaluationDate);
        return `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1)
          .toString()
          .padStart(2, "0")}.${date.getFullYear()}`;
      })
    );

    const allDates = Array.from(allDatesSet).sort(
      (a, b) =>
        new Date(a.split(".").reverse().join("-")).getTime() -
        new Date(b.split(".").reverse().join("-")).getTime()
    );

    const datasets = Object.entries(groupedResults).map(([specialization, results], index) => ({
      label: specialization,
      data: allDates.map((date) => {
        const result = results.find((r) => {
          const d = new Date(r.evaluationDate);
          const formatted = `${d.getDate().toString().padStart(2, "0")}.${(d.getMonth() + 1)
            .toString()
            .padStart(2, "0")}.${d.getFullYear()}`;
          return formatted === date;
        });
        return result ? result.testResults : null;
      }),
      borderColor: documentStyle.getPropertyValue("--blue-500"),
      fill: false,
      tension: 0.4,
    }));

    const data = {
      labels: allDates,
      datasets,
    };

    const options = {
      stacked: false,
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        tooltip: {
          callbacks: {
            label: function (tooltipItem: any) {
              const index = tooltipItem.dataIndex;
              const dataset = tooltipItem.dataset;
              const progress = groupedResults[dataset.label]?.[index]?.progress || "";
              return `Баллы: ${tooltipItem.formattedValue}, Прогресс: ${progress}`;
            },
          },
        },
        legend: {
          labels: {
            color: textColor,
          },
          onClick: (e: any, legendItem: any, legend: any) => {
            const index = legendItem.datasetIndex;
            const ci = legend.chart;

            const clickedDataset = ci.data.datasets[index];
            const isOnlyOneVisible = ci.data.datasets.every(
              (d: any, i: number) => (i === index && !d.hidden) || (i !== index && d.hidden)
            );

            if (isOnlyOneVisible) {
              ci.data.datasets.forEach((dataset: any) => {
                dataset.hidden = false;
              });
            } else {
              ci.data.datasets.forEach((dataset: any, i: number) => {
                dataset.hidden = i !== index;
              });
            }

            ci.update();
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, [developmentResults]);

  return (
    <div className="">
      <Chart type="line" data={chartData} options={chartOptions} />
    </div>
  );
};

export default PatientChart;