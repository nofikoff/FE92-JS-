'use strict'
//index.html

if (typeof(form001) !== 'undefined') {
    console.log("index.html");
// мы на первойс странице?
//      кукиес нужные есть ? - ДА - редирект на вторую
//      нет кукиес - обрабатываем запорс от формы - сохраняем в куукиес - редирект на вторую

    btnFirstForm.addEventListener('click',()=>{
        let emailInput = document.querySelector('#email'),
            passwordInput = document.querySelector('#password'),
            myJson = {
                email: '',
                password: ''

            };

        myJson.email = emailInput.value;
        myJson.password = passwordInput.value;

        setCookie("myJson", JSON.stringify(myJson), 1);

    });
    let b = getCookieValue("myJson");
    console.log(typeof (b));
// возвращает куки с указанным name,
// или undefined, если ничего не найдено

    if(b !== "" && b.email !== "" && b.password !== ""){
        console.log('VadimMoLoDeTs')
        document.location.href="personal.html";
    }

}



//persoanl.html
if (typeof(form002) !== 'undefined') {
    console.log("persoanl.html");
    let b = getCookieValue("myJson");
    exit.addEventListener("click", ()=>{
        //browser.cookies.remove();
        setCookie("myJson", '', 1)
        //eraseCookie("myJson");

        if(b !== "" ){
            document.location.href="index.html";
        }

    });

    btnSecondForm.addEventListener('click',()=>{
        let emailInput = document.querySelector('#email'),
            passwordInput = document.querySelector('#password'),
            myJsonPageTwo = {
                email: '',
                password: ''

            };

        myJsonPageTwo.email = emailInput.value;
        myJsonPageTwo.password = passwordInput.value;

        setCookie("myJsonPageTwo", JSON.stringify(myJsonPageTwo), 1);

    });


// мы на второй странице?
//      кукиес нужные есть ? - ДА - ждем данные формы
//      нет кукиес - редирект на первую
//      да куиес есть - обрабатываем запорс от формы - сохраняем в куукиес
//      Клик на EXIT - чистим кукиес - редикрет на перву.ю страницу




}

function getCookieValue(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    console.log("eraseCookie for " + name);

    document.cookie = name + '=; Max-Age=-99999999;';
}