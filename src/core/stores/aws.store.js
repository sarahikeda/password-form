import moment from 'moment';
import { action, observable } from 'mobx';
import { awsService } from '../services/aws.service';
import { deepCopy, getCurrentFolder, bufferToJson } from '../../utils';


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
  @observable currentMeta = null;

  @observable remoteFiles = [];

  //actions
  @action updateUserId = uid => this.loginInfo.userid = uid

  @action updatePwd = pwd => this.loginInfo.password = pwd

  @action changeRejectReason = reason => this.currentFile.custom_metadata.rejectReason = reason;

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
        this.currentMeta = file;
        this.currentFile = bufferToJson(data.Body);
        console.log(this.currentFile)
        this.master.changeView('/app-details');
      })
  }

  @action changeAppStatus = (status, file = this.currentFile) => {
    //set up new file parameters
    let baseFolder = "partialsave-data-firstnet/";
    let newFile = deepCopy(file);
    let newFileName = file.saveId + "_APP_DATA";
    let statusDateString = status.toLowerCase() + "_date";
    let currentFolder = getCurrentFolder(this.currentMeta);
    console.log(1, currentFolder)
    // make adjustments to the app data
    newFile.custom_metadata.status = status.toUpperCase();
    newFile.custom_metadata[statusDateString] = moment().format("YYYY-MM-DDTHH:mm:ss.SSS");
    // in case someone put in a reject reason in the current session, or somehow got a reject reason in there, but we aren't currenty rejecting it, make sure it doesn't have a reject reason.
    if(status.toUpperCase() !== "REJECTED") {
      newFile.custom_metadata.rejectReason = "";
    }

    // upload new file
    awsService.uploadFile(newFile, newFileName, baseFolder + status.toLowerCase())
      .then(data => {
        // swap the local file to show approved and the approved date to match the remote file.
        this.currentFile = newFile;
        // if upload successful, delete the old file.
        console.log(2, currentFolder)
        return awsService.deleteFile(newFileName, baseFolder + currentFolder)
      })
      .then(data => {
        console.log("uploaded and deleted", data);
      })
      .catch(err => {
        console.log(err);
      })
  }
}