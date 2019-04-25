var flag;
var flag_1;
var flag_2;
var flag_3;
$('#contact-name, #contact-email, #contact-phone, #contact-text').blur(function () {

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
                flag = true;
            } else {
                $(this).removeClass('not_error').addClass('error');
                num_one.css('border','1px solid red');
                flag = false;
            }
            break;

        case 'contact-email':
            var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
            if (val != '' && rv_email.test(val)) {
                $(this).removeClass('error').addClass('not_error');
                num_sec.css('border','1px solid green');
                flag_1 = true;
            } else {
                $(this).removeClass('not_error').addClass('error');
                num_sec.css('border','1px solid red');
                flag_1 = false;
            }
            break;

        case 'contact-phone':
            var rv_phone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
            if (val != '' && rv_phone.test(val)) {
                $(this).removeClass('error').addClass('not_error');
                num_three.css('border','1px solid green');
                flag_2 = true;
            } else {
                $(this).removeClass('not_error').addClass('error');
                num_three.css('border','1px solid red');
                flag_2 = false;
            }
            break;

        case 'contact-text':
            if (val != '' && val.length < 5000) {
                $(this).removeClass('error').addClass('not_error');
                num_fourth.css('border','1px solid green');
                flag_3 = true;
            } else {
                $(this).removeClass('not_error').addClass('error');
                num_fourth.css('border','1px solid red');
                flag_3 = false;
            }
            break;

    }
    flags();
});


var modal = document.querySelector('.modal');
var submit = document.querySelector('#submit');
var close = document.querySelector('.modal__close');
function  flags() {
    if(flag === true && flag_1 === true && flag_2 === true && flag_3 === true) {
        submit.removeAttribute('disabled');
        console.log('enabled');
    }else {
        submit.setAttribute('disabled', 'disabled');
        console.log('disabled');
    }
}




submit.addEventListener('click', function (e) {
    e.preventDefault();
    modal.setAttribute('style', 'z-index:9999; opacity: 1;');
    console.log(flag + flag_1 + flag_2 + flag_3);
    close.addEventListener('click', function () {
        modal.setAttribute('style', 'z-index: -1; opacity: 0;');
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.setAttribute("style", "z-index:-1; opacity: 0;");
        }
    });
});


