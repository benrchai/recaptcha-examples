module.exports = {
  'Bot': function(browser) {
    browser.url('https://ptest.npe.auspost.com.au/mypost/track/#/search')
      .waitForElementVisible('.list-page-top-banner')
      .setValue('input[type=text]', '11223344')
      .pause(100)
      .click('.btn-primary')
      .waitForElementVisible('.nickname-label-text')
  }
}