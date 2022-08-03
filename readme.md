# Cotiss Take Home Project

## Overview

This project is designed to give you a brief introduction into using Node.js with the Fastify framework.
To keep this project as quick as possible, we have designed this project in a manner that isn't too open ended while still allowing you to showcase your coding skills.

## Task

In this repository we have set up a little boilerplate Fastify - Typescript application. Currently our API supports JWT authentication, where we can submit our email and password to receive a JWT token to prove our identity within our API. However, this only works well for user based authentication since creating tokens with expiries longer than an hour is highly discouraged which would make it hard for servers to communicate if they needed to send their own set of email and password each hour.

This is where API key and secret pairs work well, they allow an independent server to communicate over HTTPS.

You are going to create a Fastify plugin to handle API key authentication within our server. The goal would be to create a similar mechanism to what we already use for our JWT authentication, but verifies the API key and secret pair.

For this plugin you'll need to complete 3 files that have already been partially started with some boilerplate and TODOs:

- `domain/api/api.service.ts`
- `plugins/apikey-authentication.ts`
- `domain/api/api.controller.ts`

Inside `domain/api/test/api.test.ts` you will see that we have already written some tests. Feel free to have a look at this file before you get started so that you can work towards making sure all the tests pass when by the time you're finished.

We respect your time, so we only expect you to spend a few hours on the exercise. If you have any questions, please reach out to both matthew.oh@cotiss.com and janick.vw@cotiss.com, and ask away - we're here to help!

**Notes**

Similar to passwords, we shouldn’t store the raw secret within our database. Instead we should store a hash and compare them.

**Hints**

- To generate cryptographically strong pseudorandom data to use for the api secret key pair have a look at the [node:crypto](https://nodejs.org/api/crypto.html#cryptorandombytessize-callback) library
- For hashing and comparing hashes see [bcrypt](https://github.com/kelektiv/node.bcrypt.js)

**Additional resources that may be helpful**

- [Fastify Workshop](https://nearform.github.io/the-fastify-workshop/1)
- [Fastify Routes](https://www.fastify.io/docs/latest/Reference/Routes/#routes)
- [Fastify Plugins](https://www.fastify.io/docs/latest/Guides/Plugins-Guide/)
- [Fastify Typebox](https://www.fastify.io/docs/latest/Reference/TypeScript/#typebox)
- [Fastify Sensible](https://github.com/fastify/fastify-sensible)

## Assessment

Your project will be assessed on two key criteria:

1. Code quality
2. All tests run successfully

### Bonus section

Fastify can automatically generate route documentation based on the schemas (Typebox) provided to the routes in the controller.

As an optional bonus task to show a deeper level of understanding, generate an endpoint to show this automatically generated documentation.

**Hint**
Have a look at Fastify's ecosystem

## Prerequisites

1. Node >=16
2. Docker

## Getting started

1. Clone the repository
   ```sh
    git clone https://github.com/Cotiss/cotiss-fastify-project.git
   ```
2. Install the dependencies
   ```sh
    npm install
   ```
3. Run the dependent services with Docker
   ```sh
    npm run up
   ```
4. Start the application
   ```sh
    npm run dev
   ```
5. Explore the code
   ```sh
    code .
   ```
6. Test your code
   ```sh
    npm run test
   ```

## Walkthrough

If you wish to explore this repository further, the codebase is heavily commented to help you learn the basics. It's recommended starting in the following order:

1. server.ts
2. config.ts
3. index.ts

After this feel free to navigate your way around the codebase.

**Good luck!**

## Submission

1. Update the Readme with an overview of what you changed and list any assumptions you made along the way.
2. Upload your improved project to a private GitHub repository and invite @janickvwcotiss, @matt01671 and @danew.
3. Finally, please send an email to careers@cotiss.com with a link to your repository.
