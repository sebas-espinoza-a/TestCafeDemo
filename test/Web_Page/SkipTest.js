fixture("First Fixture")
    .page("http://devexpress.github.io/testcafe/");

test.skip.page("https://devexpress.github.io/testcafe/example/")
("Skipped Test", async t =>{
    await t
        .typeText("#developer-name","Sebas")
        .click("#linux")
        .click("#submit-button");
});

test.page("https://devexpress.github.io/testcafe/example/")
("Test not Skipped", async t =>{
    await t
        .typeText("#developer-name","Sebas")
        .click("#linux")
        .click("#submit-button");
});