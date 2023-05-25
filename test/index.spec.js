// 'index.js' átnevezve 'index.spec.js'-re a Jasmine teszt miatt

const {Builder, By, Key} = require('selenium-webdriver');
require('chromedriver');

const url = 'http://localhost:3000';

// async function testSurface(){ // async = módosító
// teszt miatt átalakítva...

describe('Selenium', ()=> {
    it('30, 35-re eredmény = 12252.211349000194', async()=> {
    let driver = new Builder().forBrowser('chrome').build();
    driver.get(url); // megnyitja / meghívja az ablakot...
    driver.findElement(By.id('radius')).sendKeys('30');
    driver.findElement(By.id('height')).sendKeys('35');
    driver.findElement(By.id('calcButton')).click();
    // 30, 35-re eredmény = 12252.211349000194
    let actual = await driver.findElement(By.id('surface')).getAttribute('value'); // await kell, ha van async
    // console.log('Felszin: ', actual);
    expect(actual).toBeCloseTo(12252.21, 0.9);

    await driver.close(); // bezárja az ablakot
    })
})


    


// testSurface();