import { createFullDbItem } from "../tasks/create-full-db-item";

const searchResultItems = document.querySelectorAll('.db-list__item');

Array.from(searchResultItems).forEach(item => {
    item.addEventListener('click', searchResultItemClickHandler);
});


export function searchResultItemClickHandler(event) {
    event.stopPropagation();
    event.preventDefault();
    let currentTarget = event.currentTarget;
    let id = event.currentTarget.dataset.id;
    let dbItemFull = document.querySelector('.db-item-full');
    if (dbItemFull) {
        dbItemFull.remove();
    }
    createFullDbItem(currentTarget,id);
}