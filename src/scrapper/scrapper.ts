import { Page } from "puppeteer"
import config from "../config"

const scrapper = async (page: Page) => {
  await page.goto(config.loginPage)
  const form = await page.waitForSelector(config.loginFormId)
  const userNameInput = await form?.waitForSelector(config.userNameInput)
  await userNameInput?.focus()
  await page.keyboard.type(config.userName)

  const userPasswordInput = await form?.waitForSelector(config.passwordInput)
  await userPasswordInput?.focus()
  await page.keyboard.type(config.userPassword)

  const submitButton = await form?.waitForSelector("button[type=submit]")
  await submitButton?.click()

  const dialog = await page.waitForSelector("div[role=dialog]")
  const notNowButton = await dialog?.waitForSelector("button:nth-child(2)")
  await notNowButton?.click()

  const presentation = await page.waitForSelector("div[role=presentation]")

  await page.screenshot({
    path: "screenshot.jpg",
  })
}

export default scrapper
