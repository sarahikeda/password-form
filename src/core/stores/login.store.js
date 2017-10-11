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

  @action updateUserId=uid=> this.loginInfo.userid=uid

  @action updatePwd=pwd=>this.loginInfo.password=pwd

}

export const loginStore = new LoginStore();
