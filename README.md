# Project Title

This is a full-stack application with a [`client`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FFullStack%2FNextAuthFullstack%2Fclient%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "d:\\FullStack\NextAuthFullstack\client") and [`server`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FFullStack%2FNextAuthFullstack%2Fserver%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "d:\\FullStack\NextAuthFullstack\server") directory.

## Client

The client-side of the application is built with Next.js, a React framework for building modern web applications. It includes server-side rendering, static site generation, and a number of other features that make it a powerful tool for building complex applications.

To start the client, navigate to the [`client`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FFullStack%2FNextAuthFullstack%2Fclient%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "d:\\FullStack\NextAuthFullstack\client") directory and run:

```sh
npm install
npm run dev
```

The client-side code is located in the `src` directory. This includes the application's components, pages, and utility functions.

## Server

The server-side of the application is a Node.js server built with Express. It handles API requests from the client and interacts with the database using Prisma.

To start the server, navigate to the [`server`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FFullStack%2FNextAuthFullstack%2Fserver%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "d:\\FullStack\NextAuthFullstack\server") directory and run:

```sh
npm install
npm run dev
```

The server-side code is located in the `src` directory. This includes the application's routes, controllers, and database models.

## Prisma

Prisma is used for database access. It provides an auto-generated and type-safe query builder that's tailored to your database schema. It's located in the `prisma` directory in the [`server`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FFullStack%2FNextAuthFullstack%2Fserver%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "d:\\FullStack\NextAuthFullstack\server") directory.

### Environment Variables

Both the client and server use environment variables for configuration. These are stored in `.env` files in their respective directories.

### Linting and Formatting

The project uses ESLint for linting and Prettier for code formatting. The configuration for these tools is located in the .eslintrc.json and `.prettierrc` files in the [`client`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FFullStack%2FNextAuthFullstack%2Fclient%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "d:\\FullStack\NextAuthFullstack\client") directory.
