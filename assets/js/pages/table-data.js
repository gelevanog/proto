var TableData = function() {
    'use strict';



    return {
        //main function to initiate template pages
        init: function() {
            $('#data-example').dataTable({
                'language': {
                    'paginate': {
                        'previous': '«',
                        'next': '»'
                    }
                }
            });
        }
    };
}();
