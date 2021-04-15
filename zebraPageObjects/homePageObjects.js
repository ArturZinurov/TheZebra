module.exports = {
    url: 'https://www.thezebra.com',
    elements: {
      // Drop-down options
      compare: {selector: '//span[contains(text(),"Compare")]', locateStrategy: 'xpath'},
      toolsTips: {selector: '//span[contains(text(),"Tools & Tips")]', locateStrategy: 'xpath'},
      company: {selector: '//span[contains(text(),"Company")]', locateStrategy: 'xpath'},
    // Insurance Types
      carInsurance: {selector: '//body/div[3]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]//input[@value="auto"]//..', locateStrategy: 'xpath'},
      honeInsurance: {selector: '//body/div[3]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]//input[@value="home"]//..', locateStrategy: 'xpath'},
    // Input Objs
      zipCode: {selector: '//body/div[3]/div[1]/div[1]/div[1]/div[1]/form[1]//input[@name="zipcode"]', locateStrategy: 'xpath'},
      buttonGetQuotes: {selector: '//body/div[3]/div[1]/div[1]/div[1]/div[1]/form[1]//button', locateStrategy: 'xpath'}
    }
  }
