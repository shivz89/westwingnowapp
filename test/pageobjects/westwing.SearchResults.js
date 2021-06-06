const Page = require('./page');
const SearchResultsOR = require('../objectRepositories/or.searchResults.page');

class westwingSearchResults extends Page {
    
    get formMain() { return $(SearchResultsOR.css_form_Main) }
    get icnWshlist1() { return $(SearchResultsOR.css_icn_Wshlist1)}
    get lblSearchHeader() { return $(SearchResultsOR.css_lbl_SearchHeader)}
    
    async dismissOverlay() {
        await (await this.formMain).moveTo(50, 50);
        await (await this.formMain).click({ x: -350 });
    }

    async clickWishlistIcon1() {
        await (await this.icnWshlist1).click();
    }

}

module.exports = new westwingSearchResults();