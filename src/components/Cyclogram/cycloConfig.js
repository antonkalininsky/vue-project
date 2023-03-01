import { chartData } from "./cycloData"
import { plantsNames } from "@/vuex/plantsNames";

const names = [];

for (let i of plantsNames.values()) {
  names.push(i);
}

export const data = {
  labels: names,
  datasets: chartData
}

var yLabels = {
  0: '20:10',
  500: '20:15',
  1000: '20:20',
  1500: '20:25',
  2000: '20:30',
  2500: '20:35'
}

export const options = {
  animation: false,
  indexAxis: 'y',
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true,
      ticks: {
        callback: function (value) {
          return yLabels[value];
        }
      }
    },
    y: {
      stacked: true,
    },
  },
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: false
    }
  },
  elements: {
    bar: {
      borderWidth: 0
    }
  }
}
