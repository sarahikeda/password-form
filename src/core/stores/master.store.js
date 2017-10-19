import {action, observable } from 'mobx';

import { loginStore } from './login.store';
import { appStore } from './app.store';

class MasterStore {

    constructor() {
        this.appStore = appStore;
        this.loginStore = loginStore;
    }
}

export const masterStore = new MasterStore();