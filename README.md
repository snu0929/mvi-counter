# Counter App (MVI/MVVM Architecture with RxJS)

## Overview
This is a simple counter application built using **React** and **RxJS**, following the **MVI/MVVM architecture**. It demonstrates reactive programming concepts and state management using **BehaviorSubject** for handling data streams.

## Features
- **Increment & Decrement**: Pressing `+` increases the count by 1, and `-` decreases the count by 1.
- **Reset**: Resets the count back to `0`.
- **Auto Increment**: When enabled, the counter increases by 1 every `1.1` seconds.
- **Boundaries**: The counter never goes below `0` or above `98`.
- **Toggle Button for Auto Increment**: Visually changes between active (green) and inactive (white) states.

## Tech Stack
- **React**: For UI rendering.
- **RxJS**: For managing state and handling reactive user interactions.
- **CSS**: For styling the UI.

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/snu0929/mvi-counter.git
   cd https://github.com/snu0929/mvi-counter.git
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
4. Open your browser and visit `http://localhost:3000`

## Project Structure
```
/src
  ├── components
  │   ├── CounterApp.js  # Main React component
  ├── styles
  │   ├── CounterApp.css  # Styles for the app
  ├── App.js  # Root component
  ├── index.js  # Entry point
```

## How It Works (MVI/MVVM Breakdown)
### **Model (State Management)**
- The `counter$` (BehaviorSubject) holds the count value.
- The `autoIncrement$` (BehaviorSubject) manages auto-increment state.
- RxJS observables handle state changes reactively.

### **View (User Interface)**
- Displays the count.
- Provides buttons for increment, decrement, reset, and auto increment toggle.

### **Intent (User Actions)**
- Button clicks trigger changes in BehaviorSubjects.
- Auto increment logic subscribes to changes and updates the state accordingly.

## Deployment
To deploy the project:
```sh
git add .
git commit -m "Deploying the counter app"
git push origin main
```



