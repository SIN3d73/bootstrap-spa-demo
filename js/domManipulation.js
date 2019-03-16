$("#print-btn").click(function (event) {
    var input = $("#test-input");

    $("#test1").text(input.val());


    var typed = new Typed('#test2', {
        strings: [input.val()],
        typeSpeed: 30
    });

    $(this).prop('disabled', true);
});