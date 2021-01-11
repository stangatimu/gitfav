import { github } from "../axios";
import handleAxiosError from "../lib/handle-axios-error";
import { getFavoriteRepos } from "../lib/local-storage";

import * as actions from "./action-types";

export const setReposAction = () => {
	return async (dispatch) => {
		try {
			const res = await github.get(
				"/repositories?q=stars:%3E1&sort=stars&per_page=20"
			);
			const repos = res.data;

			dispatch({
				data: repos,
				type: actions.SET_REPOS,
			});
		} catch (e) {
			const error = handleAxiosError(e);
			dispatch({
				data: error,
				type: actions.SET_ERROR,
			});
		}
	};
};

export const setFavsAction = () => {
	return async (dispatch) => {
		const repos = getFavoriteRepos();

		dispatch({
			data: repos,
			type: actions.SET_FAVORITES,
		});
	};
};
