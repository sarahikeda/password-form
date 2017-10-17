import { action, observable, computed} from 'mobx';
import { apiService } from '../services/api.service';

class LoginStore {

  // OBSERVABLES

  @observable loginInfo = {userid:'',password:''};
	@observable reviewStatus = '';
  @observable errorLogin ='';
  @observable credentialResponse = {};
  //actions
  @action updateUserId=uid=> this.loginInfo.userid=uid

  @action updatePwd=pwd=>this.loginInfo.password=pwd

  @action login=(uid,pwd)=>{
    let success, failure;
    success = res => {
       this.credentialResponse = res.data.login;
       console.log(1, this.credentialResponse);
       this.errorLogin = (uid !== res.data.login.userid || pwd!==res.data.login.password) ?
       'The username or password you enetered is incorrect.' : '';
    };
    failure = (err) => {
			console.log(err);
		};
    apiService.getLoginInfo().then(success,failure);
  }


  @computed get validLogin(){
    //console.log(this.loginSucceeded);
  }

}

export const loginStore = new LoginStore();
