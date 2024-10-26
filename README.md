# Cricket Dream Team Selection 🏏

### Live Link: https://aryan-ahad-ateeq.surge.sh/

### Assemble Your Ultimate Dream 11 Cricket Team

This application allows users to create a Dream 11 cricket team by selecting players from an available pool. Each player has unique stats and a bidding price, adding a strategic layer to building your team within a limited coin budget. Users can also toggle between views to see available and selected players, with a smooth and intuitive user experience.

---

## 🛠 Technologies Used

- **React**: Frontend library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for designing responsive and modern layouts.
- **React Icons**: Icon package for adding vector icons to React components.
- **PropTypes**: Type-checking for React props to improve reliability and maintainability.
- **React Toastify**: Notifications and alerts for enhancing user experience.
- **Node.js**: For local development and running the app.

---

## 📜 Features

- **Dynamic Coin Management**: Users start with a base amount of coins and can earn more through actions in the app.
- **Responsive Design**: Adaptive layouts that adjust across various devices, making it mobile-friendly.
- **Toggle-able Views**: Users can switch between "Available Players" and "Selected Players" for easy team management.
- **Notifications**: Real-time notifications using `React Toastify` to alert users of insufficient coins, player selection success, or when the team is full.
- **Maximum Player Selection**: Users can select up to 6 players in the team to simulate the Dream 11 experience.

---

## 📂 Project Structure

### Components

1. **App.jsx** - Main component managing the coin state and layout structure.
2. **Navbar.jsx** - Displays the navigation menu and the user's coin count.
3. **Banner.jsx** - Hero section with a "Claim Free Credit" button to earn more coins.
4. **DisplayData.jsx** - Manages available players, displays player details, and facilitates player selection.
5. **Footer.jsx** - Footer section with a subscription form and company details.

### Data

- **display.json** - JSON file containing player data, including `playerId`, `name`, `country`, `role`, `battingType`, `bowlingType`, and `biddingPrice`.

---

## ⚙️ Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cricket-dream-team-app.git
   ```
2. Navigate into the project directory:
   ```bash
   cd cricket-dream-team-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the app:
   ```bash
   npm start
   ```
   The app should be running on [http://localhost:3000](http://localhost:3000).

---

## 📬 Contact

If you have any questions, feel free to reach out:
- Email: aryanahadateeq02@gmail.com
- LinkedIn: https://www.linkedin.com/in/aryan-ahad-ateeq/

---

