fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test.meta('device','mobile')
("First Test", async t => {
    await t
        .setTestSpeed(0.1)
        .typeText('#developer-name','Sebas')
        .click('input#linux')
        .click('#submit-button');
});