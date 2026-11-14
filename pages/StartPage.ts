import { Locator, Page } from "@playwright/test";

export class StartPage {
  constructor(private readonly page: Page) {}

  async navigate() {
    await this.page.goto('/');
  }

  async chooseDifficulty(difficulty: 'Easy' | 'Normal' | 'Hard'): Promise<void> {
    if (difficulty === 'Normal') return;
    const difficultyButton = this.page.getByRole('button', { name: difficulty })
    await difficultyButton.click()
  }

  async startGame(): Promise<void> {
    const startSimulationButton = this.page.getByRole('button', { name: 'Start Simulation '})
    await startSimulationButton.click()
  }

}
           