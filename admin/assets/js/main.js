function Login(){
    var Uemail = $('#useremail').val();
    var Upassword = $('#userpassword').val();
    var values = JSON.stringify( { "email" : Uemail  , "password" : Upassword } );
    $.ajax({

        url: "http://ec2-52-200-186-135.compute-1.amazonaws.com/api_twominutes/index.php/api/login",
        type: "post",
        data: values ,
        success: function (response) {

            if(response.success == "true"){

                setCookie("qrcodeapp",response.session, 365);
                setCookie("useremail",Uemail, 365);
                window.location = "backend.html";

            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }


    });

}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

$("#loginAdmin").on("click",function(){

    Login();

})
