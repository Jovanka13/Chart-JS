// BAR CHART

const barChart = document.getElementById('barChart');

let delayed;

new Chart(barChart, {
    type: 'bar',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        datasets: [
            {
                label: 'Fantasy',
                data: [1000, 17000, 11000, 30000, 4000, 17000, 33000],
                backgroundColor: 'rgb(15, 64, 224)',
            }, {
                label: 'Horror',
                data: [11000, 19000, 10000, 37000, 9000, 3000, 21000],
                backgroundColor: 'rgb(224, 15, 32)',
            }, {
                label: 'Detective and Mystery',
                data: [1000, 13000, 19000, 17000, 29000, 39000, 24000],
                backgroundColor: 'rgb(15, 224, 67)',
            }, {
                label: 'Comic Book or Graphic Novel',
                data: [13000, 1000, 12000, 37000, 2000, 19000, 21000],
                backgroundColor: 'rgb(203, 224, 15)',
            }, {
                label: 'Action and Adventure',
                data: [3000, 17000, 1000, 31000, 25000, 59000, 71000],
                backgroundColor: 'rgb(224, 133, 15)',
            }, {
                label: 'Romance Novel',
                data: [83000, 7000, 19000, 30000, 55000, 51000, 71000],
                backgroundColor: 'rgb(92, 38, 143)',
            }
        ]
    },
    options: {
        plugins: {
          title: {
            display: true,
            text: 'Book Sales',
          },
        },
        responsive: true,
        scales: {
            y: {
                ticks: {
                    callback: function (value) {
                        return '$' + value;
                    },
                },
            },
        },
        animation: {
            onComplete: () => {
                delayed = true;
                },
                delay: (context) => {
                    let delay = 0;
                    if(context.type === 'data' && context.mode === 'default' && !delayed) {
                        delay = context.dataIndex * 300 + context.datasetIndex * 100;
                    }
                    return delay;
                },
            },
        },
    });    



// LINE CHART

const lineChart = document.getElementById('lineChart');

const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Okt',
    'Nov',
    'Dec',
];

new Chart(lineChart, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
            {
                label: 'Product A',
                data: [85, 99, 71, 55, 90, 94, 64, 93, 32, 30, 74, 54],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.5,
                pointBackgroundColor: 'blue'
            },
            {
                label: 'Product B',
                data: [99, 14, 47, 36, 17, 15, 38, 72, 57, 86, 76, 72],
                fill: false,
                borderColor: 'rgb(70, 182, 99)',
                tension: 0.5,
                pointBackgroundColor: 'green'
            },
            {
                label: 'Product C',
                data: [9, 55, 23, 68, 90, 77, 30, 71, 59, 88, 70, 92],
                fill: false,
                borderColor: 'rgb(189, 34, 34)',
                tension: 0.5,
                pointBackgroundColor: 'red'
            },
            {
                label: 'Product D',
                data: [45, 83, 41, 33, 64, 13, 7, 70, 87, 54, 43, 82],
                fill: false,
                borderColor: 'rgb(189, 34, 111)',
                tension: 0.5,
                pointBackgroundColor: 'pink'
            }
        ]
    },
    options: {
        plugins: {
          title: {
            display: true,
            text: 'Customer Satisfaction Ratings',
          },
        },
        radius: 5,
        hitRadius: 30,
        hoverRadius: 12,
        responsive: true,
        scales: {
            y: {
                ticks: {
                    callback: function (value) {
                        return value + '%';
                    },
                },
            },
        },
        animation: {
            onComplete: () => {
                delayed = true;
                },
                delay: (context) => {
                    let delay = 0;
                    if(context.type === 'data' && context.mode === 'default' && !delayed) {
                        delay = context.dataIndex * 300 + context.datasetIndex * 100;
                    }
                    return delay;
                },
            },
        },
});


// PIE CHART

const pieChart = document.getElementById('pieChart');

new Chart(pieChart, {
    type: 'pie',
    data: {
        labels: ['Python', 'Javascript', 'Java', 'C#', 'PHP', 'C++'],
        datasets: [
            {
                label: 'Industrial Demand by Programing Languages',
                data: [26.7, 24.3, 22.5, 10.6, 8.9, 7],
                backgroundColor: [
                    'red',
                    'green',
                    'blue',
                    'yellow',
                    'purple',
                    'orange'
                ],
                borderWidth: 0
            }
        ]
    },
    options: {
        plugins: {
          title: {
            display: true,
            text: 'Popular Programing Languages',
          },
        },
        responsive: true,
        rotation: 1,
        animation: {
            onComplete: () => {
                delayed = true;
                },
                delay: (context) => {
                    let delay = 0;
                    if(context.type === 'data' && context.mode === 'default' && !delayed) {
                        delay = context.dataIndex * 300 + context.datasetIndex * 100;
                    }
                    return delay;
                },
            },
        },
});