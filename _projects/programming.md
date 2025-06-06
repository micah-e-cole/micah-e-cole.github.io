---
title: JavaScript Programming
date: 2021-10-19 08:01:35 +0300
subtitle: Word Guessing Game
image: '/images/projects/design/webdev/webapp.png'
---
**Role:** Developer<br>
**Status:** Completed 2021<br>
**Type:** Front-End Web App Development (HTML • CSS • JavaScript)

#### Project Overview
 [This](https://github.com/micah-e-cole/WordAppRevamp){:target="_blank"} browser-based word guessing game was built as part of my learning journey in JavaScript and front-end development. The goal was to create a simple but engaging interactive experience that could be played entirely in the browser.

I wanted to reinforce core JavaScript concepts through a project that required real-time user interaction, conditional logic, and dynamic content updates. Word games offer a familiar yet adaptable framework to explore these skills, especially when layered with progressive difficulty and responsive feedback.

#### Difficulty-Based Word Selection:
- Users begin by selecting a difficulty level (easy, medium, or hard). The game filters from predefined word banks to randomly select a word that matches the chosen challenge.

#### Core Game Logic:
- JavaScript tracks player input via keypress events
- Correct guesses reveal letters in-place; incorrect guesses are counted
- Win/loss conditions are tracked and displayed with real-time feedback

#### Interactive UI Design:
- Built a clean and accessible interface using CSS Flexbox to center game content, highlight active states, and provide smooth transitions during gameplay.

#### Recent Updates
###### Enhanced Logic Handlers
- Updated the backend logic to allow for use of SQLite, replacing the .csv and resource-heavy logic previously handled by app.js

#### Future Development
###### Enhanced UI:
- I plan to address issues with the user interface to be more accessible.

###### Deployment:
- Containerization and hosting via Docker/Terraform/Azure.

###### User Data and Stats:
- Incorporate localStorage or server-side persistence to track scores and user progress over time.