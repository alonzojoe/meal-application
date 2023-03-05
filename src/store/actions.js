import api from '../api';

export function searchMeals({ commit }, keyword) {
    api.get(`search.php?s=${keyword}`)
    .then(({data}) => {
        debugger;
        commit('setSearchMeals', data)
    })
}

export function searchMealsByLetter({ commit }, letter) {
    api.get(`search.php?f=${letter}`)
    .then(({data}) => {
        debugger;
        commit('setMealsByLetter', data)
    })
}

export function searchMealsByIngredients({ commit }, ingredient) {
    api.get(`filter.php?i=${ingredient}`)
    .then(({data}) => {
        debugger;
        commit('setMealsByIngredients', data)
    })
}
