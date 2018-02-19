

$(document).ready(function(){

    var formData = {"member_id" : 12};

    if($('#videoDatatable').length){

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



    }




});



$("#submitvideo").submit(function(e) {
    e.preventDefault();
    var formData = new FormData(this);


    $.ajax({
        url: 'http://ec2-52-200-186-135.compute-1.amazonaws.com/api_twominutes/index.php/api/upload_video/',
        type: 'POST',
        data: formData,
        beforeSend : function() {

            HoldOn.open({
                theme:"sk-bounce",//If not given or inexistent theme throws default theme sk-rect
                message: "<h4> Uploading video ......</h4>",
                content:"Your HTML Content", // If theme is set to "custom", this property is available
                                             // this will replace the theme by something customized.
                backgroundColor:"blue",//Change the background color of holdon with javascript
                                       // Keep in mind is necessary the .css file too.
                textColor:"white" // Change the font color of the message
            });

        },
        success: function (data) {
            HoldOn.close();
        },
        cache: false,
        contentType: false,
        processData: false
    });
});



