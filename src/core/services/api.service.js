import axios from 'axios';

class ApiService {

	//Axios
	getReviewStatus=()=>{
		return axios.get("review-status.json");
	}
}

export const apiService = new ApiService();
