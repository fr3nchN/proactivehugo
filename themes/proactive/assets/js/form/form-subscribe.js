$(document).ready(function() {
    $("#subscriptionformsubmit").click(function(e) {
        e.preventDefault();

        var firstname = $("#firstname").val(),
            lastname = $("#lastname").val(),
            company = $("#company").val(),
            email = $("#email").val(),
            filename = $("#filename").val(),
            subscribe = $("#subscriptionbox").val();
        filename = filename === '' ? undefined : filename;
        Cookies.set("email", email);
        
        $('#subscription-form-response').text('Processing...');

        $.ajax({
            type: "POST",
            url: 'https://p9uvsy0c8j.execute-api.eu-central-1.amazonaws.com/production/webform/subscribe/',
            contentType: 'application/json',
            data: JSON.stringify({
                'First_Name': firstname,
                'Last_Name': lastname,
                'Full_Name': firstname+" "+lastname,
                'Company': company,
                'Email': email,
                'Subscribe': subscribe,
                'Filename': filename,
                'metadata': {
                    'cookies': getUserCookies()
                }
            }),
            success: function(res){
                removePageViewCookies();
                console.log("Contact form res:", res);
                // console.log(getPageViewCookies());

                var msgContainer = $('<div>')
                    .attr('class', 'text-center');

                if (!res.payload.signedUrl) {
                    var message = $('<p>').text('Success!')
                    msgContainer.append(message);
                    $('#subscription-form').html(msgContainer);
                } else {
                    // Create a link to download
                    var fileLink = $('<a>')
                        .attr('href', res.payload.signedUrl)
                        .attr('class', 'cta')
                        .attr('target', '_blank')
                        .text('Download');
                    msgContainer.append(fileLink);
                    $('#subscription-form').html(msgContainer);
                }
            },
            error: function(){
                $('#subscription-form-response').text('Error.');
            }
        });

    })

});