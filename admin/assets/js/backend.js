

$(document).ready(function(){

    var data_sent = "{ 'member_id' : 12 }";
    //data_sent = JSON.stringify(data_sent);


    var oTable     = $('#videoDatatable').DataTable({
        "dom": 'T<"clear">lfrtip',
        "order" :[[0,"desc"]],
        "ajax": {
            "url": "http://ec2-52-200-186-135.compute-1.amazonaws.com/api_twominutes/index.php/api/get_user_videos",
            "type": "POST",
            "data": data_sent
        },
        "columns": [
            {data: 'id', name: 'id'},
            {data: 'created_at', name: 'created_at'},
            {data: function(d)
            {
                return "<a href='{!! url('list-municipalities/" + d.id + "') !!}' class='btn btn-sm'>"+d.name+"</a>";

            },"name" : 'name'},

            {data: 'slug', name: 'slug'},

            {data: 'actions',  name: 'actions'},
        ],

        "aoColumnDefs": [
            { "bSearchable": false, "aTargets": [ 1] },
            { "bSortable": false, "aTargets": [ 1 ] }
        ]

    });


})


