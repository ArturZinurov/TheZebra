var homePage = {}
var insHomePage = {}
var homeTestData = require('../zebraTestfunc/homeTestData')
var setTheStartPageFunc = require('../zebraTestFunc/setTheStartPageFunc')
var setTheHomePageFunc = require('../zebraTestFunc/setTheHomePageFunc')
var setTheOwnerPageFunc = require('../zebraTestFunc/setTheOwnerPageFunc')

module.exports = {
  beforeEach: browser => {
    homePage = browser.page.homePageObjects()
    insHomePage = browser.page.homeInsPageObjects()
  },
  after: browser => {
    browser.end()
  },
  'Verify expected Objects are present on the home page': () => {
    homePage.navigate(),
    homePage.waitForElementVisible('@compare', 10000),
    homePage.waitForElementVisible('@toolsTips', 10000),
    homePage.waitForElementVisible('@company', 10000),
    homePage.waitForElementVisible('@carInsurance', 10000),
    homePage.waitForElementVisible('@honeInsurance', 10000),
    homePage.setValue('@zipCode', 78702 ),
    homePage.click('@honeInsurance'),
    homePage.click('@buttonGetQuotes')
  },
  'Get a quote for a Home Ins': () => {
      insHomePage.setTheStartPageFunc(insHomePage, homeTestData)
  }
}
