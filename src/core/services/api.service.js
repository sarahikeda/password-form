import axios from 'axios';

class ApiService {

	//Axios
	getMetaData() {
		return axios.get("server-data.json"); //FIX ME: local dummy data, for creat-react-app, put in the public folder
	}
}

export const apiService = new ApiService();
