const {test, expect} = require('@playwright/test');

test('First Playwright Test', async ({browser})=> 
{

// chrome - plugins/cookies
// new context means new incognito or new instance
const context = await browser.newContext();
const page = await context.newPage();

//Login Page

const fldUserEmail = page.locator('#userEmail');
const fldUserPassword = page.locator('#userPassword');
const btnLogin = page.locator('#login');
const linkRegister = page.locator('.text-reset');

//Registration Page

const fldFirstName = page.locator('#firstName');
const fldLastName = page.locator('#lastName');
const fldEmail = page.locator('#userEmail');
const fldPhoneNum = page.locator('#userMobile');
const slctOccupation = page.locator('select');
const radioMale = page.locator("[value='Male']");
const fldRegPass = page.locator('#userPassword');
const fldRegConfirmPass = page.locator('#confirmPassword');
const chckboxAgree = page.locator('.col-md-1 input');
const btnRegister = page.locator("[value='Register']");

await page.goto("https://rahulshettyacademy.com/client/");

//get title - assertion
console.log(await page.title());
//await expect(page).toHaveTitle("Business Software, Business Management Software | NetSuite");

await linkRegister.click();

await fldFirstName.fill('John');
await fldLastName.fill('Doe');
await fldEmail.fill('johndoe129@gmail.com');
await fldPhoneNum.fill('1234567891');
await fldRegPass.fill('12345aBc!@#');
await slctOccupation.selectOption("3: Engineer");
await radioMale.click();
await fldRegConfirmPass.fill('12345aBc!@#');
await chckboxAgree.click();

await expect(radioMale).toBeChecked();

btnRegister.click();
await page.waitForLoadState('networkidle');

//await page.waitForLoadState('networkidle');
console.log(page.locator('.headcolor').textContent());

//assert registration successful
await expect(page.locator('.headcolor')).toContainText('Account Created Successfully');

//go back to login page
await page.locator('.btn').click();
await page.waitForLoadState('networkidle');

//locators css and xpath
await fldUserEmail.fill("johndoe129@gmail.com");
await fldUserPassword.fill("12345aBc!@#");
await btnLogin.click();

});




test('Second Playwright Test', async ({browser})=> 
{

// chrome - plugins/cookies
// new context means new incognito or new instance
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("http://cnn.com");



});

/**
 * 
 * login credentials
 * 
 * email: yehey@yehey.com
 * password: thisisPassw0rd$
 */

test.only('Checkout Test Case', async ({browser})=>
{

// chrome - plugins/cookies
// new context means new incognito or new instance
const context = await browser.newContext();
const page = await context.newPage();

//Login Page

const fldUserEmail = page.locator('#userEmail');
const fldUserPassword = page.locator('#userPassword');
const btnLogin = page.locator('#login');

await page.goto("https://rahulshettyacademy.com/client/");

await fldUserEmail.fill("yehey@yehey.com");
await fldUserPassword.fill("thisisPassw0rd$");
await btnLogin.click();

await page.waitForLoadState('networkidle');
const titles = await page.locator(".card-body b").allTextContents();
console.log(titles);

});

