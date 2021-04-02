import {getters as diaryLogsGetters} from '../module/diaryLogs';
import {getters as goalsGetters} from '../module/goals';


describe('GoalsGetters', () => {
    test('ReturnAllGoals', () => {
        const goals = [
            {id: 1, title:'TestingStuff', description: 'and trying my best', completed: false, userId:2},
            {id: 2, title:'TestingStuff2', description: 'and trying my best2', completed: false, userId:2}
        ];
        const state = {goals}        
        const actual = goalsGetters.allGoals(state);
        expect(actual).toEqual(goals);
        expect(actual).toHaveLength(2);

    });
});

describe('DiaryLogsGetters', () => {
    test('ReturnAllDiaryLogs', () => {
        const diaryLogs = [{id: 1, type: 'Testing', description: 'Is testing that necessary?', dateTime: '2020/11/16', userId:2}]
        const state = {diaryLogs};
        const actual = diaryLogsGetters.allDiaryLogs(state);
        expect(actual).toEqual(diaryLogs);
        expect(actual).toHaveLength(1);
    })
})