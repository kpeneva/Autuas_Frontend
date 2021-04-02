import {actions as userActions} from '../users.module';
import {actions as accountActions} from '../account.module';
import {actions as goalsActions} from '../module/goals';

//ACTIONS FROM USERS MODULE IN STORE -> START
describe('UserActions', () => {
    test('getAll', () => {
        const commit = jest.fn();
        userActions.getAll({commit});
        expect(commit).toHaveBeenCalledWith('GET_ALL_REQUEST');
    });
});
//ACTIONS FROM USERS MODULE IN STORE -> END

//ACTIONS FROM ACCOUNT MODULE IN STORE -> START
describe('AccountActions', () => {

    test('login', () => {
        const commit = jest.fn();
        const dispatch = jest.fn();
        const username = "test";
        const password = "123";
        accountActions.login({dispatch,commit}, {username,password});
        expect(commit).toHaveBeenCalledWith('LOGIN_REQUEST',{username});
    });

    // test('logout', () => {
    //     const commit = jest.fn();
    //     accountActions.logout({commit});
    //     expect(commit).toHaveBeenCalledWith();
    // });

    test('register', () => {
        const commit = jest.fn();
        const dispatch = jest.fn();
        const user = {};
        accountActions.register({dispatch,commit}, user);
        expect(commit).toHaveBeenCalledWith('REGISTER_REQUEST',user);
    });
});
//ACTIONS IN ACCOUNT MODULE IN STORE -> END

//ACTIONS IN GOAL MODULE IN STORE -> START
    // describe('GoalsActions', () => {
    //     test('getAllGoals', () => {
    //         const commit = jest.fn();
    //         goalsActions.getAllGoals({commit});
    //         expect(commit).toHaveBeenCalledWith('GET_GOALS');
    //     });
    // })
