import { searchResultItemClickHandler } from '../event-handlers/search-result-item-click-handler.js';

export function createSearchResultList(dbQuery) {
    const dbList = document.createElement('ul');
    dbList.classList.add('db-search-result-list', 'flex');
    const dbSearchResultContainer = document.querySelector('.db-search-result > .container');
    const dbQuery$ = fetch(dbQuery)
    .then(response => response.json())
    // Iteruję po każdym elementcie Tablicy 
    .then(posts => {
        let myPosts = posts.results;
        myPosts.forEach(post => {
            const imdbLogo = `http://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg`;
            let posterPath = post.poster_path ? 'https://image.tmdb.org/t/p/w500'+post.poster_path : 'http://dummyimage.com/300/000/0011ff.png&text=Brak+Zdj%C4%99cia';
            let releaseDate = post.release_date ? post.release_date.split('-')[0] : 'Brak daty';
            let voteAverate = post.vote_average;
            let id = post.id;
            let newLi = document.createElement('li');
            newLi.classList.add('db-search-result-list__item');
            newLi.setAttribute('data-id', id);
            let newLiInnerHTML = `<a class="db-search-result-list__link" href=""> <div class="db-search-result-list__imgwrap"><img class="db-search-result-list__img" 
            src="${posterPath}" alt="""> <span class=" db-search-result-list__more"></span> </div><h3 class=" 
            db-search-result-list__title"> ${post.original_title}</h3> <div class="db-search-result-list__misc"> <span class="db-search-result-list__year"> ${releaseDate} </span> , 
            <span class="db-search-result-list__type"> Film </span> </div> <div class="imdb-rating-numbers imdb-rating-numbers--db"> 
            <p class="imdb-rating-numbers__txt"> ${voteAverate}/10 </p> <img class="imdb-logo" src="${imdbLogo}" alt="IMDB Logo"> </div></a>`;
            newLi.innerHTML = newLiInnerHTML;
            // Dodajemy Click Event Listener
            newLi.addEventListener('click', searchResultItemClickHandler);
            dbList.appendChild(newLi);
            dbSearchResultContainer.appendChild(dbList);
        });
        // console.log(posts);
    });
}