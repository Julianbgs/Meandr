$('#contact-name, #contact-email, #contact-phone, #contact-text').unbind().blur(function () {

    var id = $(this).attr('id');
    var val = $(this).val();
    var num_one = $('#num_1');
    var num_sec = $('#num_2');
    var num_three = $('#num_3');
    var num_fourth = $('#num_4');

    switch (id) {
        case 'contact-name':
            var rv_name = /^[a-zA-Zа-яА-Я]+ [a-zA-Zа-яА-Я]+$/;
            if (val.length > 2 && val != '' && rv_name.test(val)) {
                $(this).removeClass('error').addClass('not_error');
                num_one.css('border','1px solid green');
            } else {
                $(this).removeClass('not_error').addClass('error');
                num_one.css('border','1px solid red');
            }
            break;

        case 'contact-email':
            var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
            if (val != '' && rv_email.test(val)) {
                $(this).removeClass('error').addClass('not_error');
                num_sec.css('border','1px solid green');
            } else {
                $(this).removeClass('not_error').addClass('error');
                num_sec.css('border','1px solid red');
            }
            break;

        case 'contact-phone':
            var rv_phone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
            if (val != '' && rv_phone.test(val)) {
                $(this).removeClass('error').addClass('not_error');
                num_three.css('border','1px solid green');
            } else {
                $(this).removeClass('not_error').addClass('error');
                num_three.css('border','1px solid red');
            }
            break;

        case 'contact-text':
            if (val != '' && val.length < 5000) {
                $(this).removeClass('error').addClass('not_error');
                num_fourth.css('border','1px solid green');
            } else {
                $(this).removeClass('not_error').addClass('error');
                num_fourth.css('border','1px solid red');
            }
            break;

    }

});