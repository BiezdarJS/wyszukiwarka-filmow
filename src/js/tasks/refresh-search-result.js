import { addSpinner, removeSpinner } from '../utils/spinner';
import { createSearchResultList } from './create-search-result-list';

export function refreshSearchResult(event, dbQuery) {

    let currentTarget = event.currentTarget;
    // znika sekcja best-match (jeśli istnieje)
    const dbItemFull = document.querySelector('.db-item-full');
    if (dbItemFull) {
        dbItemFull.remove();
    }
    // usuwam obecną listę filmów
    const dbListOld = document.querySelector('.db-search-result-list');
    if (dbListOld) {
        dbListOld.remove();
    }
    // spinner
    addSpinner(currentTarget);
    // debugger;
    setTimeout(function() {
        removeSpinner();
        createSearchResultList(dbQuery);
    },250);
}