$(document).ready(function() {
    $("#contactformsubmit").click(function(e) {
        e.preventDefault();

        var firstname = $("#firstname").val(),
            lastname = $("#lastname").val(),
            company = $("#company").val(),
            email = $("#email").val(),
            message = $("#message").val();
        Cookies.set("email", email);
        
        $('#contact-form-response').text('Processing...');

        $.ajax({
            type: "POST",
            url: 'https://p9uvsy0c8j.execute-api.eu-central-1.amazonaws.com/production/webform/contact/',
            contentType: 'application/json',
            data: JSON.stringify({
                'First_Name': firstname,
                'Last_Name': lastname,
                'Full_Name': firstname+" "+lastname,
                'Company': company,
                'Email': email,
                'message': message,
                'metadata': {
                    'cookies': getUserCookies()
                }
            }),
            success: function(res){
                removePageViewCookies();
                console.log("Contact form res:", res);
                // console.log(getPageViewCookies());
                $('#contact-form-response').text('Email was sent.');
            },
            error: function(){
                $('#contact-form-response').text('Error.');
            }
        });

    })

});