

$(document).ready(function(){

    var formData = {"member_id" : 12};


    var oTable     = $('#videoDatatable').DataTable({
        "dom": 'T<"clear">lfrtip',
        "ajax": {
            "url": "http://ec2-52-200-186-135.compute-1.amazonaws.com/api_twominutes/index.php/api/get_user_videos",
            "contentType": "application/json",
            "type": "POST",
            "dataSrc":"",
            "data": function (formData) {
                formData = {"member_id" : 12};
                return JSON.stringify( formData );
            }

        },
        "columns": [
            {data: 'videos_id'},
            {data: 'date_created'},
            {data: 'videos_title'},
            {data: 'videos_path'},


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



