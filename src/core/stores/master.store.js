import {action, observable } from 'mobx';

import AWSStore from './aws.store';
import { appStore } from './app.store';

class MasterStore {

    constructor() {
        this.appStore = appStore;
        this.awsStore = new AWSStore(this);
    }

    @observable currentView = "/";

    @action changeView = (view) => {
        this.currentView = view;
    }
}

export const masterStore = new MasterStore();