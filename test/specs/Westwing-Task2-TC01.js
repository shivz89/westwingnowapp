//Page Objects
const Homepage = require('../pageobjects/westwing.Homepage');
const WestwingSearchResults = require('../pageobjects/westwing.SearchResults');
const LoginOverlay = require('../pageobjects/login.Overlay');
const WestwingWishlistPage = require('../pageobjects/westwing.Customer.Wishlist');

//Data 
const ConfigData = require('../config/config.data');
const TestData = require('../testData/task2.test.data');

//fs 
const fs = require('fs');

//Interview Task2 below
//TC01
describe('Task 2: Test automation script covering a provided use case on Westwingnow.de', () => {

    
    var delay = ConfigData.delay;
    
    it('TC01 :', () => {
        console.log('************** TC01 started **************');

        if (fs.existsSync(ConfigData.prdAddSnapshotPath) == true) {
            fs.unlinkSync(ConfigData.prdAddSnapshotPath);
            console.log('successfully deleted ' + ConfigData.prdAddSnapshotPath);
        }
        else{
            console.log('ProductAdded.png not present, hence Continuing... ');
        }
        if (fs.existsSync(ConfigData.prdDelSnapshotPath) == true) {
            fs.unlinkSync(ConfigData.prdDelSnapshotPath);
            console.log('successfully deleted ' + ConfigData.prdDelSnapshotPath);
        }
        else{
            console.log('ProductDeleted.png not present, hence Continuing... ');
        }
    });


    it('should navigate to the WestwingNow home page and accept website cookies', async () => {
        await browser.maximizeWindow()
        await Homepage.open();
        await expect(browser).toHaveTitle(TestData.TC01_homepageTitle);
        await browser.pause(delay);
        await expect(Homepage.btnAcceptCookies).toHaveTextContaining(TestData.TC01_cookieButtonText);
        await Homepage.acceptCookies();
    });

    it('should search "möbel" from the search bar', async () => {
        await Homepage.search(TestData.TC01_searchKeyword);
        await browser.keys(ConfigData.enterKey);
        await expect(browser).toHaveTitle(TestData.TC01_searchResultsPageTitle);
    });

    it('should see product listing page with a list of products', async () => {
        await WestwingSearchResults.dismissOverlay();
        await expect(browser).toHaveTitle(TestData.TC01_searchResultsPageTitle);
        await expect(WestwingSearchResults.lblSearchHeader).toHaveTextContaining(TestData.TC01_searchHeader);
    });

    it('should click on wishlist Icon of the first product and see login overlay', async () => {
        await WestwingSearchResults.clickWishlistIcon1();
    });

    it('should switch to login form and login with valid credentials and product should be added to wishlist(icon)', async () => {
        await LoginOverlay.login(TestData.TC01_username, TestData.TC01_password);
        await expect(browser).toHaveTitle(TestData.TC01_searchResultsPageTitle);
        await browser.pause(delay);
        await browser.saveScreenshot(ConfigData.prdAddSnapshotPath);
    });

    it('should navigate to the customer wishlist page and delete the product', async () => {
        await WestwingWishlistPage.openWishlistPage();
        await expect(browser).toHaveTitle(TestData.TC01_wishlistPageTitle);
        await WestwingWishlistPage.clickDeleteButton();
        await browser.pause(delay);
        await browser.saveScreenshot(ConfigData.prdDelSnapshotPath);
        
        console.log('************** TC01 Ended **************');
    });


});