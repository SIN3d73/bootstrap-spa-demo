$("#contact-form").submit(function (event) {

    var url = $(this).attr('action');

    if (url) {
        $.ajax({
            url: url,
            type: "POST",
            dataType: 'json',
            data: $("#contact-form").serialize(),
            success: function (result) {
                $("#success").show();
            },
            error: function () {
                $("#error").show();
            }
        });
    }

    event.preventDefault();
});
