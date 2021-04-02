import { Selector } from 'testcafe'

fixture(`Goals Page`)
.page('http://localhost:8080/goals')

test('Goals page title exists', async t => {
    const goalsTitleExists = new Selector('h2').exists;
    await t.typeText('#username', 'test')
    .typeText('#password','test123')
    .click('#submit-button')
    .wait(500)
    .navigateTo('http://localhost:8080/goals')
    await t.expect(goalsTitleExists).ok();
});

test('Goals Form exists', async t => {
    const goalsFormExists = new Selector('.goalsForm').exists;
    await t.typeText('#username', 'test')
    .typeText('#password','test123')
    .click('#submit-button')
    .wait(500)
    .navigateTo('http://localhost:8080/goals')
    .expect(goalsFormExists).ok();
});
test('Add new goal', async t => {
    await t.typeText('#username', 'test')
    .typeText('#password','test123')
    .click('#submit-button')
    .wait(500)
    .navigateTo('http://localhost:8080/goals')
    .typeText('#newGoal-title','Create e2e test')
    .typeText('#description','Create all e2e test for this application today')
    .click('#addGoalButton')
    .wait(500)
});