# Welcome to webdriverio-test 👋

> This is the Interview Task2 for "Senior Test Automation Engineer"
    Task 2 - Create a test automation script covering a provided use case on Westwingnow.de
        Please create an automated script for the following test case, using WebDriver.io , Behat , or Robotframework:
        Given I am on the WestwingNow home page ( https://www.westwingnow.de )
        When I search for "möbel"
        Then I should see product listing page with a list of products
        When I click on wishlist icon of the first found product
        Then I should see the login/registration overlay
        When I switch to login form of the overlay
        And I log in with " your_test_account_data (see the note below) " credentials
        Then the product should be added to the wishlist (wishlist icon on
        the product is filled in and wishlist counter in the website header shows 1, screenshot )
        And I go to the wishlist page( https://www.westwingnow.de/customer/wishlist/index/ )
        And I delete the product from my wishlist ( screenshot )

### 🏠 [Homepage](westwingnow.de)

************************************************************ **Dockerized** ***********************************************************************
docker build -t westwingnow -f Dockerfile .
docker run -it westwingnow
docker run -p 4444:4444 selenium/standalone-chrome
docker-compose build
docker-compose up
docker-compose build 
docker-compose up 

***************************************************************************************************************************************************

## Install

-- java version "14.0.2" : install JDK 14+ and make sure class path is set properly. JAVA is require to start Selenium Server on your local environment nothing else.
-- nodeJS v14.17.0 : Install from the site - https://nodejs.org/en/ 
-- webdriverIO 6.14.13 : Install from the site - npm install @wdio/cli

## Selenium

To run your test you must have selenium server up and running to execute any webdriverIO tests, or it will fail fast with an error. To start selenium automatically it has been added as part of services: ['selenium-standalone'] in the wdio.conf.js. That's all there is to it.!.

## Config Files

WebdriverIO uses configuration files to setup and execute tests in specific ways. The configuration is fully customizable, and different functions can be invoked before, during and after each test or test suite. Config files can be found in the /webdriverio-test/ directory and name wdio.conf.js. This can be called via the the cli.

## Reporters

Spec
Test reporter, that prints detailed results to console.


## Usage

npx wdio run ./wdio.conf.js

## Run tests

npx wdio run ./wdio.conf.js

## Author

👤 **Shivam Mishra**

* Phone: +91 9599964155
* E-mail: shivz89@gmail.com
* Website: https://www.linkedin.com/in/iamshivmishra
* Github: [@shivz89](https://github.com/shivz89)
* LinkedIn: [@iamshivmishra](https://linkedin.com/in/iamshivmishra)
