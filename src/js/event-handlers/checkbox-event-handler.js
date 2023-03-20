import { refreshSearchResult } from '../tasks/refresh-search-result';
import { collectDataFromAllFilters } from '../tasks/collect-data-from-all-filters';


function onCheckboxChange(event) {
    // console.log(event.currentTarget);
    let checboxItems = document.querySelectorAll('.filimo-checkbox');
    let currentTarget = event.currentTarget;
    // pobieram wartość zaznaczonego elementu
    if (currentTarget.checked) {
        Array.from(checboxItems).forEach(function(item) {
            item.checked = false;
        });
        currentTarget.checked = true;

        let dbQuery = collectDataFromAllFilters();
        if (dbQuery !== '') {
            refreshSearchResult(event, dbQuery);
        }
    };
}

let checboxItems = document.querySelectorAll('.filimo-checkbox');

Array.from(checboxItems).forEach(function(item) {
    item.addEventListener('change', onCheckboxChange);
});

