# Media Hub Backend

Social Media Dashboard

# Description

**media-hub-backend** Create a centralized dashboard that aggregates data from various social media platforms, providing users with insights into their social media performance.

# Table of Contents

- [Setup](#setup)
  - [Dependencies](#dependencies)
  - [Getting Started](#getting-started)
  - [Environment Variables](#environment-variables)
  - [Database and ORM](#database-and-orm)
- [License](#license)


## Setup

### Dependencies

- [NodeJS](https://github.com/nodejs/node) - A JavaScript runtime environment
- [Express](https://github.com/expressjs/express) - A web application framework for NodeJS
- [Sequelize](https://github.com/sequelize/sequelize) - A promise-based ORM for NodeJS
- [Eslint](https://eslint.org/) - A linting utility for JavaScript
- [Babel](https://babeljs.io/docs/en/) - A JavaScript compiler

### Getting Started

Follow these steps to set up the project in development mode

- Install [Nodejs](https://nodejs.org/en/download/)
- Clone the repository by running the command
  ```
  git clone https://github.com/boltonotieno/media-hub-backend.git
  ```
- Run `cd media-hub-backend` to enter the application's directory
- Install the application's dependencies by running the command
  ```
  yarn install
  ```
- Create a `.env` file in the root of your directory using the `.env.example` file in the repository
- Start the application by running
  ```
  yarn start:dev
  ```
  The application should now be running at `http://127.0.0.1:PORT`. (replace PORT with what you have in your .env)

### Environment Variables

 Create your `.env` file in the root directory by following the `.env.example` below
  ```
    PORT=
    NODE_ENV=
    DATABASE_UR=
    DATABASE_DIALECT=
    JWT_SECRET_KEY=
  ```

### Database and ORM

- Create a database in `PostgreSQL` and name it `media-hub`
- Run database migrations
  ```
  yarn run db:migrate and yarn run db:seed
  ```
- Check the database and confirm that the `users` table has been created

## License

This application is licensed under the terms of the [MIT License](https://github.com/boltonotieno/media-hub-backend/blob/develop/LICENCE)