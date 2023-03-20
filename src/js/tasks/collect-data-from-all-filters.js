import { HOST, SEARCH_TYPE, API_KEY } from '../base.js';

export function collectDataFromAllFilters() {


    // checkbox
    let tvOrMovie = document.querySelector('.filimo-checkbox:checked');
    let tvAndMoviesValue = tvOrMovie.name;
    console.log(tvAndMoviesValue);

    // select 
    const select = document.querySelector('#my-select');
    let selectedIndex = select.selectedIndex;
    let selectOptionValue = (select.options[selectedIndex].value != 0) ? select.options[selectedIndex].value : '';
    let selectValue = '&with_genres=' + selectOptionValue;

    // Input
    const searchInput = document.querySelector('.searchbox-input');
    let searchInputValue = '&with_text_query=' + searchInput.value.replaceAll(' ', '+');
    let sortByRelevance = '&sort_by=relevance';


    // range Slider 
    let leftHandle = document.querySelector('.ui-slider-handle:nth-of-type(1)').getAttribute('data-content');
    let rightHandle = document.querySelector('.ui-slider-handle:nth-of-type(2)').getAttribute('data-content');
    let fromOneDateToAnother = `&primary_release_date.gte=${leftHandle}-01-01&primary_release_date.lte=${rightHandle}-12-01`;

    let dbQuery = HOST + SEARCH_TYPE[0] + tvAndMoviesValue + API_KEY + selectValue + searchInputValue + sortByRelevance + fromOneDateToAnother;

    return dbQuery;
    // console.log(dbQuery);

}