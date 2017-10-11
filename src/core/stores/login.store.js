import { action, computed, observable} from 'mobx';
import { apiService } from '../services/api.service';

class LoginStore {

  // OBSERVABLES

	@observable response = {};
  @observable loginInfo = {userid:'',password:''};
	@observable reviewStatus = '';
  //actions
  @action loadData=()=>{
    let success, failure;
    success = res => {
      this.response = res.data.data;
    };
    failure = (err) => {
			console.log(err);
		};
    apiService.getMetaData().then(success,failure);
  }

  //COMPUTEDS

	@computed get lastElement() {
		return this.names[this.names.length - 1];
	}

	@computed get getAllKeyNames(){
		return Object.keys(this.response);
	}

}

export const loginStore = new LoginStore();
