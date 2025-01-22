# Next.js Vehicle Filter Application

## Description
A Next.js application that allows users to filter vehicle makes and models by year. The application fetches data from the NHTSA API and displays the results with a user-friendly interface styled with Tailwind CSS.

## Features
- Filter vehicle makes and models by year.
- Fetch data from the NHTSA API.
- Styled with Tailwind CSS.
- Configured with ESLint and Prettier for code quality.
- Uses React's Suspense for handling loading states.

## Setup Instructions

### Prerequisites
- Node.js (LTS version) and npm installed.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/nextjs-vehicle-filter.git
    cd nextjs-vehicle-filter
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env.local` file in the root directory with the following content:
    ```bash
    NEXT_PUBLIC_API_URL=https://vpic.nhtsa.dot.gov/api/vehicles
    ```

### Running the Application

1. Start the development server:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

2. Build the application for production:
    ```bash
    npm run build
    ```

3. Start the production server:
    ```bash
    npm run start
    ```

## Usage
1. Open the application in your browser.
2. Use the dropdowns to select a vehicle make and model year.
3. Click the "Next" button to view the vehicle models for the selected make and year.

## Screenshots
Include screenshots or a screencast to visually demonstrate how to use the application.

1. **Home Page**:
    ![Home Page](screenshots/home.png)

2. **Selecting Vehicle Make and Year**:
    ![Filter Selection](screenshots/filter.png)

3. **Result Page**:
    ![Result Page](screenshots/result.png)

## Project Structure
- `/pages`: Next.js pages.
- `/components`: React components.
- `/styles`: Global styles and Tailwind CSS configuration.

## Configuration

### Environment Variables
The application uses environment variables to store API endpoints. Create a `.env.local` file in the root directory.

### ESLint and Prettier
The project is configured with ESLint and Prettier for code quality and consistency. The configuration files are:
- `.eslintrc.js`
- `.prettierrc`

## Contributing
Feel free to submit issues or pull requests. Contributions are welcome!

## License
This project is licensed under the MIT License.

## Author
[Your Name]
