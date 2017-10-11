import { action, computed, observable} from 'mobx';
import { apiService } from '../services/api.service';


class AppStore {

  // OBSERVABLES

	@observable response = {};

	//@observable names = [];

	@observable reviewStatus = {};
  //actions
  @action loadData=()=>{
    let success, failure;
    success = res => {

      this.response = res.data;
			this.reviewStatus = this.response.data;
    };
    failure = (err) => {
			console.log(err);
		};
    apiService.getReviewStatus().then(success,failure);
  }

  //COMPUTEDS

	@computed get getStatus() {
		return this.reviewStatus.status;
	}

}

export const appStore = new AppStore();
