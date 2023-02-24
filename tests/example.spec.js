// @ts-check
const { test, expect } = require('@playwright/test');
const email = 'inqom.qaautomationapplicant@gmail.com';
const password = 'o5N,d5ZR@R7^';

test.describe('Update user profile', () => {
  test('Login to Account and add a picture to profile', async ({ page }) => {
  await page.goto('http://www.welcometothejungle.com/fr/me/settings/account');
  await page.getByTestId('login-field-email').fill(email);
  await page.getByTestId('login-field-password').fill(password);
  await page.getByTestId('login-button-submit').click();
  expect(page.getByAltText('Edit')).toBeHidden();
  expect(page.getByAltText('Trash')).toBeHidden();
  await page.getByRole('button', { name: "Importer une image"});
  await page.setInputFiles("input[type='file']", 'tests/profil.png');
  expect(page.getByRole('button', { name: "Importer une image"})).toBeHidden();
  expect(page.getByAltText('Edit')).toBeVisible();
  expect(page.getByAltText('Edit')).toBeEnabled();
  expect(page.getByAltText('Trash')).toBeVisible();
  expect(page.getByAltText('Trash')).toBeEnabled();
  await page.close();
  });
});
