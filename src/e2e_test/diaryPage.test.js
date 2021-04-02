import { Selector } from 'testcafe'

fixture(`Reflective Diary`)
.page('http://localhost:8080/diary');

test('Open book background exists', async t => {
    const openBookExists = new Selector('.open-book').exists;
    await t.typeText('#username', 'test')
    .typeText('#password','test123')
    .click('#submit-button')
    .wait(500)
    .navigateTo('http://localhost:8080/diary')
    .expect(openBookExists).ok();
});
test('The headers exist and are correct', async t => {
    const headers = new Selector('header').exists;
    const h1 = new Selector('h1');
    const h6 = new Selector('h6');
    await t.typeText('#username', 'test')
    .typeText('#password','test123')
    .click('#submit-button')
    .wait(500)
    .navigateTo('http://localhost:8080/diary')
    .expect(headers).ok()
    .expect(h1.innerText).eql('EXPRESS YOUR EMOTIONS')
    .expect(h6.innerText).eql('WRITE YOUR THOUGHTS');
});
test('Create a daily reflective log', async t => {
    await t.typeText('#username', 'test')
    .typeText('#password','test123')
    .click('#submit-button')
    .wait(500)
    .navigateTo('http://localhost:8080/diary')
    .click('#start-button')
    .typeText('#diaryLog-textarea','I am good, writing some e2e tests with Testcafe')
    .click('#saveLog-button');
});