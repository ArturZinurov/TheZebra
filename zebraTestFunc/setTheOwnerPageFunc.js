module.exports = (pageObjects, value) => {
  pageObjects.setValue('@firstName', value.firstNameValue)
  pageObjects.setValue('@lastName', value.lastNameValue)
  pageObjects.setValue('@dob', value.dobValue)
  pageObjects.setValue('@email', value.emailValue)
  pageObjects.click('@submit')
  pageObjects.waitForElementVisible('@quoteHeader', 1000)
}
