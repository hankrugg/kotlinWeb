# Kotlin Web Project

This is a Kotlin web project with a frontend built using npm React and a backend built with Gradle.

## Project Structure

The project is structured as follows:

- **frontend/**: Contains the frontend React application.
- **src/main/kotlin/com/example/plugins/**: Contains the Kotlin backend code.
- **build.gradle**: Gradle build configuration file for the backend.
- **package.json**: npm package configuration file for the frontend.

## Prerequisites

Before running the project, ensure you have the following dependencies installed:

- Java JDK
- Node.js and npm

## Setup Instructions

1. Navigate to the project directory:
``` cd kotlin-web-project```
2. Install backend dependencies using Gradle:
```./gradlew build```
3. Install frontend dependencies using npm:
```
cd frontend
npm install
```

## Running the Application
1. Start the backend server:
```./gradlew run```
2. Start the frontend development server:
```cd frontend
npm start
```
3. Access the application in your web browser at http://localhost:3000.

