import { Selector } from 'testcafe'

fixture(`Register Page`)
.page('http://localhost:8080/register');

test('Register Title is visible on the page', async t => {
    const registerCardTitle = new Selector('.title');
    await t.expect(registerCardTitle.innerText).eql('Create an account');
});

test('Register Card exists', async t => {
    const registerCardExists = new Selector('.registerCard').exists;
    await t.expect(registerCardExists).ok();
});
test('Cancel register -> go back to login', async t => {
    const cancelButtonLink = new Selector('#cancelLink');
    await t.click(cancelButtonLink)
    .navigateTo('http://localhost:8080/login');
});
test('Register', async t => {
    await t.typeText('#name','E2E Test')
    .typeText('#username', 'e2e_test')
    .typeText('#email','e2etest@test.com')
    .typeText('#password','e2etest')
    .click('#submit-button')
    .wait(5000)
    .navigateTo('http://localhost:8080/login');
});