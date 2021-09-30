fixture("First Fixture")
    .page("http://devexpress.github.io/testcafe/");

test.only.page("https://devexpress.github.io/testcafe/example/")
("First Test", async t =>{
    await t
        .typeText("#developer-name","Sebas")
        .click("#linux")
        .click("#submit-button");
});

test.page("https://devexpress.github.io/testcafe/example/")
("Second Test", async t =>{
    await t
        .typeText("#developer-name","Sebas")
        .click("#linux")
        .click("#submit-button");
});