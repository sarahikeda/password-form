import axios from 'axios';

class ApiService {

	//Axios
	getReviewStatus=()=>{
		return axios.get("review-status.json");
	}

	getLoginInfo=()=>{
		return axios.get("review-status.json");
	}
	signIn=()=>{
		
	}
}

export const apiService = new ApiService();
