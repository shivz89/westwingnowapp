const Page = require('./page');
const CustomerWishlistPageOR = require('../objectRepositories/or.customer.wishlist.page');
const Config = require('../config/config.data');

class westwingCustomerWishlist extends Page {

    get iconCustomersWishlist() { return $(CustomerWishlistPageOR.css_icn_CustomersWishlist) }
    get btnDeleteProduct() { return $(CustomerWishlistPageOR.css_btn_DeleteProduct) }

    async clickDeleteButton() {
        await (await this.btnDeleteProduct).click();
    }
    
    async openWishlistPage(){
        await (await this.iconCustomersWishlist).click();
    }

    open() {
        return super.open(Config.wishlistURI);
    }
}

module.exports = new westwingCustomerWishlist();