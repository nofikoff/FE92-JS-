"use strict";

var count = 2;
let main = document.getElementsByTagName('main');
// console.log(main.scrollTop)

function scroller() {
    // console.log()
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        nextPage()
        count = count + 1;
    }
}


out.addEventListener("scroll", scroller);
window.addEventListener("scroll", scroller);
pressMe.addEventListener("click", getFilms);

// nextpage.addEventListener("click", nextPage);
// nextpage.addEventListener("click", () => {
//     return count = count + 1;
// });

// console.log(count)

document.querySelector('body').addEventListener('click', (e) => {
    if ((e.target.tagName).toLowerCase() === 'img') {
        moreInfo();
    }
});
document.querySelector("body").addEventListener('click', (e) => {
    if ((e.target.id) === "modal-close") {
        // console.log(e.target)
        document.querySelector('div.modal-over').remove()
    }
    if (e.target.classList == 'modal-over') {
        document.querySelector('div.modal-over').remove()
    }
})


function moreInfo() {

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let idfilm = JSON.parse(xhr.responseText);
            console.log(idfilm);
            if (idfilm.Response == "False") {
                outError.style.display = "block";
            } else {
                let b = '';
                // console.log(film)
                if (idfilm.Poster == "N/A") {
                    idfilm.Poster = "./img/unknown.jpg"
                }
                b += `
                <div class="modal-over">
                    <div class="modal">
                        <div class="modal-iner">
                            <h2>${idfilm.Title}</h2>
                            <h3><span>Imdb:</span> ${idfilm.imdbRating}</h3>
                            <h3><span>Reliased:</span> ${idfilm.Released}</h3>
                            <p><span>Plot:</span> ${idfilm.Plot}</p>
                            <h3><span>Production by:</span> ${idfilm.Production}</h3>
                            <button id="modal-close">Close</button>
                        </div>
                    </div>
                </div>
                         `;

                out.innerHTML += b;
            }
        }
    }
    xhr.open('GET', 'https://www.omdbapi.com/?apikey=d7790324&i=' + event.target.dataset.id);
    console.log(event.target.dataset.id)
    xhr.send(null);
}

function nextPage() {

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let films = JSON.parse(xhr.responseText);
            // console.log(films);
            if (films.Response == "False") {
                outError.style.display = "block";
                nextpage.style.display = "none";
            } else {
                let b = '';
                films.Search.forEach((film) => {

                    // console.log(film)
                    if (film.Poster == "N/A") {
                        film.Poster = "./img/unknown.jpg"
                    }
                    b += `
                        <div class="cardfilm">
                            <h2>${film.Title}</h2>
                            <img class="targetimg" src="${film.Poster}" data-id="${film.imdbID}">
                            <h4> Type: ${film.Type}, ${film.Year}</h4>
                        </div>
                         `;
                })
                out.innerHTML += b;

            }
        }
    }
    xhr.open('GET', 'https://www.omdbapi.com/?apikey=d7790324&s=' + seaRch.value + `&page=` + count);
    xhr.send(null);
}

function getFilms() {
    nextpage.style.display = "block";
    outError.style.display = "none";
    out.innerHTML = '';
    count = 2;
    let xhr = new XMLHttpRequest();


    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let films = JSON.parse(xhr.responseText);
            // console.log(films);
            if (films.Response == "False") {
                outError.style.display = "block";
                nextpage.style.display = "none";
            } else {
                let b = '';
                films.Search.forEach((film) => {
                    // console.log(film)
                    b += `
                        <div class="cardfilm">
                            <h2>${film.Title}</h2>
                            <img class="targetimg" src="${film.Poster}" data-id="${film.imdbID}" >
                            <h4> Type: ${film.Type}, ${film.Year}</h4>
                        </div>
                         `;

                })
                out.innerHTML = b;

            }
        }
    }
    xhr.open('GET', 'https://www.omdbapi.com/?apikey=d7790324&s=' + seaRch.value, true);
    xhr.send(null);
}