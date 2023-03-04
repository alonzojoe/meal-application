import api from '../api';
export function searchMeals({ commit }, keyword) {
    api.get(`search.php?s=${keyword}`)
    .then(({data}) => {
        debugger;
        commit('setSearchMeals', data)
    })
}