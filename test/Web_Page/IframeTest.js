import {Selector} from 'testcafe';

const iframeName = Selector('iframe#mce_0_ifr');
const textArea = Selector('body#tinymce.mce-content-body');

fixture("Iframe Fixutre")
.page("https://the-internet.herokuapp.com/iframe");

test("iFrame test", async t =>{
    await t
        .switchToIframe(iframeName)
        .setTestSpeed(0.1)
        .click(textArea)
        .pressKey('ctrl+a delete')
        .typeText(textArea,'Hello World!')
        .expect(textArea.innerText).contains('World')
        .switchToMainWindow();
});