# Ticket Wars - Playwright E2E Automation

End-to-end test automation for a [concert ticket booking simulation](https://www.tixdropsim.com/queue), built with **Playwright and TypeScript**.

The project automates a time-sensitive booking workflow in which users must identify and secure dynamically assigned seats before they are taken.

Each difficulty level introduces a different time constraint, making the challenge progressively harder.

The goal is to complete the entire booking process within the given time window.

## Tech Stack

- **Playwright** - Browser automation and test execution
- **TypeScript** - Test implementation
- **Page Object Model (POM)** - Separation of UI interactions and test logic
- **Playwright Test Runner** - Test execution, assertions, and HTML reporting

## Automated Test Flow

1. Select a difficulty and start the simulation.
2. Enter the virtual queue and retrieve the assigned seats.
3. Wait for the seat selection page.
4. Locate and select both assigned seats.
5. Proceed to checkout.
6. Validate the successful booking and seat information.

### Test Coverage

| Difficulty | Expected Result |
|---|---|
| Easy | Successfully book the assigned seats |
| Normal | Successfully book the assigned seats |
| Hard | Successfully book the assigned seats |

All three scenarios are executed as independent, parameterized tests.

## Technical Highlights

**Dynamic seat selection:** The application assigns seats using identifiers such as `K5` and `K6`. The automation parses these identifiers, converts them into row and column coordinates, and dynamically locates the corresponding buttons.

**Time-sensitive automation:** Seats become unavailable progressively, with shorter availability windows at higher difficulty levels.

**Maintainable architecture:** Page Objects encapsulate UI interactions, while test specifications handle scenario orchestration and assertions.

## Project Structure

```text
pages/
├── StartPage.ts
├── QueuePage.ts
└── SeatsPage.ts

tests/
└── bookConcertTickets.spec.ts

playwright.config.ts
```

## Getting Started

### Prerequisites

- Node.js and npm

### Installation

```bash
npm ci
npx playwright install
```

### Run Tests

```bash
npx playwright test
```

Run with a visible browser:

```bash
npx playwright test --headed
```

Open the HTML report:

```bash
npx playwright show-report
```

## Disclaimer

Ticket Wars is an independent automation portfolio project created for educational and demonstration purposes.

The application under test is a publicly accessible third-party simulation. This repository is not affiliated with its creators.
