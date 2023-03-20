export function addSpinner(trigger) {
    let spinner = document.createElement('div');
    let spinnerHTML = `<span class="spinner"></span>`;
    spinner.innerHTML = spinnerHTML;

    if (trigger == undefined) {
        spinner.classList.add('spinner-wrap');
        const main = document.querySelector('main');
        main.parentNode.insertBefore(spinner, main);
    }
    if (trigger && trigger.classList.contains('searchbox-input')) {
        spinner.classList.add('spinner-wrap', 'spinner-wrap--sm');
        const searchResult = document.querySelector('.search-result');
        const filimoHeading = searchResult.querySelector('.filimo-heading-container');
        filimoHeading.parentNode.insertBefore(spinner,filimoHeading.nextSibling);
    }
    if (trigger && trigger.classList.contains('filimo-checkbox')) {
        spinner.classList.add('spinner-wrap', 'spinner-wrap--sm');
        const searchResult = document.querySelector('.search-result');
        const filimoHeading = searchResult.querySelector('.filimo-heading-container');
        filimoHeading.parentNode.insertBefore(spinner,filimoHeading.nextSibling);
    }
    if (trigger && trigger.classList.contains('select-items')) {
        spinner.classList.add('spinner-wrap', 'spinner-wrap--sm');
        const searchResult = document.querySelector('.search-result');
        const filimoHeading = searchResult.querySelector('.filimo-heading-container');
        filimoHeading.parentNode.insertBefore(spinner,filimoHeading.nextSibling);
    }
    if (trigger && trigger.classList.contains('slider-range')) {
        spinner.classList.add('spinner-wrap', 'spinner-wrap--sm');
        const searchResult = document.querySelector('.search-result');
        const filimoHeading = searchResult.querySelector('.filimo-heading-container');
        filimoHeading.parentNode.insertBefore(spinner,filimoHeading.nextSibling);
    }
    if (trigger && trigger.classList.contains('db-search-result-list__item')) {
        spinner.classList.add('spinner-wrap');
        const main = document.querySelector('main');
        main.parentNode.insertBefore(spinner, main);
    }
}

export function removeSpinner() {
    let spinner = document.querySelector('.spinner-wrap');
    spinner.remove();
}