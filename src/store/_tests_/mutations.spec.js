
import {mutations} from '../account.module.js';
import {mutations as usermutations}  from '../users.module.js';
import {mutations as goalsMutations} from '../module/goals';
import {mutations as diaryMutations} from '../module/diaryLogs';



// MUTATIONS FROM ACCOUNT MODULE IN STORE -> START
describe('mutations in account.module', () => {
    const user = {userId: 1, name: "Test Subject 1", username:"test1", email:"test@test.com",password:"testing"}
    const error = 'Something went wrong'
    const state = user 
        ? { status: { loggedIn: true }, user }
        : { status: {}, user: null };
    test('LoginRequest', () => {
          mutations.LOGIN_REQUEST(state,user) 
          expect(state.status).toStrictEqual({loggingIn:true})
          expect(state.user).toBe(user)
    });
    test('LoginSuccess',() => {
       mutations.LOGIN_SUCCESS(state,user)
        expect(state.status).toStrictEqual({loggedIn:true})
        expect(state.user).toBe(user)
    });
    test('LoginFailure', () => {
        mutations.LOGIN_FAILURE(state)
        expect(state.status).toStrictEqual({})
        expect(state.user).toBe(null)
    });
    test('Logout',() => {
        mutations.LOGOUT(state)
        expect(state.status).toStrictEqual({})
        expect(state.user).toBe(null)
    });
    test('RegisterRequest',() => {
        mutations.REGISTER_REQUEST(state, user)
        expect(state.status).toStrictEqual({registering: true})

    });
    test('RegisterSuccess', () => {
        mutations.REGISTER_SUCCESS(state, user)
        expect(state.status).toStrictEqual({})
    });
    test('RegisterFailure', () => {
        mutations.REGISTER_FAILURE(state, error)
        expect(state.status).toStrictEqual({})
    });
});
//MUTATIONS FROM ACCOUNT MODULE IN STORE -> END


//MUTATIONS FROM USER MODULE IN STORE -> START
describe('mutations in users.module', () => {
    const users = JSON.stringify(localStorage);
    const error = 'Something went wrong';
    const state = {
        all: {}
    }
    test('GetAllRequest', () => {
        usermutations.GET_ALL_REQUEST(state)
        expect(state.all).toStrictEqual({loading:true})
    }),
    test('GetAllSuccess', () => {
        usermutations.GET_ALL_SUCCESS(state, users)
        expect(state.all).toStrictEqual({items: users})
    }),
    test('GetAllRequestFailure', () => {
        usermutations.GET_ALL_FAILURE(state,error)
        expect(state.all).toStrictEqual({error})
    })
});
//MUTATIONS FROM USER MODULE IN STORE -> END

//MUTATIONS FROM GOALS MODULE IN STORE -> START
describe('mutations in goals.module', () => {

    test('GetGoals',() => {  
        const state = { goals: [] };
        const goals = [{id: 1, title:'TestingStuff', description: 'and trying my best', completed: false, userId:2}];
        goalsMutations.GET_GOALS(state, goals);
        expect(state.goals).toEqual(goals);
        expect(state.goals).toHaveLength(1);
        expect(state.goals).toContain(goals[0]);
    });
    test('AddGoal',() => {
        const state = { goals: [] };
        goalsMutations.ADD_GOAL(state, {id: 1, title:'TestingStuff', description: 'and trying my best', completed: false, userId:2})
        expect(state.goals.length).toBe(1);
        expect(state.goals[0].id).toBe(1);
        expect(state.goals[0].title).toStrictEqual('TestingStuff');
        expect(state.goals[0].completed).toEqual(false);
    });
    test('UpdateGoal', () => {
        const state = { goals: [{ id: 1, title:'TestingStuff', description: 'and trying my best', completed: false, userId:2}] };
        const updateGoal = {id: 1, title:'TestingStuff2', description: 'and trying my best', completed: false, userId:2}
        goalsMutations.UPDATE_GOAL(state, updateGoal);
        expect(state.goals[0].title).toStrictEqual('TestingStuff2');
    });
    test('RemoveGoal', () => {
        const state = { goals: [{ id: 1, title:'TestingStuff', description: 'and trying my best', completed: false, userId:2}] };

        goalsMutations.REMOVE_GOAL(state,  1);
        expect(state.goals).toHaveLength(0);
    });
});
//MUTATIONS FROM GOALS MODULE IN STORE -> END

