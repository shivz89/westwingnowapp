const Page = require('./page');
const LoginOR = require('../objectRepositories/or.login');

class loginOverlay extends Page {

    get lnkRedirLogin() { return $(LoginOR.css_lnk_RedirLogin) }
    get inputUsername() { return $(LoginOR.xpath_input_Username) }
    get inputPassword() { return $(LoginOR.xpath_input_Password) }
    get btnSubmit() { return $(LoginOR.xpath_btn_Submit) }

    async login(username, password) {
        await (await this.lnkRedirLogin).click();
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }

}

module.exports = new loginOverlay();