import { Selector } from 'testcafe'

fixture(`My profile`)
.page('http://localhost:8080/profile');

test('Accont Card exists and Account Title is correct', async t => {
    const accountCard = new Selector('.account-info').exists;
    const accountTitle = new Selector('.black--text');
    await t.typeText('#username', 'test')
    .typeText('#password','test123')
    .click('#submit-button')
    .wait(500)
    .navigateTo('http://localhost:8080/profile')
    .expect(accountCard).ok()
    .expect(accountTitle.innerText).eql('Account Information');
});
test('Show Change Password fields', async t =>{
    const changePass = new Selector('#passwordChange');
    const hiddenField = new Selector('#span').exists;
    await t.typeText('#username', 'test')
    .typeText('#password','test123')
    .click('#submit-button')
    .wait(500)
    .navigateTo('http://localhost:8080/profile')
    .click(changePass)
    .expect(hiddenField).ok();
});
