# Quiz App

This is a simple Quiz Application built with React. The application presents multiple-choice questions to the user, allows them to select answers, and provides immediate feedback on whether the selected answer is correct or incorrect. The user can navigate through the questions using a "Next" button.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Data Structure](#data-structure)


## Features

- Presents a series of multiple-choice questions to the user.
- Provides immediate feedback on whether the selected answer is correct or incorrect.
- Highlights the correct answer if the user selects an incorrect answer.
- Allows the user to navigate through questions using a "Next" button.
- Displays the current question number and total number of questions.

## Installation

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/your-username/quiz-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd quiz-app
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the development server:
    ```bash
    npm run dev
    ```
2. Open your browser and go to `http://localhost:3000` to see the Quiz App in action.

## Data Structure

The questions are stored in a `data.js` file. Each question is an object with the following structure:

```javascript
export const data = [
    {
        question: "What is the capital of France?",
        option1: "Berlin",
        option2: "Madrid",
        option3: "Paris",
        option4: "Rome",
        ans: 3
    },
    {
        question: "Which planet is known as the Red Planet?",
        option1: "Earth",
        option2: "Mars",
        option3: "Jupiter",
        option4: "Saturn",
        ans: 2
    },
    // Add more questions as needed
];
```
## Contact

If you have any questions, feel free to reach out at sknaseer9347@gmail.com.

## Feedback

If you have any feedback, please reach out to us at sknaseer9347@gmail.com
