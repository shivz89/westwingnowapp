const Config = require('../config/config.data');

module.exports = class Page {
  
  open(path) {

    return browser.url(Config.baseURL+`${path}`)
    
  }
}