import { test, expect } from "@playwright/test";
import { StartPage } from "../pages/StartPage";
import { QueuePage } from "../pages/QueuePage";
import { SeatsPage } from "../pages/SeatsPage";

const difficulties = ["Easy", "Normal", "Hard"] as const;

test.describe("Ticket booking", () => {
  let atStartPage: StartPage;
  let atQueuePage: QueuePage;
  let atSeatsPage: SeatsPage;

  test.beforeEach(async ({ page }) => {
    atStartPage = new StartPage(page);
    atQueuePage = new QueuePage(page);
    atSeatsPage = new SeatsPage(page);
    await atStartPage.navigate();
  });

  test("Should successfully book assigned seats on Easy difficulty", async () => {
    await atStartPage.chooseDifficulty("Easy");
    await atStartPage.startGame();

    const assignedSeats = await atQueuePage.getAssignedSeats();

    await atQueuePage.waitForQueue();
    await atSeatsPage.selectAssignedSeats(assignedSeats);
    await atSeatsPage.clickCheckoutButton();

    await expect(atSeatsPage.successHeading).toBeVisible();
    await expect(atSeatsPage.targetSeats).toHaveText(assignedSeats.join(", "));
    await expect(atSeatsPage.yourSeats).toHaveText(assignedSeats.join(", "));
  });

  test("Should successfully book assigned seats on Normal difficulty", async () => {
    await atStartPage.chooseDifficulty("Normal");
    await atStartPage.startGame();

    const assignedSeats = await atQueuePage.getAssignedSeats();

    await atQueuePage.waitForQueue();
    await atSeatsPage.selectAssignedSeats(assignedSeats);
    await atSeatsPage.clickCheckoutButton();

    await expect(atSeatsPage.successHeading).toBeVisible();
    await expect(atSeatsPage.targetSeats).toHaveText(assignedSeats.join(", "));
    await expect(atSeatsPage.yourSeats).toHaveText(assignedSeats.join(", "));
  });

  test("Should successfully book assigned seats on Hard difficulty", async () => {
    await atStartPage.chooseDifficulty("Hard");
    await atStartPage.startGame();

    const assignedSeats = await atQueuePage.getAssignedSeats();

    await atQueuePage.waitForQueue();
    await atSeatsPage.selectAssignedSeats(assignedSeats);
    await atSeatsPage.clickCheckoutButton();

    await expect(atSeatsPage.successHeading).toBeVisible();
    await expect(atSeatsPage.targetSeats).toHaveText(assignedSeats.join(", "));
    await expect(atSeatsPage.yourSeats).toHaveText(assignedSeats.join(", "));
  });

/*    for (const difficulty of difficulties) {
    test(`Should successfully book assigned seats on ${difficulty} difficulty`, async ({ page }) => {
      const atStartPage = new StartPage(page);
      const atQueuePage = new QueuePage(page);
      const atSeatsPage = new SeatsPage(page);

      await atStartPage.navigate();
      await atStartPage.chooseDifficulty(difficulty);
      await atStartPage.startGame();

      const assignedSeats = await queuePage.getAssignedSeats();

      await atQueuePage.waitForQueue();
      await atSeatsPage.selectAssignedSeats(assignedSeats);
      await atSeatsPage.clickCheckoutButton();

      await expect(atSeatsPage.successHeading).toBeVisible();
      await expect(atSeatsPage.targetSeats).toHaveText(assignedSeats.join(", "));
      await expect(atSeatsPage.yourSeats).toHaveText(assignedSeats.join(", "));
    });
  }*/
}); 
