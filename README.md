# 🤖 Smart Sudoku Solver (PWA)

A lightning-fast, web-based Sudoku solver built as a Progressive Web App (PWA). This project utilizes an optimized **Backtracking Algorithm (Depth-First Search)** to instantly solve any standard 9x9 Sudoku puzzle. 

Designed with a clean, responsive UI and optimized for mobile devices.

## ✨ Features
* **AI-Powered Solver:** Implements a backtracking algorithm that resolves even the most complex puzzles in milliseconds.
* **Fast Import:** A custom feature allowing users to input an 81-character string to populate the entire board instantly (O(1) parsing).
* **Real-time Validation:** Prevents invalid inputs and detects unsolvable board states before execution.
* **Progressive Web App (PWA):** Fully installable on iOS and Android devices with offline capabilities via Service Workers.
* **Color-Coded UI:** Distinctly highlights algorithmically solved numbers versus user inputs.

## 🧠 Algorithm: Backtracking (DFS)
The core logic relies on a recursive Depth-First Search (DFS) approach:
1. Searches the 9x9 grid for an empty cell (`0`).
2. Iterates through digits `1-9` and checks constraints (Row, Column, 3x3 Sub-grid).
3. If a valid digit is found, it tentatively places it and recursively attempts to solve the rest of the board.
4. If a dead-end is reached, it **backtracks** (resets the cell to `0`) and tries the next valid digit.

## 🚀 Live Demo & Installation
You can use the app directly or install it on your mobile device:
1. Visit the live link: [https://soroush1234417.github.io/sudoku-solver/]
2. Click on the browser menu and select **"Add to Home Screen"**.
3. Launch the app directly from your phone!

## 🛠️ Tech Stack
* **Frontend:** HTML5, Tailwind CSS, Vanilla JavaScript (ES6+)
* **Architecture:** PWA (manifest.json, Service Worker)
* **Deployment:** GitHub Pages

## 👨‍💻 Author
**Soroush Mirzanaziri**  
*Electrical and Computer Engineering Student at Shahid Beheshti University (SBU)*  
GitHub: [@Soroush1234417](https://github.com/Soroush1234417)
