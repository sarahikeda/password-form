import axios from 'axios';

class ApiService {

	//Axios
	getReviewStatus=()=>{
		return axios.get("review-status.json");
	}

	getLoginInfo=()=>{
		return axios.get("login-data.json");
	}
}

export const apiService = new ApiService();
