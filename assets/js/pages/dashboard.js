var Dashboard = function() {
    'use strict';
    var randomData = App.helpers.generateRandomData,
        themeColors = App.helpers.themeColors;

    function chartJS() {
        // Dependency: assets/js/pages/chart-chartjs.js
        ChartJs.initGlobalOptions();
        ChartJs.initChart('#dashboard-chart-1', {
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sut'],
            datasets: [{
                label: 'Dataset #1',
                fillColor: 'rgba(0, 200, 83, 0)',
                strokeColor: themeColors.green,
                pointColor: themeColors.green,
                pointStrokeColor: themeColors.green,
                pointHighlightFill: themeColors.green,
                pointHighlightStroke: themeColors.green,
                data: randomData(1, 50, 7)
            }, {
                label: 'Dataset #2',
                fillColor: 'rgba(57, 139, 232, 0)',
                strokeColor: themeColors.blue,
                pointColor: themeColors.blue,
                pointStrokeColor: themeColors.blue,
                pointHighlightFill: themeColors.blue,
                pointHighlightStroke: themeColors.blue,
                data: randomData(1, 50, 7)
            }, {
                label: 'Dataset #3',
                fillColor: 'rgba(239, 108, 0, 0)',
                strokeColor: themeColors.red,
                pointColor: themeColors.red,
                pointStrokeColor: themeColors.red,
                pointHighlightFill: 'rgba(57, 139, 232, 1)',
                pointHighlightStroke: 'rgba(57, 139, 232, 1)',
                data: randomData(1, 50, 7)
            }]
        }, {
            scaleFontColor: themeColors.text,
            showScale: true,
            scaleLineColor: 'rgba(0,0,0,.05)',
            scaleShowLabels: false,
            pointDotRadius: 0,
            bezierCurve: true,
            scaleGridLineColor: 'rgba(0,0,0,.05)',
            scaleIntegersOnly: false,
            datasetStrokeWidth: 2,
            animationEasing: 'easeInQuart',
            tooltipFillColor: themeColors.text
        }).line();
    }

    function sparkLine() {
        $("#customer-increase").sparkline(randomData(5, 25, 20), {
            type: 'line',
            height: '96',
            width: '100%',
            lineColor: themeColors.gray,
            fillColor: themeColors.gray,
            spotColor: themeColors.gray,
            minSpotColor: themeColors.yellow,
            maxSpotColor: themeColors.blue,
            highlightLineColor: themeColors.text
        });

        $("#total-member").sparkline(randomData(1, 25, 15), {
            type: 'bar',
            height: '60',
            barWidth: 6,
            barSpacing: 1,
            zeroAxis: false,
            barColor: themeColors.success
        });

        $("#new-member").sparkline(randomData(1, 25, 15), {
            type: 'bar',
            height: '60',
            barWidth: 6,
            barSpacing: 1,
            zeroAxis: false,
            barColor: themeColors.red
        });
    }

    function gaugeChart(el, delay, name) {
        var chart = c3.generate({
            bindto: el,
            data: {
                columns: [
                    ['data', 50]
                ],
                type: 'gauge'
            },
            gauge: {
                label: {
                    format: function(value, ratio) {
                        return value + '%';
                    },
                    show: true // to turn off the min/max labels.
                },
                min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
                max: 100, // 100 is default
                units: name,
                width: 5 // for adjusting arc thickness
            },
            color: {
                pattern: [themeColors.inverse, themeColors.primary, themeColors.red], // the three color levels for the percentage values.
                threshold: {
                    unit: 'value', // percentage is default
                    max: 100, // 100 is default
                    values: [50, 70, 90]
                }
            },
            size: {
                height: 80
            }
        });

        setTimeout(function() {
            // update chart
            setInterval(function() {
                chart.load({
                    columns: [
                        ['data', parseInt(Math.random() * (90 - 40) + 40)]
                    ]
                });
            }, 3000);
        }, delay);
    }


    function clustersChart(el, interval) {
        var chart = c3.generate({
            bindto: el,
            axis: {
                y: {
                    show: false
                },
                x: {
                    type: 'category'                    
                }
            },            
            size: {
                height: 150
            },
            data: {
                labels: true,
                x: 'x',
                columns: [
                    ['x', 'Cluster A', 'Cluster B', 'Cluster C', 'Cluster D', 'Cluster E', 'Cluster F', 'Cluster G'],
                    ['data1'].concat(randomData(15, 25, 7)),
                    ['data2'].concat(randomData(1, 12, 7))
                ],
                types: {
                    data1: 'area-step',
                    data2: 'area-step'
                },
                names: {
                    data1: 'Delay',
                    data2: 'Open Connections'
                },
                colors: {
                    data1: themeColors.primary,
                    data2: themeColors.inverse
                }
            },
            point: {
                show: false
            },
            grid: {
                x: {
                    show: true
                }                
            },
            transition: {
                duration: 1000
            }
        });

        // update data
        setInterval(function() {
            chart.load({
                columns: [
                    ['x', 'Cluster A', 'Cluster B', 'Cluster C', 'Cluster D', 'Cluster E', 'Cluster F', 'Cluster G'],
                    ['data1'].concat(randomData(15, 25, 7)),
                    ['data2'].concat(randomData(1, 12, 7))
                ]
            });
        }, interval);
    }

    return {
        init: function() {
            chartJS();
            App.helpers.initResizeHandler(sparkLine);
            gaugeChart('#server-a', 0, 'Server A');
            gaugeChart('#server-b', 1000, 'Server B');
            gaugeChart('#server-c', 2000, 'Server C');
            clustersChart('#live-analytics', 4000);
        }
    }
}();
