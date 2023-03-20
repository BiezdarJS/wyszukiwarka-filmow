import { debounce } from '../utils/debounce.js';
import { refreshSearchResult } from '../tasks/refresh-search-result';
import { collectDataFromAllFilters } from '../tasks/collect-data-from-all-filters';






// Funckja wykorzystująca opóźnienie
let searchInputEventHandler = debounce(function(event) {
    let dbQuery = collectDataFromAllFilters();
    if (dbQuery !== '') {
        refreshSearchResult(event, dbQuery);
    }
}, 500);


// Input
const searchInput = document.querySelector('.searchbox-input');
searchInput.addEventListener('keyup', searchInputEventHandler);


