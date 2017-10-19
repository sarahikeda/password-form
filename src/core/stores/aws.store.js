import AWS from 'aws-sdk';
import { action, observable, computed } from 'mobx';
import { apiService } from '../services/api.service';
import { awsService } from '../services/aws.service';

export default class AWSStore {

  constructor(master) {
    this.master = master;
  }

  // OBSERVABLES

  @observable isAuthenticated = false;
  @observable loginInfo = { userid: 'AKIAJXDYXM4XSJOYS3VQ', password: 'ndMwZwS/e9VNWCfCYfwtap9hHpHqe7TJ1QjeaUmE' };
  @observable reviewStatus = '';
  @observable errorLogin = '';
  @observable credentialResponse = {};
  @observable currentFile = null;

  @observable remoteFiles = [];

  //actions
  @action updateUserId = uid => this.loginInfo.userid = uid

  @action updatePwd = pwd => this.loginInfo.password = pwd

  @action login = (key, secret) => {
    awsService.updateLogin(key, secret);

    awsService.getFiles().then(data => {
      if (data) {
        this.remoteFiles = data.Contents
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
    })
  }

  @action getFile = (file) => {
    awsService.getFile(file)
      .then(data => {
        this.currentFile = data;
        this.master.changeView('/app-details');
      })
  }
}