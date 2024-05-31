# MyCarango

## Overview

MyCarango is a Node.js application for managing and tracking the maintenance history of vehicles. This application allows users to add vehicles and log maintenance activities, providing a historical record of all maintenance performed on each vehicle.

The entire app was built on TDD, Clean Arch and Solid principles

## Features

- Add new vehicles to the system.

## Future Features

- Log maintenance activities for each vehicle.
- Retrieve and display the maintenance history of each vehicle.

## Setup

### Prerequisites

- Node.js (>= 20.x)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/vitorconti/myCarango.git
   cd my-carango
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

### Building the Project

To build the project, run the following command:

```sh
npm run build
```

This command will:

1. Clean the `dist` directory.
2. Compile the TypeScript files.
3. Copy the `./src/infra/db/sqlite/myCarango-database.db` file to the `dist/src` directory.

### Running the Application

#### CLI Server

To start the CLI server:

```sh
npm run start:cli
```

## Usage

### Adding a Vehicle

To add a vehicle, run the CLI server and follow the prompt to enter the vehicle's name, brand, and year:

```sh
npm run start:cli
```

<!-- ### Logging Maintenance Activities

After adding a vehicle, you can log maintenance activities through the CLI interface. For example, to log a maintenance activity for "Chevrolet Opel Kadett 1994", follow the prompts provided by the CLI.

### Viewing Maintenance History

The application will provide options to view the maintenance history of each vehicle through the CLI interface. -->

## Development

### Running in Development Mode

To run the application in development mode with auto-reloading:

```sh
npm run dev
```

### Running Tests

To run all tests:

```sh
npm test:ci
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
