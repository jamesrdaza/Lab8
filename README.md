# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)
   * 1.

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   * No, because we are testing two separate functionalities, write and send.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters
   * Yes, because we are testing a single functionality, the max message length.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?
    * Then it will run the tests without a browser UI and we will not be able to see how the Puppeteer drives our browser.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?
```js
beforeAll(async () => {
    await page.goto('http://127.0.0.1:5500');
    await page.$$eval('img', (image) => {
      image[0].click();
      return (window.location.href);
    });
    await page.waitForTimeout(500);
});
```

