import { refreshSearchResult } from '../tasks/refresh-search-result';
import { collectDataFromAllFilters } from '../tasks/collect-data-from-all-filters';



function sliderRangeEvent(event) {
    let dbQuery = collectDataFromAllFilters();
    if (dbQuery !== '') {
        refreshSearchResult(event, dbQuery);
    }
}

const sliderRange = document.querySelector('.slider-range');
sliderRange.addEventListener('click', sliderRangeEvent);