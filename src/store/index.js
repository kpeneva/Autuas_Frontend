import Vue from 'vue';
import Vuex from 'vuex';

import { alert } from './alert.module';
import { account } from './account.module';
import { users } from './users.module';
import  {goals}  from './module/goals'; 
import {diaryLogs} from './module/diaryLogs';
import {statistics} from './module/statistics';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        alert,
        account,
        users,
        goals,
        diaryLogs,
        statistics
    }
});
