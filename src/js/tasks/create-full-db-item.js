import { addSpinner } from '../utils/spinner';
import { removeSpinner } from '../utils/spinner';

export function createFullDbItem(trigger,id) {
    // Move to the top of the page
    window.location.href = '#header';
    // make spinner 
    addSpinner(trigger);
    // Fetch action
    const singleDbItem$ = fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ab6e2de9c741bd7014c4049e043b3172&language=en-US&append_to_response=videos,images`)
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json()
    })
    .then(post => {
        const searchFilters = document.querySelector('.search-filters');
        let dbItemFull = document.createElement('section');
        dbItemFull.setAttribute('id', 'db-item-full-info');
        dbItemFull.classList.add('db-item-full');
        let dbItemFullAfter = document.createElement('div');
        dbItemFullAfter.style.cssText = `
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            height: calc(100% + 65px);
            background-image: url('https://image.tmdb.org/t/p/w500${post.poster_path}');
            background-size: cover;
            background-position: center center;
            filter: blur(24px) brightness(0.7);
            transform: scale(1.1);
        `;
        // console.log(post);
        // data
        let itemProductionCountries = post.production_countries;
        let itemGenres = post.genres;

        let itemOverview = post.overview;
        const imdbLogo = `http://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg`;
        let dbItemFullInnerHTML = `
            <section class="db-item-full-intro">
                <div class="container flex">
                    <div class="db-item-full-intro__left">
                        <img class="db-item-full-intro__img" src="https://image.tmdb.org/t/p/w500${post.poster_path}" alt="best-match Poster">
                    </div>
                    <div class="db-item-full-intro__right color-white">
                        <h3 class="db-item-full-intro__title">
                            ${post.original_title}
                        </h3>
                        <p class="db-item-full-intro__type">
                            Movie
                        </p>
                        <div class="db-item-full-intro__rating imdb-rating">
                            <p class="rating__number">${post.vote_average}</p>
                            <ul class="rating-stars">
                                <li class="rating-stars__item rating-stars__item--full">
                                </li>
                                <li class="rating-stars__item rating-stars__item--full">
                                </li>
                                <li class="rating-stars__item rating-stars__item--full">
                                </li>
                                <li class="rating-stars__item rating-stars__item--full">
                                </li>
                                <li class="rating-stars__item rating-stars__item--three-quaters">
                                </li>
                            </ul>
                            <div class="imdb-rating-numbers">
                                <p class="imdb-rating-numbers__txt">
                                    ${post.vote_average}/10
                                </p>
                                <img class="imdb-logo" src="${imdbLogo}" alt="">
                            </div>
                        </div>
                        <div class="db-item-full-intro__time-country">
                            <time>
                                ${post.runtime} minutes
                            </time>
                            <span>- USA </span>
                        </div>
                        <ul class="tags">
                        ${itemGenres.map(item => {
                            return "<li class='tags__item'>" + item.name + "</li>"           
                        }).join("")}
                        </ul>
                        <p class="db-item-full-intro__descr">
                            ${post.overview}
                        </p>
                    </div>
                </div>
            </section>
            <section class="db-item-full-action">
                <div class="container flex">
                    <div class="db-item-full-action__left">
                        <a href="#" class="action-btn action-btn--yellow action-btn--border-right">
                            <span>
                                Trailer
                                <img src="./assets/img/icon-play.dbdd86.svg" alt="">
                            </span>
                        </a>
                        <span class="action-btn-border-right"></span>
                        <a href="#" class="action-btn action-btn--brown action-btn-popup-js">
                            <span>
                                Więcej informacji
                                <img src="./assets/img/icon-bookmark.530460.svg" alt="">
                            </span>
                        </a>
                    </div>
                    <div class="db-item-full-action__right">
                        <a href="#" class="action-btn action-btn--brown ">
                            Your Rate
                            <ul class="rating-stars">
                                <li class="rating-stars__item">
                                    <svg class="rating-stars__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.03 15.33">
                                        <path id="star_1_" data-name="star (1)" d="M8.792,1.528,10.6,5.193a.863.863,0,0,0,.65.472l4.044.588a.863.863,0,0,1,.479,1.473l-2.926,2.852a.864.864,0,0,0-.248.764l.691,4.028a.864.864,0,0,1-1.253.91l-3.617-1.9a.864.864,0,0,0-.8,0L4,16.28a.864.864,0,0,1-1.253-.91l.691-4.028a.864.864,0,0,0-.248-.764L.262,7.725A.863.863,0,0,1,.741,6.253l4.044-.588a.863.863,0,0,0,.65-.472L7.244,1.528A.863.863,0,0,1,8.792,1.528Z" transform="translate(-0.001 -1.047)" fill="#464237" stroke="#fcc537">
                                        </path>
                                    </svg>
                                </li>
                                <li class="rating-stars__item">
                                    <svg class="rating-stars__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.03 15.33">
                                        <path id="star_1_" data-name="star (1)" d="M8.792,1.528,10.6,5.193a.863.863,0,0,0,.65.472l4.044.588a.863.863,0,0,1,.479,1.473l-2.926,2.852a.864.864,0,0,0-.248.764l.691,4.028a.864.864,0,0,1-1.253.91l-3.617-1.9a.864.864,0,0,0-.8,0L4,16.28a.864.864,0,0,1-1.253-.91l.691-4.028a.864.864,0,0,0-.248-.764L.262,7.725A.863.863,0,0,1,.741,6.253l4.044-.588a.863.863,0,0,0,.65-.472L7.244,1.528A.863.863,0,0,1,8.792,1.528Z" transform="translate(-0.001 -1.047)" fill="#464237" stroke="#fcc537">
                                        </path>
                                    </svg>
                                </li>
                                <li class="rating-stars__item">
                                    <svg class="rating-stars__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.03 15.33">
                                        <path id="star_1_" data-name="star (1)" d="M8.792,1.528,10.6,5.193a.863.863,0,0,0,.65.472l4.044.588a.863.863,0,0,1,.479,1.473l-2.926,2.852a.864.864,0,0,0-.248.764l.691,4.028a.864.864,0,0,1-1.253.91l-3.617-1.9a.864.864,0,0,0-.8,0L4,16.28a.864.864,0,0,1-1.253-.91l.691-4.028a.864.864,0,0,0-.248-.764L.262,7.725A.863.863,0,0,1,.741,6.253l4.044-.588a.863.863,0,0,0,.65-.472L7.244,1.528A.863.863,0,0,1,8.792,1.528Z" transform="translate(-0.001 -1.047)" fill="#464237" stroke="#fcc537">
                                        </path>
                                    </svg>
                                </li>
                                <li class="rating-stars__item">
                                    <svg class="rating-stars__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.03 15.33">
                                        <path id="star_1_" data-name="star (1)" d="M8.792,1.528,10.6,5.193a.863.863,0,0,0,.65.472l4.044.588a.863.863,0,0,1,.479,1.473l-2.926,2.852a.864.864,0,0,0-.248.764l.691,4.028a.864.864,0,0,1-1.253.91l-3.617-1.9a.864.864,0,0,0-.8,0L4,16.28a.864.864,0,0,1-1.253-.91l.691-4.028a.864.864,0,0,0-.248-.764L.262,7.725A.863.863,0,0,1,.741,6.253l4.044-.588a.863.863,0,0,0,.65-.472L7.244,1.528A.863.863,0,0,1,8.792,1.528Z" transform="translate(-0.001 -1.047)" fill="#464237" stroke="#fcc537">
                                        </path>
                                    </svg>
                                </li>
                                <li class="rating-stars__item">
                                    <svg class="rating-stars__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.03 15.33">
                                        <path id="star_1_" data-name="star (1)" d="M8.792,1.528,10.6,5.193a.863.863,0,0,0,.65.472l4.044.588a.863.863,0,0,1,.479,1.473l-2.926,2.852a.864.864,0,0,0-.248.764l.691,4.028a.864.864,0,0,1-1.253.91l-3.617-1.9a.864.864,0,0,0-.8,0L4,16.28a.864.864,0,0,1-1.253-.91l.691-4.028a.864.864,0,0,0-.248-.764L.262,7.725A.863.863,0,0,1,.741,6.253l4.044-.588a.863.863,0,0,0,.65-.472L7.244,1.528A.863.863,0,0,1,8.792,1.528Z" transform="translate(-0.001 -1.047)" fill="#464237" stroke="#fcc537">
                                        </path>
                                    </svg>
                                </li>
                            </ul>
                        </a>
                    </div>
                </div>
            </section>`;
        dbItemFull.innerHTML = dbItemFullInnerHTML;
        setTimeout(function() {
            removeSpinner();
            searchFilters.parentElement.insertBefore(dbItemFull, searchFilters);
            dbItemFull.appendChild(dbItemFullAfter);
        },500);
        console.log(post);
    });
}