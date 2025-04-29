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

      // Получение уникальных отсортированных дат
      const allDates = Array.from(
        new Set(
          developmentResults.map((r) => 
            new Date(r.evaluationDate).toISOString().split('T')[0]
          )
        )
      ).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

      // Создание датасетов
      const datasets = Object.entries(groupedResults).map(([specialization, results], index) => {
        const dateMap = results.reduce<Record<string, number>>((acc, result) => {
          const dateKey = new Date(result.evaluationDate).toISOString().split('T')[0];
          acc[dateKey] = result.testResults;
          return acc;
        }, {});

        return {
          label: specialization,
          data: allDates.map(date => dateMap[date] ?? null),
          borderColor: `hsl(${index * 60}, 70%, 50%)`,
          tension: 0.4,
          fill: false,
          pointRadius: 5,
          pointHoverRadius: 7
        };
      });

      // Конфигурация данных
      const data: ChartData = {
        labels: allDates.map(date => 
          new Date(date).toLocaleDateString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          })
        ),
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
                  new Date(r.evaluationDate).toISOString().split('T')[0] === allDates[context.dataIndex]
                );
                return `Баллы: ${context.formattedValue}, Прогресс: ${result?.progress || 'нет данных'}`;
              }
            }
          }
        },
        scales: {
          x: {
            grid: { color: surfaceBorder },
            ticks: { color: textColorSecondary }
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