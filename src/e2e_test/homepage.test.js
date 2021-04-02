import { Selector } from 'testcafe'

fixture(`Homepage`)
.page('http://localhost:8080/');

test('Greeting on top of the page exists', async t =>{
    const greeting = new Selector('.greeting').exists;
    await t.typeText('#username', 'test')
    .typeText('#password','test123')
    .click('#submit-button')
    .wait(500)
    .navigateTo('http://localhost:8080/')
    .expect(greeting).ok();
});
test('Selector exists', async t => {
    const select = new Selector('.select').exists;
    await t.typeText('#username', 'test')
    .typeText('#password','test123')
    .click('#submit-button')
    .wait(500)
    .navigateTo('http://localhost:8080/')
    .expect(select).ok();
});