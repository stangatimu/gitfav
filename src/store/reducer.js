import * as actions from "./action-types";

const init_state = {
	repos: [],
	favs: [],
	error: "",
};

const reducer = (state = init_state, action) => {
	switch (action.type) {
		// set all repos
		case actions.SET_REPOS:
			return {
				...state,
				repos: action.data,
			};
		// set all favaorites repos
		case actions.SET_FAVORITES:
			return {
				...state,
				favs: action.data,
			};
		case actions.ADD_FAVORITE:
			return {
				...state,
				favs: [action.data, ...state.favs],
			};
		// set fetching repos error
		case actions.SET_ERROR:
			return {
				...state,
				error: action.data,
			};
		default:
			return state;
	}
};

export default reducer;
