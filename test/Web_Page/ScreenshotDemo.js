fixture("First Fixture")
    .page("http://devexpress.github.io/testcafe/")
    .beforeEach(async t =>{
        await t
            .maximizeWindow()
            .setTestSpeed(0.1)
    });

test
.page("https://devexpress.github.io/testcafe/example/")
("First Test", async t =>{
    await t
        .typeText("#developer-name","Sebas")
        .click("#linux")
        .click("#submit-button");
});

test
.page("https://devexpress.github.io/testcafe/example/")
("Second Test", async t =>{
    await t
        .typeText("#developer-name","Sebas")
        .click("#linux")
        //.takeScreenshot()
        .click("#submit-button");
});

test
.page("https://devexpress.github.io/testcafe/example/")
("Third Test", async t =>{
    await t
        .typeText("#developer-name","Sebas")
        .click("#linux")
        //.takeElementScreenshot("#submit-button")
        .click("#submit-button");
});
