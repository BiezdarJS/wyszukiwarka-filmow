import { createFullDbItem } from './tasks/create-full-db-item';
import { createSearchResultList } from './tasks/create-search-result-list';

// Można zrobić funckjonalność aby losowało ID z pośród nowości


createFullDbItem(null,'559969');
createSearchResultList('https://api.themoviedb.org/3/search/movie?api_key=ab6e2de9c741bd7014c4049e043b3172&query=test');