import puppeteer, { Page } from "puppeteer"
import config from "./config"

interface IBrowserActions {
  scrapper: (page: Page) => void
}
const headlessBrowser = async ({ scrapper }: IBrowserActions) => {
  const browser = await puppeteer.launch({ headless: "new" })
  console.log("Started headless browser")
  const page = await browser.newPage()
  await page.setViewport(config.devicesViewPort)

  await scrapper(page)

  await browser.close()
  console.log("Closed headless browser")
}

export default headlessBrowser
