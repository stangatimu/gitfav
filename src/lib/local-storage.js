export function getFavoriteRepos() {
	let repos = [];
	if (global.localStorage) {
		try {
			repos = JSON.parse(global.localStorage.getItem("repos")) || [];
		} catch (e) {
			/* ignore */
		}
	}
	return repos || [];
}

export function setFavoriteRepos(repos) {
	if (global.localStorage) {
		global.localStorage.setItem("repos", JSON.stringify(repos));
	}
}
