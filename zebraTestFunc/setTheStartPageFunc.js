module.exports = (pageObjects, value) => {
  pageObjects.click('@residenceType'),
  pageObjects.setValue('@adress', value.addressValue),
  pageObjects.setValue('@unit', value.unitValue),
  pageObjects.click('@address1'),
  pageObjects.click('@homePurchaseStatus'),
  pageObjects.click('@submit'),
  pageObjects.waitForElementVisible('@yearBuild', 10000000)
}
