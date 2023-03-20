import { refreshSearchResult } from '../tasks/refresh-search-result';
import { collectDataFromAllFilters } from '../tasks/collect-data-from-all-filters';



export function selectEventHandler(event) {
    let dbQuery = collectDataFromAllFilters();
    if (dbQuery !== '') {
        refreshSearchResult(event, dbQuery);
    }
}


// Input
const selectElement = document.querySelector('.select-items');
selectElement.addEventListener('click', selectEventHandler);





