/**
 * Created by altrdev on 03/03/20.
 */

$(document).ready(function(e) {
    language();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    let button = $('#back-to-top');

    // scroll body to 0px on click
    button.click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    button.tooltip('show');

});

function language() {
    let lang;
    if (!getCookie("lang")) {
        lang = navigator.language.slice(0, 2);
        setCookie("lang", lang, 7);
    }

    lang = getCookie("lang");
    if(lang !== document.getElementsByTagName("html")[0].lang) {
        const languageLink = document.getElementById("translate_page_" + lang).href;
        location.href = languageLink;
    }
}

function setCookie(name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24*60*60*1000*days);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}

function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

function setLanguage(lang) {
    setCookie("lang", lang, 7);
    var languageLink = document.getElementById("translate_page_" + lang).href;
    location.href = languageLink;
}

const processForm = form => {
    const data = new FormData(form)
    fetch('/', {
        method: 'POST',
        body: data,
    })
        .then(() => {
            $('#modalContact').modal('toggle');
            $("#success-alert").fadeTo(3000, 500).slideUp(500, function(){
                $("#success-alert").slideUp(500);
            });
            form.reset();
            if(window.grecaptcha) {
                grecaptcha.reset();
            }
        })
        .catch(error => {
            $('#modalContact').modal('toggle');
            $("#error-alert").fadeTo(3000, 500).slideUp(500, function(){
                $("#error-alert").slideUp(500);
            });
            form.reset();
            if(window.grecaptcha) {
                grecaptcha.reset();
            }
        })
}

const contactForm = document.querySelector('.contact-form')
if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        processForm(contactForm);
    })
}
