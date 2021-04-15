module.exports = (homeInsPageObjects, value) => {
  homeInsPageObjects.click('@residenceType')
  homeInsPageObjects.setValue('@adress', value.addressValue)
  homeInsPageObjects.click('@homePurchaseStatus')
  homeInsPageObjects.click('@submit')
  homeInsPageObjects.waitForElementVisible('@yearBuild', 1000)
}
