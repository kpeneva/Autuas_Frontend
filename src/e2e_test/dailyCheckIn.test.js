import { Selector } from 'testcafe'

fixture(`Daily CheckIn`)
.page('http://localhost:8080/checkIn');

test('Stepper exists', async t => {
    const stepperExists = new Selector('.stepper').exists;
    await t.typeText('#username', 'test')
    .typeText('#password','test123')
    .click('#submit-button')
    .wait(500)
    .navigateTo('http://localhost:8080/checkIn')
    .expect(stepperExists).ok();
});
test('Main Content -> Feelings table exists', async t => {
    const mainContentExists = new Selector('.main-content').exists;
    await t.typeText('#username', 'test')
    .typeText('#password','test123')
    .click('#submit-button')
    .wait(500)
    .navigateTo('http://localhost:8080/checkIn')
    .expect(mainContentExists).ok();
});
test('Image content exists', async t => {
    const imageContentExists = new Selector('.icon-container').exists;
    await t.typeText('#username', 'test')
    .typeText('#password','test123')
    .click('#submit-button')
    .wait(500)
    .navigateTo('http://localhost:8080/checkIn')
    .expect(imageContentExists).ok();
});
test('Cancel daily-checkIn -> goes to homepage', async t => {
    const cancelLink = new Selector('#cancelLink');
    await t.typeText('#username', 'test')
    .typeText('#password','test123')
    .click('#submit-button')
    .wait(500)
    .navigateTo('http://localhost:8080/checkIn')
    .click(cancelLink)
    .navigateTo('http://localhost:8080/');
});