import { Selector } from 'testcafe'

const developerName = Selector('#developer-name');
const osOption = Selector('input#linux')
const submitButton = Selector('#submit-button')

fixture("First Fixture with TestCafe")
    .page("https://devexpress.github.io/testcafe/example/");
    
test("First Selector Test", async t => {
    await t
        .typeText(developerName,'Sebas')
        .click(osOption)
        .click(submitButton);
});