import {Selector} from 'testcafe';

const developerName = Selector("#developer-name");
const osOption = Selector("#linux");
const submitButton = Selector("#submit-button");

fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test("Assertion Test", async t => {
    const developernameElement = 
    await developerName.with({visibilityCheck:true})();
    await t
        .setTestSpeed(0.1)
        .expect(developernameElement.value).eql('','input is empty')
        .typeText(developerName,"Sebas")
        .expect(developerName.value).eql('Sebas','input contains "Sebas"')
        .click(osOption)
        .click(submitButton);
});