import moment from 'moment';
import numeral from 'numeral';
/** 
    this function expects an object of specfic keys
    params = {
        startRange: int,
        endRange: int,
        rangeDiff: int,
        chartData: [],
        metricType: string
    }
**/
export function createChartData(params) {
    
    console.log('createChartData', params);
    
    const {
        startRange,
        endRange,
        rangeDiff,
        chartData,
        metricType
    } = params

    let startIndex = chartData.findIndex((d, i) => {
        if (startRange <= d.date) {
            return true
        } 
    })

    let endIndex = startIndex + rangeDiff;
   
    let slicedChartValues = chartData.slice(startIndex, endIndex);
    
    var xValue = [];
    var yValue = [];

    slicedChartValues.forEach((d, i) => {
        let convertedDate = moment.unix(d.date / 1000).format('MM/DD/YY');

        let chartValue = d[metricType.value];
       
        xValue.push(convertedDate);
        yValue.push(chartValue)
    })


    return { xValue: xValue, yValue: yValue }
}


export function createChartOptions(params) {

    var boilerOptions = {
        title: {
            display: false,
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    let labelValue = numeral(tooltipItem.yLabel).format('$0,0.00');
                    return labelValue
                }
            }
        },
        legend: {
            display: false,
            labels: {
                fontColor: params.legendColor,
                fontSize: 18,
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                gridLines: {
                    display: true,
                },
                ticks: {
                    beginAtZero: false,
                    fontColor: '#CCCDCF',
                    callback: function(label, index, labels) {
                        let labelValue = numeral(label).format('$0.a')
                        return labelValue
                    }
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                },
                ticks: {
                    beginAtZero: true,
                    fontColor: '#CCCDCF'
                }
            }]
        }
    };

    // if (params.metricTypeId == 3 || params.metricTypeId == 4) {
    //     const newTick = function(label, index, labels) {
    //         const labelValue = numeral(label).format('(0. a)')
    //         return labelValue
    //     }

    //     const tooltipsLabel = function(tooltipItem, data) {
    //         const labelValue = numeral(tooltipItem.yLabel).format('0,0.');
    //         return labelValue
    //     }

    //     boilerOptions.tooltips.callbacks.label = tooltipsLabel;
    //     boilerOptions.scales.yAxes[0].ticks.callback = newTick;
    // }

    return boilerOptions;
}