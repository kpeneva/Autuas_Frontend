import {Selector} from 'testcafe';

fixture (`LoginPage`)
.page ('http://localhost:8080/login');

test('Login Title is visible on the page', async t =>{
    const cardTitle = new Selector('.title');
    await t.expect(cardTitle.innerText).eql('Log in');
});
test('Login Card exists', async t => {
    const loginCardExists = new Selector('.loginCard').exists;
    await t.expect(loginCardExists).ok();
});
test('Go to sign up', async t => {
    const signUpButton = new Selector('.toRegister').find('a');
    await t.click(signUpButton)
            .navigateTo('http://localhost:8080/register');
});
test('Login', async t => {
    await t.typeText('#username', 'test')
            .typeText('#password','test123')
            .click('#submit-button')
            .wait(5000)
            .navigateTo('http://localhost:8080/checkin');
});




