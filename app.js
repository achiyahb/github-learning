const puppeteer = require('puppeteer');

(async () => {
    console.log('start')
    let url = 'https://www.linkedin.com/mynetwork/invitation-manager/sent/'
    let browser = await puppeteer.launch({headless: false});
    let page = await browser.newPage();
    await page.goto(url, {waitUntil: 'networkidle2'})
    let mouseEvent = {}
    let data = await page.evaluate(() => {
        let signInBtn = document.querySelector('.main__sign-in-link')
        signInBtn.addEventListener('click', (e) => {

           console.log(e)

            debugger
        }, false)
        signInBtn.click()
    })
    setTimeout(()=>{
        console.log(data)
    },7000)
})()

