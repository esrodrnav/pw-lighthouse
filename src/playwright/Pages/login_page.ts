import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {

  page: Page;
  usernameInputField: Locator;
  passwordInputField: Locator;
  signInButtonField: Locator;
  // loginButton: Locator;
  dashboardHeader: Locator
  // userName: Locator;
  // loginForm: Locator;

  constructor(page: Page) {

    this.page = page;
    this.usernameInputField =  this.page.locator('//input[@placeholder = "Username"]');
    this.passwordInputField = this.page.locator('//input[@placeholder = "Password"]');
    this.signInButtonField = this.page.locator('//button[text() = " Login "]');
    // this.loginButton = this.page.locator('//li/button[text() = "Log in"]');
    this.dashboardHeader = this.page.locator('//h6[text() = "Dashboard"]');
    // this.userName = this.page.locator('//span[text() = "Hello, John"]')
    // this.loginForm = this.page.locator('//form[@id="login"]');
  }

  async navigate(url: string): Promise<void> {
    await this.page.goto(url);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async login(username: string, password: string): Promise<void> {

    //await this.loginButton.click();
    //expect(this.loginForm, "The login form should be visible").toBeVisible();
    await this.usernameInputField.fill(username);
    await this.passwordInputField.fill(password);
    await this.signInButtonField.click();
    await this.page.waitForLoadState('domcontentloaded');
  }
  
  async isLoggedIn(): Promise<void> {
    return await expect(this.dashboardHeader, "The dashboard header should be visible after login").toContainText('Dashboard', { timeout: 30000 });

  }

}

