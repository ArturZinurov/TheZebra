module.exports = {
    url: 'https://www.thezebra.com/insurance/homeowners',
    elements: {
      submit: '//button[@type="submit"]',
      // Start Questions
      residenceType: '//div[@id="residence_type"]//div[2]//label[1]',
      adress: '//input[@id="address1Input"]',
      homePurchaseStatus: '//div[@id="home_purchase_status"]//div[2]//label[2]',
      purchaseDate: '//div[@id="purchase_date"]',
      // Home Questions
      yearBuild: '//input[@id="year_built-input"]',
      foundationType: '//div[@id="foundation_type"]//div[@id="downshift-62-item-0"]',
      constractionType: '//div[@id="construction_type"]//div[@id="downshift-63-item-2"]',
      numbOfStories: '//div[@id="number_of_stories"]//div[@id="downshift-48-item-0"]',
      heatType: '//div[@id="heat_type"]//div[@id="downshift-65-item-0"]',
      roofMaterial: '//div[@id="roof_material"]//div[@id="downshift-66-item-0"]',
      roofImpYear: '//input[@id="roof_improvement_year-input"]',
      sqrFootage: '//input[@id="square_footage-input"]',
      replcmtAmount: '//input[@id="replacement_amount-input"]',
      floodZone: '//div[@id="is_in_flood_zone"]//div[2]//label[1]',
      fireHyrdrnt: '//div[@id="is_fire_hydrant_available"]//div[2]//label[1]',
      fireStation: '//div[@id="fire_station_proximity"]//div[2]//label[1]',
      // Owner Objs
      firstName:'//input[@id="first_name-input"]',
      lastName: '//input[@id="last_name-input"]',
      dob: '//input[@id="date_of_birth-input"]',
      email: '//input[@id="email-input"]',
      quoteHeader: '//h2[contains(text(),"Your quotes from top companies!")]'
    }
}
