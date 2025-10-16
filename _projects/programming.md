---
title: Continuous Development/Continuous Integration (CI/CD) With JavaScript
date: 2021-10-19 08:01:35 +0300
subtitle: Word Guessing Game Project Management
image: /images/projects/design/webdev/webapp.png
image_style: contain
image_scale: 70        # ← percent of container width
---
**Role:** Developer<br>
**Status:** Completed 2021 - Actively Maintained<br>
**Type:** Front-End Web App Development (HTML • CSS • JavaScript)

#### Project Overview
 [This](https://github.com/micah-e-cole/WordAppRevamp){:target="_blank"} browser-based word guessing game was built as part of my learning journey in JavaScript and front-end development. The goal was to create a simple but engaging interactive experience that could be played entirely in the browser.

The project reinforced core JavaScript concepts like conditional logic, dynamic DOM manipulation, and real-time user input along with the use of backend processes being completed using Express. Word games provided a great sandbox for experimenting with these elements while adding layers of interactivity and difficulty progression.

#### Difficulty-Based Word Selection:
- Users begin by selecting a difficulty level (easy, medium, or hard). The game filters from predefined word banks to randomly select a word that matches the chosen challenge.

#### Core Game Logic:
- JavaScript tracks player input via keypress events
- Correct guesses reveal letters in-place; incorrect guesses are counted.
- Win/loss conditions are tracked and displayed with real-time feedback.

#### Interactive UI Design:
- Built a clean and accessible interface using CSS Flexbox to center game content, highlight active states, and provide smooth transitions during gameplay.

#### Recent Enhancements
##### CI/CD Integration:
- Introduced GitHub Actions for continuous integration and automated security scanning during the build process.
- Implemented conditional deployment rules: containers flagged with HIGH or CRITICAL vulnerabilities are prevented from deploying.
###### Container Security:
- Integrated Trivy to scan Docker containers for vulnerabilities as part of the CI/CD pipeline
- Security reports are automatically generated and logged for every build.
###### Logic Optimization:
- Replaced .csv-based word handling with a lightweight SQLite backend, improving efficiency and maintainability.

#### Future Development
##### UI Accessibility:
- Redesign interface components to improve screen reader compatibility and keyboard navigation.

##### Deployment Pipeline:
- Extend infrastructure as code (IaC) with Terraform for provisioning.
- Deploy on Azure for scalable cloud hosting.

##### User Data and Stats:
- Track stats and session data via localStorage or server-side persistence for personalized feedback.