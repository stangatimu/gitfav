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

export function addFavoriteRepos(repo) {
	if (global.localStorage) {
		// get existing repos
		const repos = getFavoriteRepos();
		// combine and save to local storage
		global.localStorage.setItem("repos", JSON.stringify([repo, ...repos]));
	}
}
