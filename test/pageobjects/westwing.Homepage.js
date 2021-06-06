const Page = require('./page');
const HomepageOR = require('../objectRepositories/or.homepage');

class westwingHomepage extends Page {

    get btnAcceptCookies() { return $(HomepageOR.xpath_btn_AcceptCookies) }
    get inputSearchBar() { return $(HomepageOR.css_input_SearchBar)}
        
    async acceptCookies() {
        await (await this.btnAcceptCookies).click();
    }

    async search(searchValue) {
        await (await this.inputSearchBar).click();
        await (await this.inputSearchBar).clearValue();
        await (await this.inputSearchBar).setValue(searchValue);
    }


    open() {
        return super.open('');
    }
}

module.exports = new westwingHomepage();