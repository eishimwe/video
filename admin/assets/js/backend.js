

$(document).ready(function(){

    var formData = {"member_id" : 12};


    var oTable     = $('#videoDatatable').DataTable({
        "dom": 'T<"clear">lfrtip',
        "order" :[[0,"desc"]],
        "ajax": {
            "url": "http://ec2-52-200-186-135.compute-1.amazonaws.com/api_twominutes/index.php/api/get_user_videos",
            "contentType": "application/json",
            "type": "POST",
            "data": function (formData) {
                formData = {"member_id" : 12};
                return JSON.stringify( formData );
            }

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


});



$("#submitvideo").submit(function(e) {
    e.preventDefault();
    var formData = new FormData(this);

    console.log(formData);

    $.ajax({
        url: 'http://ec2-52-200-186-135.compute-1.amazonaws.com/api_twominutes/index.php/api/upload_video/',
        type: 'POST',
        data: formData,
        success: function (data) {
            alert(data)
        },
        cache: false,
        contentType: false,
        processData: false
    });
});



