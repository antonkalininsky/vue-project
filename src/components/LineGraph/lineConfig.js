// import { makeLineData } from "./makeLineData"

// const dat1 = makeLineData(100, 2);
// const dat2 = makeLineData(100, 2.1);

// export const data = {
//     datasets: [
//         {
//             label: 'Гранулятор',
//             fill: false,
//             borderColor: '#f87979',
//             backgroundColor: '#f87979',
//             data: dat1
//         }
//     ]
// }

export const options = {
    animation: false,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        tooltip: {
            enabled: false
        },
        legend: {
          display: false
        },
        customCanvasBackgroundColor: {
          color: 'white',
        }
    },
    scales: {
        x: {
            title: {
                font: {
                    size: 14
                },
                color: 'black',
                display: true,
                text: 'Время, сек'
            } 
        }
    },
}
