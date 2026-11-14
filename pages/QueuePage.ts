import { Page } from "@playwright/test";

export class QueuePage {
  constructor(private readonly page: Page) {}

  async getAssignedSeats(): Promise<string[]> {
    const seatsText = await this.page
      .locator("span.font-mono.font-bold")
      .innerText();

    return seatsText.split(",").map((seat) => seat.trim());
  }

  async waitForQueue(): Promise<void> {
    await this.page.waitForURL("**/seats");
  }
}
