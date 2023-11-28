# VEN

This project is inspired on GraphCMS. The idea is to bring the flexibility to manage the content of the user's website

This repository is a monorepo project that includes two main directories: `api` and `web`.

- **API**: The `api` directory is built using Fastify and GraphQL. It provides the backend functionality for the project.
  The server and DB is runs using docker.

- **Web**: The `web` directory is built using React 18 and utilizes Vite as a development server. It incorporates UI libraries such as Shadcn/UI and Radix for enhanced user interfaces.

## ⚠️ Under development

### Features

- It should be able to register or invite a user;
- It should be able to register a tenant;
- It should be able to register a project;
- It should be able to register a project schema;

#### Details

- Each user can be assigned to multiple projects;
- Each tenant can have multiple projects;
- Each project has a unique schema;
