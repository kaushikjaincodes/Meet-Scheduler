# Decentralized Meeting Scheduler

Decentralized Meeting Scheduler is a blockchain-based application designed to facilitate scheduling meetings in a secure, transparent, and tamper-proof manner using smart contracts. This project leverages the power of decentralization to ensure that meeting details are immutable and accessible only by authorized participants.

## Features

- **Decentralized and Secure:** Utilizes blockchain technology to store meeting details securely and ensure immutability.
- **Smart Contracts:** Automates the scheduling process and enforces meeting rules without the need for intermediaries.
- **Transparency:** All participants can verify meeting details stored on the blockchain.
- **Privacy:** Only authorized participants can access the meeting details.

## Technologies Used

- **Solidity:** Smart contract development.
- **Ethereum:** Blockchain platform for deploying smart contracts.
- **Web3.js:** Interacting with the Ethereum blockchain.
- **React:** Frontend framework for building the user interface.
- **Node.js:** Backend server to manage interactions with the blockchain.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Truffle](https://www.trufflesuite.com/truffle)
- [Ganache](https://www.trufflesuite.com/ganache) (for local blockchain development)
- [MetaMask](https://metamask.io/) (for browser-based Ethereum wallet)

### Steps

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/decentralized-meeting-scheduler.git
   cd decentralized-meeting-scheduler
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Compile smart contracts:**
   ```sh
   truffle compile
   ```

4. **Deploy smart contracts to the local blockchain:**
   ```sh
   truffle migrate --network development
   ```

5. **Run the development server:**
   ```sh
   npm start
   ```

6. **Connect MetaMask to your local blockchain (e.g., Ganache):**
   - Open MetaMask.
   - Select "Custom RPC" and enter the Ganache RPC server details.

## Usage

1. **Create a new meeting:**
   - Navigate to the "Create Meeting" page.
   - Enter meeting details such as title, date, time, and participants.
   - Confirm the transaction in MetaMask to save the meeting details on the blockchain.

2. **View scheduled meetings:**
   - Navigate to the "Scheduled Meetings" page.
   - View the list of meetings you are authorized to see.

3. **Join a meeting:**
   - Click on a meeting in the "Scheduled Meetings" list.
   - Confirm your participation and access meeting details.

## Contributing

We welcome contributions to the Decentralized Meeting Scheduler project! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Ethereum](https://ethereum.org/)
- [Truffle](https://www.trufflesuite.com/truffle)
- [Ganache](https://www.trufflesuite.com/ganache)
- [MetaMask](https://metamask.io/)
