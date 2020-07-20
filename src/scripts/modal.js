$(".form").submit(e => {
    e.preventDefault();

    const form = $(e.currenttarget);
    const name = form.find("[name='name']");

    $.ajax({
        url: "https://webdev-api.loftschool.com/sendmail",
        method: "post"
        data: {
            name: "",
            phone: "",
            comment: "",
            to: ""
        }
    });

    $.fancybox.open({
        src: "modal",
        type: "inline"
    })
})

$(".app-submit-btn").click(e => {
    e.preventDefault();

    $fancybox.close();
})