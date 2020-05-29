"use strict";
const fetch = require('node-fetch');


fetch("https://filmix.co/engine/ajax/user_auth.php", {
  "headers": {
    "accept": "*/*",
    "accept-language": "ru,ru-RU;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "x-requested-with": "XMLHttpRequest"
  },
  "body": "login_name=denis.dubovikov&login_password=goblin666&login_not_save=1&login=submit",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then((a) => {
  return parseCookies(a)
}).then((b) => {
  fetch("https://filmix.co/engine/ajax/user_auth.php", {
    "headers": {
      "accept": "*/*",
      "accept-language": "ru,ru-RU;q=0.9,en-US;q=0.8,en;q=0.7",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "x-requested-with": "XMLHttpRequest",
      "cookie": b
    },
    "body": "login_name=denis.dubovikov&login_password=goblin666&login_not_save=1&login=submit",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  }).then((c) => {
    return parseCookies(c)
  }).then((d) => {
    fetch("https://filmix.co/profile/denis.dubovikov", {
      "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "ru,ru-RU;q=0.9,en-US;q=0.8,en;q=0.7",
        "cache-control": "max-age=0",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-origin",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        "cookie": d
      },
      "referrer": "https://filmix.co/",
      "referrerPolicy": "no-referrer-when-downgrade",
      "body": null,
      "method": "GET",
      "mode": "cors"
    }).then((f) => {
      return f.textConverted()
    }).then((g) => {
      var myRegexp = /<span class="right-info">(.*)<\/span>/gm;
      var match;
      while ((match = myRegexp.exec(g)) !== null) {

        // matched text: match[0]
        // match start: match.index
        // capturing group n: match[n]
        console.log(match[1])

      }


    })
  })
})

function parseCookies(response) {
  const raw = response.headers.raw()['set-cookie'];
  return raw.map((entry) => {
    const parts = entry.split(';');
    const cookiePart = parts[0];
    return cookiePart;
  }).join(';');
}