//MUTATIONS FROM DIARYLOG MODULE IN STORE -> START
describe('mutations in diaryLog.module', () => {

    test('GetDiaryLogs', () => {
        const state = { diaryLogs: [] };
        const diaryLogs = [{id: 1, type: 'Testing', description: 'Is testing that necessary?', dateTime: '2020/11/16', userId:2}]
        diaryMutations.GET_DIARYLOGS(state, diaryLogs);
        expect(state.diaryLogs).toEqual(diaryLogs);
        expect(state.diaryLogs).toHaveLength(1);
        expect(state.diaryLogs).toContain(diaryLogs[0]);
    });
     test('GetDiaryLogsById', () => {
        const state = { diaryLogs: [ {id: 1, type: 'Testing', description: 'Is testing that necessary?', dateTime: '2020/11/16', userId:2},
        {id: 2, type: 'Testing2', description: 'Is testing that necessary or vital?', dateTime: '2020/11/16', userId:2} ]};
        diaryMutations.GET_DIARYLOGS_BY_ID(state, 2);
        expect(state.diaryLogs).toHaveLength(1);
        expect(state.diaryLogs[0].type).toStrictEqual('Testing2');
        expect(state.diaryLogs[0].id).toBe(2);
     });
     test('GetDiaryLogsByUserId', () => {
        const state = { diaryLogs: [ {id: 1, type: 'Testing', description: 'Is testing that necessary?', dateTime: '2020/11/16', userId:2},
        {id: 2, type: 'Testing2', description: 'Is testing that necessary or vital?', dateTime: '2020/11/16', userId:3} ]};
        diaryMutations.GET_DIARYLOGS_BY_USERID(state, 3);
        expect(state.diaryLogs).toHaveLength(1);
        expect(state.diaryLogs[0].id).toBe(2);
        expect(state.diaryLogs[0].type).toStrictEqual('Testing2');
        expect(state.diaryLogs[0].userId).toBe(3);
     });
     test('AddDiaryLog', () => {
        const state = { diaryLogs: [] };
        diaryMutations.ADD_DIARYLOG(state, {id: 1, type: 'Testing', description: 'Is testing that necessary?', dateTime: '2020/11/16', userId:2});
        expect(state.diaryLogs).toHaveLength(1);
        expect(state.diaryLogs[0].id).toBe(1);
        expect(state.diaryLogs[0].type).toStrictEqual('Testing');
        expect(state.diaryLogs[0].userId).toBe(2);
     });
     test('UpdateDiaryLog',() => {
        const state = { diaryLogs: [ {id: 1, type: 'Testing', description: 'Is testing that necessary?', dateTime: '2020/11/16', userId:2}]};
        const updateDiaryLog = {id: 1, type: 'Testing123', description: 'Is testing that necessary?', dateTime: '2020/11/16', userId:2};
        diaryMutations.UPDATE_DIARYLOG(state,updateDiaryLog);
        expect(state.diaryLogs[0].type).toStrictEqual('Testing123');
     });
     test('RemoveDiaryLog',() => {
        const state = { diaryLogs: [ {id: 1, type: 'Testing', description: 'Is testing that necessary?', dateTime: '2020/11/16', userId:2}]};
        diaryMutations.REMOVE_DIARYLOG(state, 1);
        expect(state.diaryLogs).toHaveLength(0);
     });
});
//  MUTATIONS FROM DIARYLOG MODULE IN STORE -> END