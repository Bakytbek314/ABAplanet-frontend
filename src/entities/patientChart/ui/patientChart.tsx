"use client";
import React, { useEffect, useState } from "react";
import { Chart } from "primereact/chart";
import { ChartOptions, ChartData } from "chart.js";

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
  developmentResults?: DevelopmentResult[];
}

const PatientChart: React.FC<PatientChartProps> = ({ developmentResults = [] }) => {
  const [chartData, setChartData] = useState<ChartData>({ datasets: [], labels: [] });
  const [chartOptions, setChartOptions] = useState<ChartOptions>({});

  useEffect(() => {
    const processChartData = () => {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue("--text-color") || "#000";
      const textColorSecondary = documentStyle.getPropertyValue("--text-color-secondary") || "#666";
      const surfaceBorder = documentStyle.getPropertyValue("--surface-border") || "#ddd";

      // Группировка результатов по специализации
      const groupedResults = developmentResults.reduce<Record<string, DevelopmentResult[]>>(
        (acc, result) => {
          const specialization = result.specialist.specialization;
          if (!acc[specialization]) acc[specialization] = [];
          acc[specialization].push(result);
          return acc;
        },
        {}
      );

      // Получение уникальных отсортированных дат и времени
      const allDateTimes = Array.from(
        new Set(
          developmentResults.map(r => 
            new Date(r.evaluationDate).toISOString()
          )
        )
      ).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

      // Создание датасетов
      const datasets = Object.entries(groupedResults).map(([specialization, results], index) => {
        const dateTimeMap = results.reduce<Record<string, number>>((acc, result) => {
          const dateTimeKey = new Date(result.evaluationDate).toISOString();
          acc[dateTimeKey] = result.testResults;
          return acc;
        }, {});

        return {
          label: specialization,
          data: allDateTimes.map(datetime => dateTimeMap[datetime] ?? null),
          borderColor: `hsl(${index * 60}, 70%, 50%)`,
          tension: 0.4,
          fill: false,
          pointRadius: 5,
          pointHoverRadius: 7
        };
      });

      // Конфигурация данных
      const data: ChartData = {
        labels: allDateTimes.map(datetime => {
          const date = new Date(datetime);
          return date.toLocaleDateString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          });
        }),
        datasets
      };

      // Опции графика
      const options: ChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: { color: textColor }
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const result = developmentResults.find(r => 
                  new Date(r.evaluationDate).toISOString() === allDateTimes[context.dataIndex]
                );
                return [
                  `Баллы: ${context.formattedValue}`,
                  `Прогресс: ${result?.progress || 'нет данных'}`,
                  `Время: ${new Date(allDateTimes[context.dataIndex]).toLocaleTimeString('ru-RU')}`
                ];
              }
            }
          }
        },
        scales: {
          x: {
            grid: { color: surfaceBorder },
            ticks: { 
              color: textColorSecondary,
              maxRotation: 45,
              minRotation: 45
            }
          },
          y: {
            beginAtZero: true,
            grid: { color: surfaceBorder },
            ticks: { color: textColorSecondary }
          }
        }
      };

      return { data, options };
    };

    if (developmentResults.length > 0) {
      const { data, options } = processChartData();
      setChartData(data);
      setChartOptions(options);
    }
  }, [developmentResults]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      {developmentResults.length > 0 ? (
        <Chart 
          type="line" 
          data={chartData} 
          options={chartOptions} 
          style={{ height: '400px' }}
        />
      ) : (
        <div className="text-center text-gray-500 py-8">
          Нет данных для отображения графика
        </div>
      )}
    </div>
  );
};

export default PatientChart;