var ChartJs = function() {
    var fontFamily = "'Roboto', 'Helvetica', 'Arial', sans-serif";

    var initChart = function(el, data, options) {
        var self = this;
        self.el = el;
        self.data = data || {};
        self.options = options || {};
        self.canvas = $(self.el).get(0).getContext("2d");

        return {
            line: function() {
                return new Chart(self.canvas).Line(self.data, self.options);
            },
            bar: function() {
                return new Chart(self.canvas).Bar(self.data, self.options);
            },
            radar: function() {
                return new Chart(self.canvas).Radar(self.data, self.options);
            },
            polarArea: function() {
                return new Chart(self.canvas).PolarArea(self.data, self.options);
            }
        }        
    };

    var chart_1 = {
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'My First dataset',
                fillColor: 'rgba(244, 187, 6, .9)',
                strokeColor: '#F4BB06',
                pointColor: '#F4BB06',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#F4BB06',
                pointHighlightStroke: '#F4BB06',
                data: [65, 59, 80, 81, 56, 55, 40]
            }, {
                label: 'My Second dataset',
                fillColor: 'rgba(71, 147, 234, .9)',
                strokeColor: '#398BE8',
                pointColor: '#398BE8',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#398BE8',
                pointHighlightStroke: '#398BE8',
                data: [28, 48, 40, 19, 33, 27, 90]
            }]
        },
        options: {
            scaleFontColor: '#ccc',
            showScale: true,
            scaleLineColor: 'rgba(0, 0, 0, 0)',
            tooltipTitleFontStyle: '400',
            tooltipTitleFontColor: '#ccc',
            pointDotRadius: 2,
            bezierCurve: 0.3,
            scaleGridLineColor: 'rgba(0, 0, 0, 0)'
        }
    };

    var chart_2 = {
        data: {
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sut'],
            datasets: [{
                label: 'Dataset #1',
                fillColor: 'rgba(0, 200, 83, 0)',
                strokeColor: 'rgba(0, 200, 83, 1)',
                pointColor: 'rgba(0, 200, 83, 1)',
                pointStrokeColor: 'rgba(0, 200, 83, 1)',
                pointHighlightFill: 'rgba(0, 200, 83, 1)',
                pointHighlightStroke: 'rgba(0, 200, 83, 1)',
                data: [10, 12, 15, 8, 11, 18, 5]
            }, {
                label: 'Dataset #2',
                fillColor: 'rgba(239, 108, 0, 0)',
                strokeColor: 'rgba(239, 108, 0, 1)',
                pointColor: 'rgba(239, 108, 0, 1)',
                pointStrokeColor: 'rgba(239, 108, 0, 1)',
                pointHighlightFill: 'rgba(239, 108, 0, 1)',
                pointHighlightStroke: 'rgba(239, 108, 0, 1)',
                data: [15, 21, 18, 9, 24, 15, 22]
            }, {
                label: 'Dataset #3',
                fillColor: 'rgba(57, 139, 232, 0)',
                strokeColor: 'rgba(57, 139, 232, 1)',
                pointColor: 'rgba(57, 139, 232, 1)',
                pointStrokeColor: 'rgba(57, 139, 232, 1)',
                pointHighlightFill: 'rgba(57, 139, 232, 1)',
                pointHighlightStroke: 'rgba(57, 139, 232, 1)',
                data: [22, 6, 8, 20, 16, 11, 3]
            }]
        },
        options: {
            scaleFontColor: '#ccc',
            showScale: true,
            scaleLineColor: 'rgba(0,0,0,.05)',
            scaleShowLabels: false,
            pointDotRadius: 0,
            bezierCurve: false,
            scaleGridLineColor: 'rgba(0,0,0,.05)',
            scaleIntegersOnly: false,
            datasetStrokeWidth: 3,
            animationEasing: 'easeInQuart',
            tooltipFillColor: '#445A64'
        }
    };

    var chart_3 = {
        data: {
            labels: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
            datasets: [{
                label: 'Dataset #1',
                fillColor: 'rgba(0, 0, 0, 0)',
                strokeColor: '#333',
                pointColor: '#e5e5e5',
                pointStrokeColor: '#333',
                pointHighlightFill: '#e5e5e5',
                pointHighlightStroke: '#333',
                data: [10, 12, 15, 8, 11, 18, 10, 18, 22, 25]
            }, {
                label: 'Dataset #2',
                fillColor: 'rgba(0, 0, 0, 0)',
                strokeColor: '#398be8',
                pointColor: '#e5e5e5',
                pointStrokeColor: '#398be8',
                pointHighlightFill: '#e5e5e5',
                pointHighlightStroke: '#398be8',
                data: [0, 35, 7, 46, 17, 2, 5, 3, 17, 50]
            }]
        },
        options: {
            scaleFontColor: '#333',
            showScale: true,
            scaleLineColor: 'rgba(0,0,0, .05)',
            scaleShowLabels: false,
            pointDotStrokeWidth: 2,
            pointDotRadius: 8,
            bezierCurve: false,
            scaleGridLineColor: 'rgba(0,0,0, .05)',
            scaleIntegersOnly: true,
            animationEasing: 'easeInQuart'
        }
    };

    var chart_4 = {
        data: {
            labels: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'],
            datasets: [{
                label: 'Dataset #1',
                fillColor: 'rgba(0, 200, 83, 0.2)',
                strokeColor: '#00c853',
                pointColor: '#e5e5e5',
                pointStrokeColor: '#333',
                pointHighlightFill: '#e5e5e5',
                pointHighlightStroke: '#333',
                data: [2000, 2350, 1600, 2000, 3330, 3120, 1700, 1540, 2090, 2500, 3010, 2500, 1998, 2215, 2548, 2111]
            }]
        },
        options: {
            scaleFontColor: '#333',
            showScale: true,
            scaleLineColor: 'rgba(0, 200, 83, 0.2)',
            scaleShowLabels: false,
            pointDotStrokeWidth: 0,
            pointDotRadius: 0,
            bezierCurve: 1,
            scaleGridLineColor: 'rgba(0, 200, 83, 0.2)',
            scaleIntegersOnly: true,
            animationEasing: 'easeInQuart'
        }
    };

    var chart_5 = {
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'My First dataset',
                fillColor: 'rgba(245, 92, 45, 9)',
                strokeColor: 'rgba(245, 92, 45, 1)',
                highlightFill: 'rgba(245, 92, 45, 1)',
                highlightStroke: 'rgba(245, 92, 45, 1)',
                data: [65, 59, 80, 81, 56, 55, 40]
            }, {
                label: 'My Second dataset',
                fillColor: 'rgba(244, 187, 6, .9)',
                strokeColor: 'rgba(244, 187, 6, 1)',
                highlightFill: 'rgba(244, 187, 6, 1)',
                highlightStroke: 'rgba(244, 187, 6, 1)',
                data: [28, 48, 40, 19, 86, 27, 90]
            }]
        },
        options: {
            scaleLineColor: '#fff',
            scaleFontColor: '#fff',
            scaleBeginAtZero: true,
            scaleShowGridLines: false,
            scaleGridLineWidth: 1,
            scaleShowHorizontalLines: true,
            scaleShowVerticalLines: true,
            barShowStroke: false,
            barValueSpacing: 2,
            barDatasetSpacing: 1
        }
    };

    var chart_6 = {
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'My First dataset',
                fillColor: 'rgba(208, 222, 70, 1)',
                strokeColor: 'rgba(208, 222, 70, 0)',
                highlightFill: 'rgba(208, 222, 70, 0)',
                highlightStroke: 'rgba(208, 222, 70, 1)',
                data: [65, 59, 80, 81, 56, 55, 40]
            }, {
                label: 'My Second dataset',
                fillColor: 'rgba(244, 67, 54, 1)',
                strokeColor: 'rgba(244, 67, 54, 0)',
                highlightFill: 'rgba(244, 67, 54, 0)',
                highlightStroke: 'rgba(244, 67, 54, 1)',
                data: [28, 48, 40, 19, 86, 27, 90]
            }]
        },
        options: {
            scaleLineColor: 'rgba(255, 255, 255, .5)',
            scaleFontColor: '#fff',
            scaleBeginAtZero: true,
            scaleGridLineWidth: 1,
            scaleShowHorizontalLines: true,
            scaleShowVerticalLines: true,
            barShowStroke: true,
            barValueSpacing: 2,
            barDatasetSpacing: 1,
            scaleShowLabels: false,
            showScale: true,
            scaleGridLineColor: 'rgba(255, 255, 255, .5)',
        }
    };

    var chart_7 = {
        data: {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            datasets: [{
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 90, 81, 56, 55, 40]
            }, {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 96, 27, 100]
            }]
        },
        options: {
            pointLabelFontColor: "#fff"
        }
    };

    var chart_8 = {
        data: [{
                value: 300,
                color: "#F7464A",
                highlight: "#FF5A5E",
                label: "Red"
            }, {
                value: 80,
                color: "#46BFBD",
                highlight: "#5AD3D1",
                label: "Green"
            }, {
                value: 100,
                color: "#FDB45C",
                highlight: "#FFC870",
                label: "Yellow"
            }, {
                value: 60,
                color: "#949FB1",
                highlight: "#A8B3C5",
                label: "Grey"
            }, {
                value: 120,
                color: "#4D5360",
                highlight: "#616774",
                label: "Dark Grey"
            }
        ],
        options: {
            
        }
    };


    return {
        initChart: initChart,
        chart_1: chart_1,
        chart_2: chart_2,
        chart_3: chart_3,
        chart_4: chart_4,
        chart_5: chart_5,
        chart_6: chart_6,
        chart_7: chart_7,
        chart_8: chart_8,
        initGlobalOptions: function() {
            Chart.defaults.global.responsive = true;
            Chart.defaults.global.scaleFontFamily = fontFamily;
            Chart.defaults.global.tooltipFontFamily = fontFamily;
            Chart.defaults.global.tooltipTitleFontFamily = fontFamily;
            Chart.defaults.global.tooltipFontSize = 12;
        }
    }
}();
