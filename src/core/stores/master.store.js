import {action, observable } from 'mobx';

import { loginStore } from './login.store';
import { appStore } from './app.store';

class MasterStore {

    constructor() {
        this.appStore = appStore;
        this.loginStore = loginStore;
    }

    @action goTo = (view) => {
        if( this.isAuthenticated ) {
            this.currentView = view;
        } else {
            this.currentView = "login"
        }
    }

    @observable currentView = "AuthRouter";
}

export const masterStore = new MasterStore();