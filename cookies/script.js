"use strict";

if (typeof(elem) !== 'undefined') {  
}

// мы на первойс странице?
//      кукиес нужные есть ? - ДА - редирект на вторую
//      нет кукиес - обрабатываем запорс от формы - сохраняем в куукиес - редирект на вторую


// мы на второй странице?
//      кукиес нужные есть ? - ДА - ждем данные формы
//      нет кукиес - редирект на первую
//      да куиес есть - обрабатываем запорс от формы - сохраняем в куукиес
//      Клик на EXIT - чистим кукиес - редикрет на перву.ю страницу













function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}