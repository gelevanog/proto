var WidgetStats = function() {
    'use strict';
    var randomData = App.helpers.generateRandomData,
        themeColors = App.helpers.themeColors;

    function chartJS() {
        // Dependency: assets/js/pages/chart-chartjs.js
        ChartJs.initGlobalOptions();
        // #stats-chart-1
        ChartJs.initChart('#stats-chart-1', {
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
            scaleLineColor: 'rgba(0,0,0,0)',
            scaleShowLabels: false,
            pointDotRadius: 0,
            bezierCurve: false,
            scaleGridLineColor: 'rgba(0,0,0,.05)',
            scaleIntegersOnly: false,
            datasetStrokeWidth: 2,
            animationEasing: 'easeInQuart',
            tooltipFillColor: themeColors.text
        }).line();
        // #stats-chart-2
        ChartJs.initChart('#stats-chart-2', {
            labels: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
            datasets: [{
                label: 'Dataset #1',
                fillColor: 'rgba(0, 0, 0, 0)',
                strokeColor: themeColors.text,
                pointColor: '#e5e5e5',
                pointStrokeColor: themeColors.text,
                pointHighlightFill: '#e5e5e5',
                pointHighlightStroke: themeColors.text,
                data: randomData(1, 25, 10)
            }, {
                label: 'Dataset #2',
                fillColor: 'rgba(0, 0, 0, 0)',
                strokeColor: themeColors.primary,
                pointColor: '#e5e5e5',
                pointStrokeColor: themeColors.primary,
                pointHighlightFill: '#e5e5e5',
                pointHighlightStroke: themeColors.primary,
                data: randomData(1, 25, 10)
            }]
        }, {
            scaleFontColor: '#333',
            showScale: true,
            scaleLineColor: 'rgba(0,0,0, 0.1)',
            scaleShowLabels: false,
            pointDotStrokeWidth: 2,
            pointDotRadius: 8,
            bezierCurve: false,
            scaleGridLineColor: 'rgba(0,0,0, 0.1)',
            scaleIntegersOnly: true,
            animationEasing: 'easeInQuart'
        }).line();
    }


    function sparkLine() {
        $("#sparkline-1").sparkline(randomData(1, 25, 20), {
            type: 'bar',
            height: '100',
            barWidth: 5,
            barSpacing: 5,
            zeroAxis: false,
            barColor: themeColors.primary
        });

        $("#sparkline-2").sparkline(randomData(1, 25, 20), {
            type: 'bar',
            height: '100',
            barWidth: 5,
            barSpacing: 5,
            zeroAxis: false,
            barColor: themeColors.deepPurple
        });

        $("#sparkline-3").sparkline(randomData(1, 25, 20), {
            type: 'bar',
            height: '100',
            barWidth: 5,
            barSpacing: 5,
            zeroAxis: false,
            barColor: '#ffffff'
        });

        $("#sparkline-4").sparkline(randomData(1, 25, 20), {
            type: 'bar',
            height: '100',
            barWidth: 5,
            barSpacing: 5,
            zeroAxis: false,
            barColor: themeColors.success
        });

        $("#sparkline-5").sparkline(randomData(5, 25, 10), {
            type: 'line',
            height: '100',
            width: '100%',
            lineColor: themeColors.red,
            fillColor: 'rgba(244, 67, 54, .2)',
            spotColor: themeColors.green,
            minSpotColor: themeColors.green,
            maxSpotColor: themeColors.red,
            highlightLineColor: themeColors.red
        });

        $("#sparkline-6").sparkline(randomData(5, 25, 10), {
            type: 'line',
            height: '100',
            width: '100%',
            lineColor: themeColors.text,
            fillColor: 'rgba(0, 0, 0, 0)',
            spotColor: themeColors.red,
            minSpotColor: themeColors.yellow,
            maxSpotColor: themeColors.blue,
            highlightLineColor: themeColors.text
        });

        $("#sparkline-7").sparkline(randomData(5, 25, 10), {
            type: 'line',
            height: '100',
            width: '100%',
            lineColor: '#fff',
            fillColor: 'rgba(255, 255, 255, .3)',
            spotColor: '#CDDC39',
            minSpotColor: '#4CAF50',
            maxSpotColor: '#F44336',
            spotRadius: 0,
            highlightLineColor: '#fff'
        });


        $("#sparkline-8").sparkline(randomData(5, 25, 10), {
            type: 'line',
            height: '100',
            width: '100%',
            lineColor: themeColors.lime,
            fillColor: themeColors.lime,
            spotColor: themeColors.lime,
            minSpotColor: themeColors.yellow,
            maxSpotColor: themeColors.blue,
            highlightLineColor: themeColors.text
        });
    }

    function c3charts() {
        c3.generate({
            bindto: '#c3-1',
            data: {
                columns: [
                    ['Chrome', 64.8],
                    ['IE', 7.1],
                    ['Firefox', 21.3],
                    ['Safari', 3.8],
                    ['Opera', 1.8]
                ],
                colors: {
                    'Chrome': themeColors.success,
                    'IE': themeColors.blue,
                    'Firefox': themeColors.orange,
                    'Safari': themeColors.info,
                    'Opera': themeColors.red
                },
                type: 'pie'
            }
        });

        c3.generate({
            bindto: '#c3-2',
            data: {
                columns: [
                    ['Average Sales', 30, 200, 100, 400, 150, 250],
                    ['Total Sales', 50, 20, 10, 40, 15, 25]
                ]
            },
            color: {
                pattern: [themeColors.lime, themeColors.orange]
            },
            tooltip: {
                show: false
            }
        });
    }
    return {
        //main function to initiate template pages
        chartJs: chartJS,
        sparkLine: sparkLine,
        c3charts: c3charts
    };
}();
