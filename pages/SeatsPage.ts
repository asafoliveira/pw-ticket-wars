import { Page } from "@playwright/test";
import { Locator } from "@playwright/test";

export class SeatsPage {
  readonly successHeading: Locator;
  readonly targetSeats: Locator;
  readonly yourSeats: Locator;

  constructor(private readonly page: Page) {
    this.successHeading = page.getByRole('heading', { name: /Mission Complete!/ });
    this.targetSeats = page.getByText('Target Seats', { exact: true }).locator('..').locator('div.font-mono');
    this.yourSeats = page.getByText('Your Seats', { exact: true }).locator('..').locator('div.font-mono');
  }

  async selectAssignedSeats(seats: string[]): Promise<void> {
    for (const seat of seats) {
      const match = /^([A-T])(20|1[0-9]|[1-9])$/.exec(seat);

      if (!match) {
        throw new Error(`Invalid seat: ${seat}`);
      }

      const row = match[1].charCodeAt(0) - 64;
      const col = Number(match[2]);

      await this.page
        .locator(`button[title*="Row ${row} Col ${col} ("]`)
        .click({ timeout: 2000 });
    }
  }

  async clickCheckoutButton(): Promise<void> {
    const checkoutButton = this.page.getByRole('button', { name: /^Checkout \(\d+\)$/ })
    await checkoutButton.click()
  }

}