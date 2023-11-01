import puppeteer from "puppeteer"
;(async () => {
  const browser = await puppeteer.launch({ headless: "new" })
  const page = await browser.newPage()
  await page.goto("https://google.com")

  // const element = await page.waitForSelector('input[name="btnI"]')
  // await element?.tap()
  await page.screenshot({ path: "news.png", fullPage: true })

  await browser.close()
})()
