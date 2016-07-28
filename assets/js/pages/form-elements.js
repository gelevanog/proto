var FormElements = function() {

    // Initialize Bootstrap Switch
    function bootstrapSwitch() {
        var elems = Array.prototype.slice.call(document.querySelectorAll('.bs-switch'));
        elems.forEach(function(el) {
            $(el).bootstrapSwitch();
        });
    }

    // Bootstrap 3 Date/Time Picker
    function dateTimePickerHandler() {
        // Minimum Setup
        $('#datetimepicker1').datetimepicker();
        // Custom Formats
        $('#datetimepicker3').datetimepicker({
            format: 'LT'
        });
        // No Icon (input field only)
        $('#datetimepicker4').datetimepicker();
        // Custom Icons
        $('#datetimepicker8').datetimepicker({
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-arrow-up",
                down: "fa fa-arrow-down"
            }
        });
        // View Mode
        $('#datetimepicker9').datetimepicker({
            viewMode: 'years'
        });
        // Min View Mode
        $('#datetimepicker10').datetimepicker({
            viewMode: 'years',
            format: 'MM/YYYY'
        });
        // Disabled Days of the Week
        $('#datetimepicker11').datetimepicker({
            daysOfWeekDisabled: [0, 6]
        });
        // Inline
        $('#datetimepicker12').datetimepicker({
            inline: true,
            sideBySide: true
        });
        // Linked Pickers
        $('#datetimepicker6').datetimepicker();
        $('#datetimepicker7').datetimepicker();
        $("#datetimepicker6").on("dp.change", function(e) {
            $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
        });
        $("#datetimepicker7").on("dp.change", function(e) {
            $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
        });
    };

    function datePickerHandler() {
        // Text input
        $('#datepicker1').datepicker();
        // Component
        $('#datepicker2').datepicker();
        // Range
        $('#datepicker3').datepicker();
        // Embedded / inline
        $('#datepicker4').datepicker();
    }

    function select2Handler() {
        // The basics
        $('.js-example-basic-single').select2();
        // Multiple select boxes
        $('.js-example-basic-multiple').select2();
    }

    function colorPickerHandler() {
        // Attached to a field with hex format specified via options
        $('#colorpicker1').colorpicker();
        // As a component
        $('#colorpicker2').colorpicker();
        // Using events to work with the color
        var bodyStyle = $('#colorpicker-block')[0].style;
        $('#colorpicker3').colorpicker({
            color: bodyStyle.backgroundColor
        }).on('changeColor', function(ev) {
            bodyStyle.backgroundColor = ev.color.toHex();
        });
        // Horizontal mode
        $('#colorpicker4').colorpicker({
            format: 'rgba', // force this format
            horizontal: true
        });
    }

    // Bootstrap Slider 
    function bootsrapSliderHandler() {
        // Basic example with custom formatter 
        $('#ex1').slider({
            formatter: function(value) {
                return 'Current value: ' + value;
            }
        });
        // Range selector, options specified via data attribute
        $("#ex2").slider();
        // Tooltip can always be displayed.
        $("#ex8").slider({
            tooltip: 'always'
        });
        // Precision (number of places after the decimal) can be specified.
        $("#ex9").slider({
            precision: 2,
            value: 8.115 // Slider will instantiate showing 8.12 due to specified precision
        });
        // Coloring the low and high track segments.
        $("#ex12a").slider({
            class: "slider12a",
            min: 0,
            max: 10,
            value: 5
        });
        $("#ex12b").slider({
            id: "slider12b",
            min: 0,
            max: 10,
            range: true,
            value: [3, 7]
        });
        $("#ex12c").slider({
            id: "slider12c",
            min: 0,
            max: 10,
            range: true,
            value: [3, 7]
        });
    };


    return {
        init: function() {
            bootstrapSwitch();
            dateTimePickerHandler();
            datePickerHandler();
            select2Handler();
            colorPickerHandler();
            bootsrapSliderHandler();
        }
    }

}();
