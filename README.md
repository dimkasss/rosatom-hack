# Hackathon Event Platform

### Interactive Event Experience & Team Registration

**A purpose-built web platform designed to streamline hackathon participation, simplify team registration, and deliver an engaging digital experience for technology-driven events.**

---

## Overview

**Hackathon Event Platform** is an interactive event website developed to connect hackathon participants with competition challenges, event schedules, registration workflows, and essential organizational information.

The application combines a visually distinctive interface with practical event management functionality, providing participants with a centralized destination for discovering challenges and registering their teams.

Built with **JavaScript, Pug, SCSS, and Parcel**, the project demonstrates a structured frontend approach to event-oriented web development, emphasizing reusable templates, responsive design, form-driven interactions, and backend communication.

## Key Features

- **Dynamic Team Registration** — Interactive registration workflow supporting teams of 2–5 participants, with dynamically displayed member fields based on team size.
- **REST API Integration** — Client-side integration with a registration endpoint for submitting structured team and participant information.
- **Form Validation & User Feedback** — Required-field validation, contextual error messages, submission error handling, and registration confirmation.
- **Interactive Challenge Selection** — Dedicated competition tracks with selection controls integrated into the registration process.
- **Event Timeline** — Structured visualization of important milestones, including registration, challenge publication, submission deadlines, and awards.
- **Responsive Navigation** — Adaptive navigation with mobile menu interactions and scroll-aware visibility.
- **Expandable FAQ** — Interactive accordion-style content for presenting participation requirements and event information.
- **Custom Visual Identity** — Branded layouts, decorative SVG elements, neon-inspired typography, and event-focused UI components.
- **Event Analytics Integration** — Tracking scripts for collecting website engagement and visitor activity data.

## Tech Stack

| Category | Technologies |
|---|---|
| Core | JavaScript, HTML5 |
| Templating | Pug |
| Styling | SCSS / Sass |
| Build Tool | Parcel 2 |
| API Communication | Fetch API, REST |
| Form Handling | Native HTML Validation API |
| UI Assets | SVG, responsive CSS |
| Analytics | Yandex Metrica, Top.Mail.Ru |

## Engineering Highlights

### Component-Oriented Templating

The interface uses a modular Pug template structure, separating major sections such as navigation, challenges, prizes, FAQs, registration, and footer content.

This approach reduces markup duplication and establishes clear boundaries between individual sections of the application.

### Dynamic Form Architecture

The registration workflow adapts to the selected team size, dynamically controlling field visibility and validation requirements.

Participant information is collected, transformed into a structured request payload, and submitted through an asynchronous API request.

### Asynchronous API Communication

The application integrates frontend registration flows with an external REST API using the native Fetch API.

The submission process includes response handling, failure notifications, form reset, and success-state feedback.

### Responsive Event Experience

The interface combines flexible layouts with device-specific navigation behavior, allowing participants to explore event information and access registration functionality from different screen sizes.

Interactive navigation and visual feedback provide a more engaging experience than a conventional static landing page.

### Build & Asset Pipeline

Parcel provides a streamlined development and production build workflow, including Pug and SCSS transformation.

The project also integrates custom SVG artwork and reusable styling resources to maintain a consistent visual identity.

## Product Value

The platform addresses a practical challenge in event organization: **turning event discovery into a structured, accessible registration experience**.

By combining event information, competition tracks, participation requirements, and team registration within one interface, the application helps simplify the participant journey.

From an engineering perspective, the project showcases the integration of custom frontend development with practical business workflows, highlighting skills in modular UI development, dynamic forms, asynchronous communication, and responsive design.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/dimkasss/rosatom-hack.git
cd rosatom-hack
```

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run start
```

Build the production bundle:

```bash
npm run build
```

The production output is generated in the `build/` directory.
