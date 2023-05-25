const {Builder, By, Key} = require('selenium-webdriver');
require('chromedriver');

function testSurface(){
    let driver = new Builder().forBrowser('chrome').build();
}

testSurface();