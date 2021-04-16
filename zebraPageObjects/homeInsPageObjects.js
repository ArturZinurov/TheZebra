module.exports = {
    url: 'https://www.thezebra.com/insurance/homeowners/start/',
    elements: {
      submit: {selector: '//button[@type="submit"]', locateStrategy: 'xpath'},
      // Start Questions
      residenceType: {selector: '//div[@id="residence_type"]//div[2]//label[1]', locateStrategy: 'xpath'},
      adress: {selector:  '//input[@id="address1Input"]', locateStrategy: 'xpath'},
      unit: {selector: '//input[@id="address2-input"]', locateStrategy: 'xpath'},
      address1: {selector: '//div[@name="address1"]/div/div[1]', locateStrategy: 'xpath'},
      homePurchaseStatus: {selector:  '//div[@id="home_purchase_status"]//div[2]//label[2]', locateStrategy: 'xpath'},
      purchaseDate: {selector:  '//div[@id="purchase_date"]', locateStrategy: 'xpath'},
      // Home Questions
      yearBuild: {selector:  '//input[@id="year_built-input"]', locateStrategy: 'xpath'},
      foundationType: {selector:  '//div[@id="foundation_type"]//div[2]//div', locateStrategy: 'xpath'},
      foundationValue: {selector: '//div[@id="foundation_type"]//div[2]//div[2]', locateStrategy: 'xpath'},
      constractionType: {selector:  '//div[@id="construction_type"]//div[2]//span', locateStrategy: 'xpath'},
      contractionValue: {selector: '//div[@id="construction_type"]//div[2]//div[2]', locateStrategy: 'xpath'},
      numbOfStories: {selector:  '//div[@id="number_of_stories"]//div[2]//span', locateStrategy: 'xpath'},
      numStoriesValue: {selector:'//div[@id="number_of_stories"]//div[2]//div[2]', locateStrategy: 'xpath'},
      heatType: {selector:  '//div[@id="heat_type"]//div[2]//span', locateStrategy: 'xpath'},
      heatValue: {selector:  '//div[@id="heat_type"]//div[2]//div[2]', locateStrategy: 'xpath'},
      roofMaterial: {selector:  '//div[@id="roof_material"]//div[2]//span', locateStrategy: 'xpath'},
      roofMaterialValue: {selector:  '//div[@id="roof_material"]//div[2]//div[2]', locateStrategy: 'xpath'},
      roofImpYear: {selector:  '//input[@id="roof_improvement_year-input"]', locateStrategy: 'xpath'},
      sqrFootage: {selector:  '//input[@id="square_footage-input"]', locateStrategy: 'xpath'},
      replcmtAmount: {selector:  '//input[@id="replacement_amount-input"]', locateStrategy: 'xpath'},
      floodZone: {selector:  '//div[@id="is_in_flood_zone"]//div[2]//label[1]', locateStrategy: 'xpath'},
      fireHyrdrnt: {selector:  '//div[@id="is_fire_hydrant_available"]//div[2]//label[1]', locateStrategy: 'xpath'},
      fireStation: {selector:  '//div[@id="fire_station_proximity"]//div[2]//label[1]', locateStrategy: 'xpath'},
      // Owner Objs
      firstName: {selector: '//input[@id="first_name-input"]', locateStrategy: 'xpath'},
      lastName: {selector:  '//input[@id="last_name-input"]', locateStrategy: 'xpath'},
      dob: {selector:  '//input[@id="date_of_birth-input"]', locateStrategy: 'xpath'},
      email: {selector:  '//input[@id="email-input"]', locateStrategy: 'xpath'},
      quoteHeader: {selector:  '//h2[contains(text(),"Your quotes from top companies!")]', locateStrategy: 'xpath'}
    }
}
