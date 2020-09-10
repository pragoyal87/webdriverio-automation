const NativePage = require('./native.page.js');
const webdriverIOHomePageData = require('../files/testData/sampleHome.data.js');
//const expect = require('expect-webdriverio');

class sampleHomePage extends NativePage {

  get webdriverIOHomePageElement() {
    return this.getPage('sampleHome.locators');
  }

  openwebdriverIOHomepage() {
    browser.url(webdriverIOHomePageData['url']);
    
  }
  verifyHomePageTitle() {
    expect(browser.getTitle()).toContain('WebdriverIO - WebDriver bindings for Node.js')
  }

  searchGetStarted() {

    const searchField = $(this.webdriverIOHomePageElement.searchField)
    searchField.click()
    searchField.setValue(webdriverIOHomePageData['getStartedSearchQuery'])

    const getStartedLink = $(this.webdriverIOHomePageElement.getStartedLink)
    getStartedLink.click()

  }

  searchInvalidKeyword(searchKeyword) {
    const searchField = $(this.webdriverIOHomePageElement.searchField)
    searchField.click()
    searchField.setValue(webdriverIOHomePageData[searchKeyword])
  }

  validateNoResultsFoundMessage() {
    const noResultsFound = $(this.webdriverIOHomePageElement.noResultsFound)
      noResultsFound.waitForDisplayed();
  }

}

module.exports = sampleHomePage;
