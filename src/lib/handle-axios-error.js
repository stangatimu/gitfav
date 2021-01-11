const handleAxiosError = (error) => {
	if (error.response) {
		// return error from server
		return error.response.data;
	} else if (error.request) {
		// if no server response return netwrok error
		return "Network error! Server could not be reached";
	} else {
		// return wild card error
		return "Sorry, Something went wrong";
	}
};

export default handleAxiosError;
